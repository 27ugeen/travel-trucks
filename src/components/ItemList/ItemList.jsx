import { useState, useEffect, useRef } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import Button from '../Button/Button';
import ClipLoader from 'react-spinners/ClipLoader';
import scss from './ItemList.module.scss';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const isFetching = useRef(false);

  const fetchItems = async () => {
    if (isFetching.current) return;
    isFetching.current = true;
    setLoading(true);
    try {
      const response = await fetch(
        `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?page=${page}&limit=4`
      );
      const data = await response.json();
      const { total, items: newItems } = data;

      setTotal(total);

      const filteredNewItems = newItems.filter(
        (newItem) => !items.some((item) => item.id === newItem.id)
      );

      if (
        filteredNewItems.length === 0 ||
        items.length + filteredNewItems.length >= total
      ) {
        setHasMore(false);
      }

      setItems((prevItems) => [...prevItems, ...filteredNewItems]);
    } catch (error) {
      console.error('Помилка завантаження даних:', error);
    } finally {
      setLoading(false);
      isFetching.current = false;
    }
  };

  useEffect(() => {
    fetchItems();
  }, [page]);

  const handleShowMore = () => {
    setPage((prevPage) => prevPage + 1);
    console.log(items);
  };

  return (
    <div className={scss.component}>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
      {loading && (
        <div className={scss.loader}>
          <ClipLoader color="var(--button)" size={50} />
        </div>
      )}
      {!loading && hasMore && (
        <div className={scss.button}>
          <Button variant="secondary" onClick={handleShowMore}>
            Load more
          </Button>
        </div>
      )}
    </div>
  );
};

export default ItemList;

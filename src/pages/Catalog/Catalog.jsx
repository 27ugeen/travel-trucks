import ItemList from '../../components/ItemList/ItemList';
import SearchForm from '../../components/SearchForm/SearchForm';
import scss from './Catalog.module.scss';

const Catalog = () => {
  return (
    <div className="content">
      <div className={scss.catalog}>
        <SearchForm />
        <ItemList />
      </div>
    </div>
  );
};

export default Catalog;

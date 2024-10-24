import { useNavigate } from 'react-router-dom';
import scss from './Home.module.scss';
import Button from '../../components/Button/Button';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/catalog');
  };

  return (
    <div className={scss.component}>
      <div className="content">
        <h1 className={scss.title}>Campers of your dreams</h1>
        <h2 className={scss.subtitle}>
          You can find everything you want in our catalog
        </h2>
        <Button onClick={handleButtonClick}>View now</Button>
      </div>
    </div>
  );
};

export default Home;

import './featuredProperties.css';
import useFetch from '../../hooks/useFetch';

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    'http://localhost:5000/api/hotels/countByType'
  );
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/87375132.webp?k=a3eff4ea2475f3a4de01f017463acd719bddada5e63f87f6c0952f8590498865&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/117127036.webp?k=7f59e52c89ee2a4b3910118542f585c4cce52fc46627413eb08b760076b9f72d&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Santos eugene seteinjee</span>
        <span className="fpCity">Austria</span>
        <span className="fpPrice">Starting from $90</span>
        <div className="fpRating">
          <button>8.0</button>
          <span>Verygood</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Mexico</span>
        <span className="fpPrice">Starting from $150</span>
        <div className="fpRating">
          <button>7.0</button>
          <span>Good</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;

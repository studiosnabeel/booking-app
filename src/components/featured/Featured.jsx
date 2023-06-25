import './featured.css';

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/640442.jpg?k=90687d20998ee01829027c5e6396a0b8c6d9198bb76bd5ffc7c49c5b779e18ae&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Karachi</h1>
          <h2>404 Gulshan</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/619932.jpg?k=81c20cf1191a1d05472b45413bed3cee67dc92b8c1387c60a960beb5629f109d&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Dubai</h1>
          <h2>102 burj khalifa</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/654659.jpg?k=9c4ac59d35869485631346dc1ee16d28e82ec5f79654bf56b4b4eaeef3388299&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Istambul</h1>
          <h2>3875 ertugrul</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;

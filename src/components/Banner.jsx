import { Link } from "react-router";
import couch from "../assets/images/couch.png";

function Banner() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>
                Săn ngay ưu đãi{" "}
                <span className="d-block">Ghế đẹp giá tốt!</span>
              </h1>
              <p className="mb-4">
                Khám phá bộ sưu tập ghế sang trọng của chúng tôi và biến không
                gian sống của bạn thành nơi lý tưởng với giá cực tốt!
              </p>
              <p>
                <Link to={"/shop"} className="btn btn-secondary me-2">
                  Mua ngay
                </Link>
                <Link to={"/shop"} className="btn btn-white-outline">
                  Khám phá
                </Link>
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-img-wrap">
              <img src={couch} className="img-fluid" alt="Couch" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;

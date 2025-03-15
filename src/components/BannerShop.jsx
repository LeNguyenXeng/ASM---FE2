import couch from "../assets/images/couch.png";

function BannerShop() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>Sản phẩm</h1>
              <p className="mb-4">
                Khám phá bộ sưu tập ghế sang trọng của chúng tôi và biến không
                gian sống của bạn thành nơi lý tưởng với giá cực tốt!
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-img-wrap">
              <img src={couch} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BannerShop;

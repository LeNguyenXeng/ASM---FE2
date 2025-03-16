import img3 from "../assets/images/product-3.png";
import TextProductDetail from "./TextProductDetail";

function ProductDetailCMP() {
  return (
    <>
      <section className="py-5 ">
        <div className="container" style={{ marginTop: 70, marginBottom: 40 }}>
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className=" mb-3 d-flex justify-content-center">
                <a
                  data-fslightbox="mygalley"
                  className="rounded-4"
                  data-type="image"
                >
                  <img
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100vh",
                      margin: "auto",
                    }}
                    className="rounded-4 fit"
                    src={img3}
                  />
                </a>
              </div>
            </aside>
            <main className="col-lg-6">
              <TextProductDetail />
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
export default ProductDetailCMP;

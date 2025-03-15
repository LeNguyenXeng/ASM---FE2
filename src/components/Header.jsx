import userIcon from "../assets/images/user.svg";
import cartIcon from "../assets/images/cart.svg";
import { Link } from "react-router";

function Header() {
  return (
    <>
      <div>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="author" content="Untree.co" />
        <link rel="shortcut icon" href="favicon.png" />
        <meta name="description" content="" />
        <meta name="keywords" content="bootstrap, bootstrap4" />
        <title>ASM 2</title>
        <nav
          className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark"
          aria-label="Furni navigation bar"
        >
          <div className="container">
            <Link className="navbar-brand" to="/">
              Homely<span>.</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsFurni"
              aria-controls="navbarsFurni"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarsFurni">
              <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Trang Chủ
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/shop">
                    Sản Phẩm
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/about">
                    Giới Thiệu
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/contact">
                    Liên Hệ
                  </Link>
                </li>
              </ul>
              <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                <li>
                  <Link className="nav-link" to={"/login"}>
                    <img src={userIcon} alt="User" />
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="cart.html">
                    <img src={cartIcon} alt="Cart" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;

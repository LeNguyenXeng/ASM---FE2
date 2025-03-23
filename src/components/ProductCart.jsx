import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, deleteProductId } from "../redux/action";
import { Button, Modal } from "react-bootstrap";
import formatCurrency from "../consts/formatCurrency";
import { useNavigate } from "react-router";

function ProductCart({ item }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const increaseQuantity = () => {
    const productItem = {
      ...item,
      quantity: quantity + 1,
    };
    dispatch(addToCart(productItem, true));
    setQuantity(quantity + 1);
  };

  const reduceQuantity = () => {
    const productItem = {
      ...item,
      quantity: quantity - 1,
    };
    if (quantity > 0) {
      dispatch(addToCart(productItem, true));
      setQuantity(quantity - 1);
    }
    if (quantity - 1 == 0) {
      handleShow();
    }
  };

  const handleChange = (e) => {
    const productItem = {
      ...item,
      quantity: Number(e.target.value),
    };
    e.preventDefault();
    setQuantity(e.target.value);
    dispatch(addToCart(productItem, true));
  };

  const handleDelete = (id) => {
    dispatch(deleteProductId(id));
    handleClose();
  };

  const handleNavigateToDetail = (id) => {
    navigate(`/product-detail/${id}`);
  };

  useEffect(() => {
    const total = quantity * item.price;
    setTotal(total);
  }, [quantity]);

  return (
    <>
      <tr key={item.id}>
        <td
          style={{ cursor: "pointer" }}
          onClick={() => handleNavigateToDetail(item.id)}
          className="product-thumbnail"
        >
          <img src={item.image} alt="Image" className="img-fluid" />
        </td>
        <td
          style={{ cursor: "pointer" }}
          onClick={() => handleNavigateToDetail(item.id)}
          className="product-name"
        >
          <h2 className="h5 text-black">{item.name}</h2>
        </td>
        <td>{formatCurrency(item.price)}</td>
        <td>
          <div
            className="input-group mb-3 d-flex align-items-center quantity-container"
            style={{ maxWidth: 120 }}
          >
            <div className="input-group-prepend">
              <button
                onClick={reduceQuantity}
                className="btn btn-outline-black decrease"
                type="button"
              >
                −
              </button>
            </div>
            <input
              type="number"
              min={0}
              className="form-control text-center quantity-amount"
              value={quantity}
              onChange={handleChange}
            />
            <div className="input-group-append">
              <button
                onClick={increaseQuantity}
                className="btn btn-outline-black increase"
                type="button"
              >
                +
              </button>
            </div>
          </div>
        </td>
        <td>{formatCurrency(total)}</td>
        <td>
          <button
            onClick={() => handleDelete(item.id)}
            className="btn btn-black btn-sm"
          >
            X
          </button>
        </td>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Xóa sản phẩm?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Bạn có chắc chắn muốn xóa sản phẩm này?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Không
            </Button>
            <Button
              variant="danger"
              style={{ background: "#dc3545", border: "#dc3545" }}
              onClick={() => handleDelete(item?.id)}
            >
              Đồng ý
            </Button>
          </Modal.Footer>
        </Modal>
      </tr>
    </>
  );
}
export default ProductCart;

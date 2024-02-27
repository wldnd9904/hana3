import { useState, useEffect } from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import { useSession } from "../../contexts/session-context";
import { Cart } from "../../type";

function ItemLayout() {
  const [curItem, setCurItem] = useState<Cart>();
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    session: { cart },
  } = useSession();
  useEffect(() => {
    if (id) setCurItem(cart.find((item) => item.id == +id));
  }, [id]);
  const goItem = (item: Cart) => {
    setCurItem(item);
    navigate(`/items/${item.id}`);
  };

  return (
    <div className="flex flex-row">
      <div className="w-1/2">
        <ul>
          <li
            className={`cursor-pointer ${id ? "" : "scale-110 font-bold"}`}
            onClick={() => {
              navigate("/items");
            }}
          >
            <span />
            <span>상품 추가</span>
            <span />
          </li>
          {cart.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer ${`${item.id}` == id ? "scale-110 font-bold" : ""}`}
              onClick={() => {
                goItem(item);
              }}
            >
              <span className="id">{item.id}</span>
              <span>{item.name}</span>
              <span>({item.price})</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2">
        <Outlet context={{ item: curItem }} />
      </div>
    </div>
  );
}
export default ItemLayout;

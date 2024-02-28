import { useRef, useEffect } from "react";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSession } from "../../contexts/session-context";
import { Cart } from "../../type";
import { HStack } from "../Stack";

const ItemDetailContainer = styled.div`
  border-radius: 10px;
  box-shadow:
    rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  padding: 1em;
  margin: 10px;
  box-sizing: border-box;

  input {
    border: 1px solid black;
    margin: 0.5em;
  }
  button {
    padding: 0.5em;
  }
`;

function ItemDetail() {
  const { id } = useParams();
  const { item } = useOutletContext<{ item: Cart }>();
  const {
    session: { cart },
    changeItem,
    removeItem,
  } = useSession();
  const nameRef = useRef<HTMLInputElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (item) {
      nameRef.current!.value = item.name;
      priceRef.current!.value = `${item.price}`;
      return;
    }
    if (id && cart.length) {
      const curItem: Cart | undefined = cart.find((item) => item.id == +id);
      if (curItem) {
        nameRef.current!.value = curItem.name;
        priceRef.current!.value = `${curItem.price}`;
      }
    }
  }, [id, cart]);
  const remove = () => {
    removeItem(+id!);
    navigate("/items");
  };
  const edit = () => {
    const item: Cart = {
      id: +id!,
      name: nameRef.current!.value,
      price: +priceRef.current!.value,
    };
    changeItem(item);
  };
  return (
    <ItemDetailContainer>
      <label>#{id}</label>
      <HStack>
        <label>이름:</label>
        <input style={{ width: "5em" }} type="text" ref={nameRef} />
      </HStack>

      <HStack>
        <label>가격:</label>
        <input style={{ width: "5em" }} type="number" ref={priceRef} />
      </HStack>
      <HStack className={"justify-center gap-2"}>
        <button className="bg-blue-500 text-white" onClick={edit}>
          수정
        </button>
        <button className="bg-red-500 text-white" onClick={remove}>
          삭제
        </button>
      </HStack>
    </ItemDetailContainer>
  );
}
export default ItemDetail;

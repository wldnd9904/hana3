import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useSession } from "../../contexts/session-context";
import { HStack, VStack } from "../Stack";
import { Cart } from "../../type";
import { useNavigate } from "react-router-dom";

const ItemsContainer = styled.div`
  border-radius: 10px;
  padding: 1em;
  margin: 10px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    border: 1px solid black;
    width: 4em;
    margin: 0.5em;
    border-radius: 5px;
  }
  button {
    padding: 0.5em;
  }
`;

function Items2() {
  const {
    session: { cart },
  } = useSession();
  const navigate = useNavigate();
  const goItem = (item: Cart) => {
    navigate(`/items2/${item.id}`);
  };
  const { addItem } = useSession();
  const itemNameRef = useRef<HTMLInputElement | null>(null);
  const itemPriceRef = useRef<HTMLInputElement | null>(null);
  const itemIDRef = useRef<HTMLInputElement | null>(null);
  const append = () => {
    if (!itemNameRef.current?.value) {
      alert("상품명을 입력하세요.");
      itemNameRef.current?.focus();
      return;
    }
    if (!itemPriceRef.current?.value) {
      alert("상품가격을 입력하세요.");
      itemPriceRef.current?.focus();
      return;
    }
    addItem({
      id: itemIDRef.current!.value ? +itemIDRef.current!.value : undefined,
      name: itemNameRef.current.value,
      price: +itemPriceRef.current.value,
    });
    itemNameRef.current!.value = "";
    itemPriceRef.current!.value = "";
    itemIDRef.current!.value = "";
  };
  return (
    <VStack className="items-center">
      <ul>
        {cart.map((item) => (
          <li
            key={item.id}
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
      <ItemsContainer>
        <div className="font-bold mb-2">상품 추가하기</div>
        <div id="newItem">
          <HStack>
            <VStack>
              <label>상품ID:</label>
              <input type="number" ref={itemIDRef}></input>
            </VStack>
            <VStack>
              <label>상품명:</label>
              <input type="text" ref={itemNameRef}></input>
            </VStack>
            <VStack>
              <label>가격:</label>
              <input type="number" ref={itemPriceRef}></input>
            </VStack>
            <button onClick={append}>추가</button>
          </HStack>
        </div>
      </ItemsContainer>
    </VStack>
  );
}
export default Items2;

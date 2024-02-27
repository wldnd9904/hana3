import { useRef } from "react";
import styled from "styled-components";
import { useSession } from "../../contexts/session-context";
import { VStack } from "../Stack";

const ItemsContainer = styled.div`
  border-radius: 10px;
  box-shadow:
    rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  padding: 1em;
  margin: 10px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    border: 1px solid black;
    width: 4em;
    margin: 0.5em;
  }
  button {
    padding: 0.5em;
  }
`;

function Items() {
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
    <ItemsContainer>
      <div className="font-bold mb-2">상품 추가하기</div>
      <div id="newItem">
        <VStack>
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
        </VStack>
      </div>
    </ItemsContainer>
  );
}
export default Items;

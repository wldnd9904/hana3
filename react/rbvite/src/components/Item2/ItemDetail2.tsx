import { useRef, useEffect, useState } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { useSession } from "../../contexts/session-context";
import { Cart } from "../../type";
import { HStack, VStack } from "../Stack";
import useToggle from "../../hooks/toggle";

const ItemDetailContainer = styled.div`
  border-radius: 10px;
  padding: 1em;
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  button {
    padding: 0.5em;
  }
`;

function ItemDetail2() {
  const { id } = useParams();
  const [editting, toggleEditting] = useToggle(false);
  const [item, setItem] = useState<Cart>();
  const { item: contextItem } = useOutletContext<{ item: Cart }>();
  const {
    session: { cart },
    changeItem,
    removeItem,
  } = useSession();
  const nameRef = useRef<HTMLInputElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (editting && item) {
      nameRef.current!.value = item.name;
      priceRef.current!.value = `${item.price}`;
    }
  }, [editting]);
  useEffect(() => {
    if (contextItem) {
      setItem(contextItem);
      return;
    }
    if (id) {
      const curItem: Cart | undefined = cart.find((item) => item.id == +id);
      if (curItem) setItem(curItem);
    }
  }, [contextItem]);
  const remove = () => {
    removeItem(+id!);
    navigate("/items2/");
  };
  const save = () => {
    const newItem: Cart = {
      id: +id!,
      name: nameRef.current!.value,
      price: +priceRef.current!.value,
    };
    changeItem(newItem);
    setItem(newItem);
    toggleEditting();
  };
  const cancel = () => {
    toggleEditting();
  };
  return (
    <ItemDetailContainer>
      {!item ? (
        <VStack>
          <div className="p-4">잘못된 품목입니다.</div>
          <button
            className="bg-blue-500 text-white"
            onClick={() => {
              navigate("/items2");
            }}
          >
            목록으로
          </button>
        </VStack>
      ) : (
        <>
          <label>#{id}</label>
          <HStack>
            {editting ? (
              <HStack>
                <label>이름:</label>
                <input
                  className="w-20 h-6 text-center box-border rounded-md border-black border"
                  type="text"
                  ref={nameRef}
                />
                <label>가격:</label>
                <input
                  className="w-20 h-6 text-center box-border rounded-md border-black border"
                  type="number"
                  ref={priceRef}
                />
              </HStack>
            ) : (
              <HStack>
                <span>이름:</span>
                <span className="w-20 h-6 text-center box-border">
                  {item?.name}
                </span>
                <span>가격:</span>
                <span className="w-20 h-6 text-center box-border">
                  {item?.price}
                </span>
              </HStack>
            )}
          </HStack>
          <HStack className={"justify-center gap-2"}>
            {editting ? (
              <button className="bg-green-500 text-white" onClick={save}>
                저장
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white"
                onClick={toggleEditting}
              >
                수정
              </button>
            )}
            {editting ? (
              <button className="bg-orange-500 text-white" onClick={cancel}>
                취소
              </button>
            ) : (
              <button
                className="bg-pink-500 text-white"
                onClick={() => {
                  navigate("/items2");
                }}
              >
                뒤로
              </button>
            )}
            <button className="bg-red-500 text-white" onClick={remove}>
              삭제
            </button>
          </HStack>
        </>
      )}
    </ItemDetailContainer>
  );
}
export default ItemDetail2;

import { useState, useEffect } from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import { useSession } from "../../contexts/session-context";
import { Cart } from "../../type";
import { styled } from "styled-components";
import { HStack, VStack } from "../Stack";
import { MdPerson } from "react-icons/md";

const Items2Container = styled.div`
  border-radius: 10px;
  box-shadow:
    rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  margin: 10px;
  box-sizing: border-box;
`;

function ItemLayout2() {
  const navigate = useNavigate();
  const {
    session: { loginUser },
  } = useSession();
  const [curItem, setCurItem] = useState<Cart>();
  const setOutletItem = (item: Cart) => {
    setCurItem(item);
    navigate(`./${item.id}`);
  };
  return (
    <Items2Container>
      <HStack className="bg-blue-500 text-white rounded-t-xl font-bold justify-between px-4">
        <span>장바구니</span>
        {loginUser ? (
          <HStack>
            <MdPerson />
            {loginUser?.name}
          </HStack>
        ) : (
          <a
            className="text-white font-bold"
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </a>
        )}
      </HStack>
      {loginUser ? (
        <Outlet context={{ setOutletItem: setOutletItem, item: curItem }} />
      ) : (
        <div className="h-1rem">로그인 해주세요.</div>
      )}
    </Items2Container>
  );
}
export default ItemLayout2;

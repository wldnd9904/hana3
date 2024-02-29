import { useNavigate } from "react-router-dom";
import { useTimeout5 } from "./hooks/timeout";

export const NotFound = () => {
  const navigate = useNavigate();
  useTimeout5(() => navigate(-1), 1500);
  return (
    <div className="text-red-500">
      {location.pathname} 페이지를 찾을 수 없습니다!
    </div>
  );
};

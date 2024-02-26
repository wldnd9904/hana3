import {
  ChangeEvent,
  useDeferredValue,
  useEffect,
  useState,
  useTransition,
} from "react";
import { useDebounce } from "../hooks/debounce";

type List = {
  id: number;
  value: string;
};
function DeferTrans() {
  const [searchStr, setSearchStr] = useState("");
  //   const deferred = useDeferredValue(searchStr);
  const [isPending, startTransition] = useTransition();
  const [list, setList] = useState<List[]>([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSearchStr(value);
    // startTransition(() => {});
  };
  useDebounce(
    () => {
      const lst = [];
      for (let i = 0; i < 1000; i++) lst.push({ id: i + 1, value: searchStr });
      setList(lst);
    },
    500,
    [searchStr]
  );

  return (
    <div id="DeferTrans">
      <div className="title">DeferTrans</div>
      <input type="text" onChange={handleChange}></input>
      <h2>{searchStr}</h2>
      <h2>{isPending && "Loading..."}</h2>
      {list.map((li) => (
        <h2 key={li.id}>{li.value}</h2>
      ))}
    </div>
  );
}

export default DeferTrans;

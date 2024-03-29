import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Cart } from "../type";
import { useSession } from "../contexts/session-context";

type ItemProps = {
  item?: Cart;
  // onRemove: (id: number) => void;
  // onChange: (item: Cart) => void;
};

function Item({ item /*onRemove, onChange*/ }: ItemProps) {
  const [editting, setEditting] = useState(false);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);
  const { changeItem, removeItem } = useSession();
  const toggleEdit = () => {
    if (editting && item) {
      changeItem({
        id: item.id,
        name: nameRef.current!.value,
        price: +priceRef.current!.value,
      });
    }
    flushSync(() => {
      setEditting((b) => !b);
    });
    if (!editting && item) {
      nameRef.current!.value = item.name;
      priceRef.current!.value = `${item.price}`;
    }
  };
  if (!item) {
    return <>no item </>;
  }
  return (
    <li key={item.id}>
      <span className="id">{item.id}</span>
      <div style={{ width: "80%" }}>
        {editting ? (
          <div>
            <input style={{ width: "5em" }} type="text" ref={nameRef} />
            <input style={{ width: "5em" }} type="number" ref={priceRef} />
          </div>
        ) : (
          <span>
            {item.name}: {item.price.toLocaleString()}원
          </span>
        )}
      </div>
      <button style={{ backgroundColor: "pink" }} onClick={toggleEdit}>
        E
      </button>
      <button
        onClick={() => {
          removeItem(item.id);
        }}
      >
        X
      </button>
    </li>
  );
}

export default Item;

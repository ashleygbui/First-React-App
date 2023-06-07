import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1); //hook. allows us to get built in features in react
  /*const getMessage = () => {
    return items.length === 0 ? <p>No Item in List</p> : null;
  };*/
  return (
    //component cannot return more than 1 element but can wrap this or fragment
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Item in List</p>}
      <ul className="list-group">
        {items.map(
          (
            item,
            index //to render data dynamically, wrap in {}
          ) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item "
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {" "}
              {item}
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default ListGroup;

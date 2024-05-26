"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRef, useState } from "react";
import useTodoItems, { addItem, deleteItem } from "./firebase_services";

export default function Home() {
  const [items, setItems] = useState([]);
  useTodoItems(setItems);
  function addItems() {
    setItems(["", ...items]);
  }
  const handleClick = async (i, inputRef) => {
    // when button to add is clicked, this function adds it to the database
    const value = inputRef.current.value;
    const itemId = await addItem(value);
    const itemsCopy = [...items];
    itemsCopy[i] = { id: itemId, value };
    setItems(itemsCopy);
  };

  const handleDelete = (i, itemId) => {
    //deletes the item from the database when called
    const itemsCopy = [...items];
    itemsCopy.splice(i, 1);
    setItems(itemsCopy);
    deleteItem(itemId);
  };

  return (
    <main className={styles.main}>
      <button onClick={addItems}>+</button>
      {items.map((item, index) => {
        return (
          <Item
            key={item.id || index}
            id={item.id}
            item={item.value}
            setItems={setItems}
            i={index}
            handleClick={handleClick}
            handleDelete={handleDelete}
          ></Item>
        );
      })}
    </main>
  );
}

function Item({ item, i, handleDelete, handleClick, id }) {
  const inputRef = useRef();
  //creates the item on the page
  return (
    <div>
      {item ? (
        <div className="listedItems">
          {item}
          <button className='modifyButton' onClick={() => handleDelete(i, id)}> delete</button>
        </div>
      ) : (
        <div>
          <input ref={inputRef} />
          <button className='modifyButton' onClick={() => handleClick(i, inputRef)}>Add</button>
        </div>
      )}
    </div>
  );
}

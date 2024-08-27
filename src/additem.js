import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItem, deleteItem } from "./redux/addItemReducer";

function AddItem() {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem({ id: Date.now(), item }));
  };
  
  return (
    <div>
      <div>
        <h1>Shopping List</h1>
      </div>
      <input
        type="text"
        placeholder="Enter item"
        onChange={(e) => setItem(e.target.value)}
        value={item}
      />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
}

export default AddItem;

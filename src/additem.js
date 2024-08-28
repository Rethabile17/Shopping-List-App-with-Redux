import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItem, } from "./redux/addItemReducer";

function AddItem() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [optionalNotes,setOptionalNotes] = useState("");
  const [Category, setCategory] = useState("");
  
  const dispatch = useDispatch();


  const handleAddItem = () => {
    dispatch(addItem({ id: Date.now(),
        item,
        quantity,
        optionalNotes,
        Category,
     }));

     setItem("");
     setQuantity(1);
     setOptionalNotes("");
     setCategory("");
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
      <input type="number"
      placeholder="Insert Quantity"
      name="quantity"
      onChange={(e) => setQuantity(e.target.value)}
      value={quantity}
      />
      <textarea
      name="optional notes"
      placeholder="Optional notes here"
      onChange={(e) => setOptionalNotes(e.target.value)}
      value={optionalNotes}
      />
      <div>
        <label>Categories:</label>
        <select value={Category} onChange={(e) => setCategory(e.target.value)}>
            <option value="tech">tech</option>
            <option value="food">food</option>
            <option value="toys">toys</option>
            <option value="sport">sport</option>
            <option value="clothing">clothing</option>
        </select>
      </div>
      <button onClick={handleAddItem}>Add</button>
     
    </div>
  );
}

export default AddItem;

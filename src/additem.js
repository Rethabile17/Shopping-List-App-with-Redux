import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItem } from "./redux/addItemReducer";
import './AddItem.css'; // Import the CSS file

function AddItem() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [optionalNotes, setOptionalNotes] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(""); // State for validation error messages

  const dispatch = useDispatch();

  const handleAddItem = () => {
    setError("");

    if (!item || !quantity || !category) {
      setError("Please fill out all required fields.");
      return;
    }

    dispatch(addItem({
      id: Date.now(),
      item,
      quantity,
      optionalNotes,
      category,
    }));

    setItem("");
    setQuantity(1);
    setOptionalNotes("");
    setCategory("");
  };

  return (
    <div className="add-item-container"> {/* Add container class */}
      <h1 className="title">Shopping List</h1>
      <input
        type="text"
        placeholder="Enter item"
        onChange={(e) => setItem(e.target.value)}
        value={item}
      />
      <input
        type="number"
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
        <label className="Categories">Categories:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          <option value="tech">Tech</option>
          <option value="food">Food</option>
          <option value="toys">Toys</option>
          <option value="sport">Sport</option>
          <option value="clothing">Clothing</option>
        </select>
      </div>
      <button className="Button" onClick={handleAddItem}>Add</button>

      {error && <div className="error-message">{error}</div>} {/* Use error class */}
    </div>
  );
}

export default AddItem;

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addItem, updateItem, removeItem } from "./redux/addItemReducer"; 
import { useNavigate } from "react-router-dom";
import './AddItem.css'; 

function AddItem() {
  const navigate = useNavigate();
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [optionalNotes, setOptionalNotes] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(""); 
  const [searchTerm, setSearchTerm] = useState(""); 
  const [selectedCategory, setSelectedCategory] = useState(""); 
  const [editingItemId, setEditingItemId] = useState(null); 

  const dispatch = useDispatch();
  const items = useSelector((state) => state.shoppingItem); 

  const handleAddItem = () => {
    setError("");
    if (!item || !quantity || !category) {
      setError("Please fill out all required fields.");
      return;
    }

    if (editingItemId) {
      dispatch(updateItem({
        id: editingItemId,
        item,
        quantity,
        optionalNotes,
        category,
      }));
      setEditingItemId(null); 
    } else {
      const existingItem = items.find(currentItem => 
        currentItem.item.toLowerCase() === item.toLowerCase() && currentItem.category === category
      );

      if (existingItem) {
        dispatch(updateItem({
          id: existingItem.id, 
          item: existingItem.item,
          quantity: existingItem.quantity + quantity, 
          optionalNotes: existingItem.optionalNotes,
          category: existingItem.category,
        }));
      } else {
        dispatch(addItem({
          id: Date.now(),
          item,
          quantity,
          optionalNotes,
          category,
        }));
      }
    }

    setItem("");
    setQuantity(1);
    setOptionalNotes("");
    setCategory("");
  };

  const goToPrivacy = () => {
    navigate("/policy");
  };

  const filteredItems = (items || []).filter((currentItem) => {
    const matchesCategory = selectedCategory ? currentItem.category === selectedCategory : true;
    const matchesSearchTerm = currentItem.item.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  const categories = ["All", "tech", "food", "toys", "sport", "clothing"];

  const handleEditItem = (currentItem) => {
    setItem(currentItem.item);
    setQuantity(currentItem.quantity);
    setOptionalNotes(currentItem.optionalNotes);
    setCategory(currentItem.category);
    setEditingItemId(currentItem.id); 
  };

  const handleDeleteItem = (id) => {
    dispatch(removeItem(id)); 
  };

  const handleShareItem = (currentItem) => {
    if (navigator.share) {
      navigator.share({
        title: "Shopping Item",
        text: `Check out this item: ${currentItem.item}, Quantity: ${currentItem.quantity}, Category: ${currentItem.category}. Notes: ${currentItem.optionalNotes || "None"}`,
      }).catch((error) => {
        console.error("Error sharing item:", error);
      });
    } else {
      alert("Sharing is not supported on this device.");
    }
  };

  return (
    <div className="add-item-container">
      <span onClick={goToPrivacy}>Privacy and data protection</span>
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
        onChange={(e) => setQuantity(Number(e.target.value))} 
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
      <button className="Button" onClick={handleAddItem}>{editingItemId ? "Update" : "Add"}</button>

      {error && <div className="error-message">{error}</div>} 

      <input
        type="text"
        placeholder="Search items"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />

      <div className="category-tabs">
        {categories.map((cat) => (
          <button 
            key={cat} 
            className={`tab ${selectedCategory === cat ? "active" : ""}`} 
            onClick={() => setSelectedCategory(cat === "All" ? "" : cat)} 
          >
            {cat}
          </button>
        ))}
      </div>

      <h2 className="item-list-title">Item List</h2>
      <ul className="item-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((currentItem) => (
            <li key={currentItem.id}>
              <div className="item-info">
                {currentItem.item} - Quantity: {currentItem.quantity} - Category: {currentItem.category}
                {currentItem.optionalNotes && <div>Notes: {currentItem.optionalNotes}</div>}
              </div>
              <div className="button-container">
                <button className="button-in" onClick={() => handleEditItem(currentItem)}>Edit</button> 
                <button className="button-in" onClick={() => handleDeleteItem(currentItem.id)}>Delete</button>
                <button className="button-in" onClick={() => handleShareItem(currentItem)}>Share</button> 
              </div>
            </li>
          ))
        ) : (
          <li>No items found.</li>
        )}
      </ul>
    </div>
  );
}

export default AddItem;

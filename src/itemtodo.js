import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "./redux/addItemReducer";

function ItemToDo() {
  // Use the correct slice name from the Redux store
  const items = useSelector((state) => state.shoppingItem);

  const dispatch = useDispatch();

  if (!Array.isArray(items)) {
    return <div>No items available.</div>; // Handle the case where items might be undefined or not an array
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.item} {/* Ensure this matches the property name in your state */}
          <button onClick={() => dispatch(deleteItem(item.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ItemToDo;

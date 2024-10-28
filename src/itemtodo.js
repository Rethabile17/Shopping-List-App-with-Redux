// import { useSelector, useDispatch } from "react-redux";

// import { useState } from "react";

// function ItemToDo() {
//   const items = useSelector((state) => state.shoppingItem);

//   const dispatch = useDispatch();

//   const [editId, setEditId] = useState(null);
//   const [newValue, setNewValue] = useState({});

//   const handleEditedItem = (item) => {
//     if (editId === item.id) {
//       dispatch(editedItem({ id: item.id, ...newValue }));
//       setEditId(null);
//       setNewValue({});
//     } else {
//       setEditId(item.id);
//       setNewValue({
//         ShoppingItem: item.ShoppingItem,
//         category: item.category,
//         quantity: item.quantity,
//         optionalNotes: item.optionalNotes,
//       });
//     }
//   };

//   const checkOut = (id) => {
//     dispatch(checkOutItem(id));
//   };


//   return (
//     <div>
//       <ul className="grid-container">
//         {items.map((item) => (
//           <li key={item.id}>
//             {editId === item.id ? (
//               <div className="edit-fields">
//                 <input
//                   className="shopping-list-input"
//                   type="text"
//                   value={newValue.ShoppingItem || ''}
//                   onChange={(e) =>
//                     setNewValue({ ...newValue, ShoppingItem: e.target.value })
//                   }
//                   placeholder="Item"
//                 />
//                 <input
//                   className="shopping-list-input"
//                   type="text"
//                   value={newValue.category || ''}
//                   onChange={(e) =>
//                     setNewValue({ ...newValue, category: e.target.value })
//                   }
//                   placeholder="Category"
//                 />
//                 <input
//                   className="shopping-list-input"
//                   type="number"
//                   value={newValue.quantity || ''}
//                   onChange={(e) =>
//                     setNewValue({ ...newValue, quantity: e.target.value })
//                   }
//                   placeholder="Quantity"
//                 />
//                 <input
//                   className="shopping-list-input"
//                   type="text"
//                   value={newValue.optionalNotes || ''}
//                   onChange={(e) =>
//                     setNewValue({ ...newValue, optionalNotes: e.target.value })
//                   }
//                   placeholder="Note"
//                 />
//               </div>
//             ) : (
//               <div
//                 className="display-box"
//                 style={{
//                   textDecoration: item.checkedOut ? 'line-through' : 'none',
//                 }}
//               >
//                 <strong>{item.item}</strong> - {item.category},{" "}
//                 {item.quantity} {item.quantity > 1 ? 'items' : 'item'}
//                 {item.optionalNotes && <div>Note: {item.optionalNotes}</div>}
//               </div>
//             )}
//             <button
//               className="Button"
//               onClick={() => dispatch(deleteItem(item.id))}
//             >
//               Delete
//             </button>
//             <button
//               className="Button"
//               onClick={() => handleEditedItem(item)}
//             >
//               {editId === item.id ? 'Save' : 'Update'}
//             </button>
//             <button
//               className="Button"
//               onClick={() => checkOut(item.id)}
//             >
//               {item.checkedOut ? 'Undo Checkout' : 'Checkout'}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
  
// }
// export default ItemToDo;

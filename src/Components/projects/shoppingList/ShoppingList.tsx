import React, { useState } from "react";
import styles from "./ShoppingList.module.css";

interface ShoppingListItem {
  name: string;
  quantity: number;
}

const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([]);

  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);

  const [succesMessage, setSuccesMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // nemen een kopie van de vorige array en voeg het nieuw element toe
  const addShoppingItem = () => {
    if (quantity < 1) {
      setErrorMessage("Quantity must be greater than 0");
      setSuccesMessage("");
    } else {
      setShoppingList([...shoppingList, { name: name, quantity: quantity }]);
      setSuccesMessage("Item added to shopping list");
      setErrorMessage("");
    }
  };

  const removeShoppingItem = (index: number) => {
    let shoppingListCopy = shoppingList.filter((item, i) => i !== index);
    setShoppingList(shoppingListCopy);
    setSuccesMessage("Item was removed from shopping list");
    setErrorMessage("");
    setQuantity(0);
    setName("");
  };

  return (
    <div>
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      {succesMessage && <div className={styles.succes}>{succesMessage}</div>}
      <div className={styles.shoppingAddForm}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="">Quantity</label>
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(event) => setQuantity(parseInt(event.target.value))}
        />
        <button onClick={addShoppingItem}>Add</button>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {shoppingList.map((item, index) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button
                      onClick={() => {
                        removeShoppingItem(index);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;

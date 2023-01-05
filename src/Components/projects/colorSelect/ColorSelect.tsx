import React, { useState } from "react";
import styles from "./ColorSelect.module.css";

const ColorSelect = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const [shownColors, setShownColors] = useState<string[]>([]);

  const onChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    let selectedOptions: string[] = [];
    for (let option of Array.from(e.target.selectedOptions)) {
      selectedOptions.push(option.value);
    }
    setSelectedColors(selectedOptions);
  };
  return (
    <div>
      <select multiple value={selectedColors} onChange={onChange}>
        <option value="red">Red</option>
        <option value="black">Black</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
      </select>
      <button
        onClick={() => {
          setShownColors([...selectedColors]);
        }}
      >
        Show colors
      </button>

      <div className={styles.colorContainer}>
        {shownColors.map((color) => (
          <div style={{ backgroundColor: color, height: 200, flex: 1 }} />
        ))}
      </div>
    </div>
  );
};
export default ColorSelect;

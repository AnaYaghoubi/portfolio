import React from "react";
import { useState } from "react";
import styles from "./Slots.module.css";

let slotImages = [
  require("./assets/cherry.jpg"),
  require("./assets/lemon.png"),
  require("./assets/melon.png"),
  require("./assets/prune.jpg"),
  require("./assets/seven.jpg"),
];

const getRandomSlots = (numberOfSlots: number) => {
  let slots: number[] = [];
  for (let i = 0; i < numberOfSlots; i++) {
    slots.push(Math.floor(Math.random() * 5));
  }
  return slots;
};

interface SlotProps {
  value: number;
}

const Slot = ({ value }: SlotProps) => {
  return (
    <img
      src={slotImages[value]}
      alt="slot"
      width="100"
      className={styles.slot}
    />
  );
};

interface SlotMachineProps {
  slots: number;
}

const SlotMachine = ({ slots: amountOfSlots }: SlotMachineProps) => {
  const [slots, setSlots] = useState<number[]>(getRandomSlots(amountOfSlots));
  const [money, setMoney] = useState<number>(100);

  const isWinning = (slots: number[]) => {
    return slots.every((slot) => slot === slots[0]);
  };

  const pullLever = () => {
    let randomSlots: number[] = getRandomSlots(amountOfSlots);
    setSlots(randomSlots);

    if (isWinning(randomSlots)) {
      setMoney((money) => money + 20);
    } else {
      setMoney((money) => money - 1);
    }
  };

  return (
    <div className={styles.slotMachineContainer}>
      {money > 0 && <div>Saldo: €{money}</div>}
      {money == 0 && <div>Je bent bankroet</div>}

      <div className={styles.slotMachineSubContainer}>
        <button
          className={styles.lever}
          onClick={pullLever}
          disabled={money > 0 ? false : true}
        >
          {" "}
          Pull lever
        </button>

        {slots.map((slot, index) => (
          <Slot value={slot} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SlotMachine;

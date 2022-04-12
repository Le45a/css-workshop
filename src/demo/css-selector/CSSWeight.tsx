import React, {useState} from "react";
import styles from "./index.module.css";
import CSSWeight01 from "./cssWeight01";
import CSSWeight02 from "./cssWeight02";
import CSSWeight03 from "./cssWeight03";
import CSSWeight04 from "./cssWeight04";
import CSSWeight05 from "./cssWeight05";

const CSSWeight = () => {
  return (
    <>
      <div className={styles["weight-container"]}>
        <div className={styles["weight-item"]}>
          <p className={styles["weight-p"]} id={styles["weight-p-id"]}>
            Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi
            radish
          </p>
        </div>
      </div>
      <CSSWeight01/>
      <CSSWeight02/>
      <CSSWeight03/>
      <CSSWeight04/>
      <CSSWeight05/>
    </>
  );
};

export default CSSWeight;

import React from "react";
import styles from "./index.module.css";

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
    </>
  );
};

export default CSSWeight;

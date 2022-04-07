import React from "react";
import styles from "./index.module.css";

const Demo4 = () => {
  return (
    <>
      <div class={styles.container}>
        <div class={styles.item}>1</div>
        <div class={styles.item}>2</div>
        <div class={styles.item}>3</div>
      </div>
      <div>
        问题：
        <p>
          如何使一个固定定位的元素不相对于视口进行定位，而是相对容器元素定位？
        </p>
      </div>
    </>
  );
};

export default Demo4;

import React from "react";
import styles from "./index.module.css";

const Deme5 = () => {
  return (
    <>
      <div>
        <div id={styles.testId} className={styles.testClass}>
          <p>test div</p>
        </div>
      </div>
      <div>
        问题：
        <p>如果重复同样的 css selectory type, 权重会增加吗?</p>
        <p>
          如果一个 css 选择器包含11 个 class selector type, 另一个选择器是1 个
          id selector type,会表现如何?
        </p>
      </div>
    </>
  );
};

export default Deme5;

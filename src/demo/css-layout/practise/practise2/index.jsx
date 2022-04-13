import React from "react";
import commonStyles from "../../index.module.css";
import styles from "./index.module.css";

const Practise02 = () => {
  return (
      <>
          <div className={commonStyles['practise-title']}>练习题2(位置：demo/css-layout/practice/practice2)</div>
          <div className={commonStyles.title}>请完成下列布局</div>
          <div className={styles['practise-02-image']}/>
          {/*-------- 答题区 -----------*/}
      </>
  );
};

export default Practise02;


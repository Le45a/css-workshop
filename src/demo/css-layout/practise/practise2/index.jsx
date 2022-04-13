import React from "react";
import commonStyles from "../../index.module.css";
import styles from "./index.module.css";

const Practise02 = () => {
  return (
      <>
          <div className={commonStyles['practise-title']}>练习题2</div>
          <div className={commonStyles.title}>请完成下列布局</div>
          <div className={styles['practise-02-image']}/>
      </>
  );
};

export default Practise02;


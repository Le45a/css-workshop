import React from "react";
import styles from "./index.module.css";
import FlexDirection from "./flexDirection";
import JustifyContent from "./justifyContent";
import AlignItems from "./alignItems";
import Practise from "./practise";
import FlexWrap from "./flexWrap";
import Order from "./order";
import FlexGrow from "./flexGrow";
import FlexShrink from "./flexShrink";
import FlexBasis from "./flexBasis";
import AlignSelf from "./alignSelf";

const Demo4 = () => {
  return (
    <div className={styles['page-container']}>
      <FlexDirection/>
      <FlexWrap/>
      <JustifyContent/>
      <AlignItems/>
      <Order/>
      <FlexBasis/>
      <FlexGrow/>
      <FlexShrink/>
      <AlignSelf/>
      <Practise/>
      <div className={styles.container}>
        <div className={styles.item}>1</div>
        <div className={styles.item}>2</div>
        <div className={styles.item}>3</div>
      </div>
      <div>
        问题：
        <p>
          如何使一个固定定位的元素不相对于视口进行定位，而是相对容器元素定位？
        </p>
      </div>
    </div>
  );
};

export default Demo4;

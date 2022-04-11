import { Divider } from "antd";
import React from "react";
import styles from "./index.module.css";
import expected from "./img/expected.png";

const CSSBox = () => {
  return (
    <div className={styles.cssbox}>
      <div>
        <h2 className={styles.title}>IEBOX的作用</h2>
        <div className={styles.container}>
          <div className={styles.left}>
            <h2>article1</h2>
            <span>by xxx</span>
            <p>
              Pea horseradish azuki bean lettuce avocado asparagus okra.
              Kohlrabi radish okra azuki bean corn fava bean mustard tigernut
              jícama green bean celtuce.
            </p>
          </div>
          <div className={styles.right}>
            <h2>article2</h2>
            <span>by xxx</span>
            <p>
              Pea horseradish azuki bean lettuce avocado asparagus okra.
              Kohlrabi radish okra azuki bean corn fava bean mustard tigernut
              jícama green bean celtuce.
            </p>
          </div>
        </div>
      </div>
      <Divider dashed />
      <h2 className={styles.title}>外边距重叠</h2>
      <div className={styles.container}>
        <div className={styles.top}>
          <h2>article1</h2>
          <span>by xxx</span>
          <p>
            Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi
            radish okra azuki bean corn fava bean mustard tigernut jícama green
            bean celtuce.
          </p>
        </div>
        <div className={styles.bottom}>
          <h2>article2</h2>
          <span>by xxx</span>
          <p>
            Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi
            radish okra azuki bean corn fava bean mustard tigernut jícama green
            bean celtuce.
          </p>
        </div>
      </div>
      <b className={styles.question}>question：如何才能避免外边距重叠呢？</b>
      <p className={styles.answer}>
        当两个相邻块级子元素分属于不同的BFC时可以阻止margin重叠
      </p>
      <Divider dashed />
      <h2 className={styles.title}>自适应双栏布局</h2>
      <div className={styles.container}>
        <div className={styles["float-left"]}>
          <h2>nav</h2>
          <p>1.session1</p>
          <p>2.session2</p>
        </div>
        <div className={styles["float-right"]}>
          <h2>article2</h2>
          <span>by xxx</span>
          <p>
            Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi
            radish okra azuki bean corn fava bean mustard tigernut jícama green
            bean celtuce.
          </p>
        </div>
      </div>
      <div style={{ overflow: "hidden" }}>
        <b className={styles.question}>question：如何变成下图效果？</b>
        <div className={styles.answer}>
          <img src={expected} width='740' alt='' />
        </div>
      </div>
    </div>
  );
};

export default CSSBox;

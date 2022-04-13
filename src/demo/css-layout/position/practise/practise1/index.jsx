import React from "react";
import styles from "./index.module.css";
import {Col, Row} from "antd";

const Practise01 = () => {
  return (
      <>
          <div className="practise-title">练习题1</div>
          <div className="title">请完成下列布局。</div>
          <div className="description">
              <div>实现下图"反馈中心"的布局，固定在窗口底部，距离窗口底部50px，窗口右边50px</div>
              <div>"反馈中心"宽100px，高100px，背景颜色#7C3AED</div>
          </div>
          <div className={styles.image}/>
      </>
  );
};

export default Practise01;


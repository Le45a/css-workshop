import React from "react";
import commonStyles from "../../index.module.css";
import styles from "./index.module.css";

const Practise03 = () => {
  return (
    <>
      <div className={commonStyles["practise-title"]}>
        练习题3（位置：demo/practice）
      </div>
      <div className={commonStyles.title}>请完成下列页面布局</div>
      <div className={commonStyles.description}>要求：</div>
      <div className={commonStyles.description}>
        1.左侧边栏宽度200px，右边内容宽度自适应。
      </div>
      <div className={commonStyles.description}>
        2.导航栏高度60px，左右布局,
        上下居中。下面内容高度自适应。当右边内容超过一屏时，下方展示滚动条，导航栏是固定展示的
      </div>
      <a href='/practice' target='_blank'>
        前往练习页面
      </a>
      <div className={styles.image} />
      {/*<div style={{display: 'flex', height: '400px'}}>*/}
      {/*    <div style={{backgroundColor: '#366AFF', width: '200px', padding: '16px', color: '#FFF'}}>sider</div>*/}
      {/*    <div style={{flexGrow: 1, display: 'flex', flexDirection: 'column'}}>*/}
      {/*        <div style={{borderBottom: '1px solid #6B7280',display: "flex", justifyContent: 'space-between', padding: '16px'}}>*/}
      {/*            <div>首页</div>*/}
      {/*            <div>设置</div>*/}
      {/*        </div>*/}
      {/*        <div style={{padding: '16px', flexGrow: 1, overflow: "auto"}}>*/}
      {/*            <div style={{backgroundColor:'#D1D5DB', height: '100vh', padding: '16px'}}>我是高度为100vh内容</div>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*</div>*/}
    </>
  );
};

export default Practise03;

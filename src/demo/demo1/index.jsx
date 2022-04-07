import React, { useState } from "react";
import "./index.css";

const Demo1 = () => {
  const [showAnswer, showAnswerSet] = useState(false);
  return (
    <>
      <div className='father'>
        <div className='child'></div>
      </div>
      <br />
      <div>
        <div>问题：</div>
        子元素的高度为100px，有50px的margin-top，可是父元素只有100px高，我们如何修改才能将父元素展示为我们想要的高度呢？
        <div>
          <button onClick={() => showAnswerSet(true)}>答案</button>
          <br />
          <div className={showAnswer ? "show" : "hide"}>
            <img
              width='600'
              height='200'
              src='img/margin-collapsing.png'
              alt=''
            />
            <p>在父元素中任意设置上面的一个属性</p>
          </div>
        </div>
      </div>
      <br />
      <code>
        <div>外边距重叠：</div>
        当块级元素 (block) 的上外边距 (margin-top) 和下外边距 (margin-bottom)
        同时都有设定时只会只会保留最大边距，这种行为称为边界折叠 (margin
        collapsing)，有时也翻译为外边距重叠
      </code>
    </>
  );
};

export default Demo1;

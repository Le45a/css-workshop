import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
// import gfm from 'remark-gfm';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import cssMd from '../doc/css.md'
import './index.css';
import rehypeRaw from 'rehype-raw'
// import normal from '../static/img/normal-box.jpeg'
const Home = () => {
    const [cssmd, cssmdSet] = useState();
    useEffect(() => {
        fetch(cssMd).then(res => res.text()).then(text =>{console.log(text); cssmdSet(text)})
    }, []);


    return (
        <div>
            <div className="nav-container">
                <MarkNav className="article-menu" source={cssmd} headingTopOffset={80} ordered={false} />
            </div>
            <div className="article-container">
                <ReactMarkdown rehypePlugins={[rehypeRaw]} children={cssmd} />
            </div>
        </div>
    );
}

export default Home
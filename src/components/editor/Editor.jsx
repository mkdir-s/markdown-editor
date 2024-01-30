import React from 'react';
import { useState, useEffect } from 'react';
import './index.scss';
import * as Marked from 'marked';

function Editor() {
  const [markdownText, setMarkdownText] = useState('# Введите свой текст здесь');

  useEffect(() => {
    const htmlText = Marked.marked(markdownText, { sanitize: true });
    document.getElementById('preview').innerHTML = htmlText;
  }, [markdownText]);

  const handleInputChange = (event) => {
    setMarkdownText(event.target.value);
  };


  return (
    <section className="editor">
      <div className="container">
        <div className="editor__wrapper">
          <div className="editor__left">
            <h2 className="editor__left-title">write down the Markdown markup here</h2>
            <textarea className='editor__left-editor' id="editor" value={markdownText} onChange={handleInputChange}></textarea>
          </div>
          <div className="editor__right">
            <h2 className="editor__right-title">check the preview here</h2>
            <div className='editor__right-preview' id='preview' dangerouslySetInnerHTML={{ __html: Marked.marked(markdownText, { sanitize: true }) }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Editor
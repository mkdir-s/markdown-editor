import React from 'react';
import { useState, useEffect } from 'react';
import './index.scss';
import * as Marked from 'marked';

function Editor() {
  const [markdownText, setMarkdownText] = useState('# Example of text');
  const [lengthOfPreviewText, setLengthOfPreviewText] = useState(0);
  const [lengthOfWordsOfPreviewText, setlengthOfWordsOfPreviewText] = useState(0);
  const [sizeOfLinesOfPreviewText, setSizeOfLinesOfPreviewText] = useState(0);
  const [currentLineAndCol, setCurrentLineAndCol] = useState({
      currentLine: 0,
      currentCol: 0
  });

  let htmlTextWithoutHTMLTags;

  useEffect(() => {
    const htmlText = Marked.marked(markdownText, { sanitize: true });

    htmlTextWithoutHTMLTags = htmlText.replace(/<[^>]*>/g, '');
    console.log(htmlTextWithoutHTMLTags)

    setLengthOfPreviewText(htmlTextWithoutHTMLTags.length);
    // setlengthOfWordsOfPreviewText(htmlTextWithoutHTMLTags.split(' ').length + htmlTextWithoutHTMLTags.split('\n').length);
    setlengthOfWordsOfPreviewText(htmlTextWithoutHTMLTags.match(/\b\w+\b/g).length)
    setSizeOfLinesOfPreviewText(htmlTextWithoutHTMLTags.split('\n').length - 1);
    
    document.getElementById('preview').innerHTML = htmlText;
  }, [markdownText]);

  const handleInputChange = (event) => {
    setMarkdownText(event.target.value);
  };
  
  const handleCursorChange = (event) => {
    let cursorPosition = event.target.selectionStart;
    let sizeOfLines = htmlTextWithoutHTMLTags.split('\n').length;

    let currentLine = 0;
    let currentCol = cursorPosition + 1;

    // for (let i = 0; i < sizeOfLines.length; i++) {
    //   if (cursorPosition <= sizeOfLines[i].length) {
    //       currentLine = i + 1;
    //       break;
    //   } else {
    //       cursorPosition -= sizeOfLines[i].length + 1;
    //   }
    // }

    // setCurrentLineAndCol({
    //   currentLine: currentLine,
    //   currentCol: currentCol
    // })
  }


  return (
    <section className="editor">
      <div className="container">
        <div className="editor__wrapper">
          <div className="editor__left">
            {/* <h2 className="editor__left-title">write down the Markdown markup here</h2> */}
            <textarea className='editor__left-editor' id="editor" value={markdownText} onChange={handleInputChange} onSelect={handleCursorChange}></textarea>
          </div>
          <div className="editor__right">
            {/* <h2 className="editor__right-title">check the preview here</h2> */}
            <div className='editor__right-preview' id='preview' dangerouslySetInnerHTML={{ __html: Marked.marked(markdownText, { sanitize: true }) }}></div>
          </div>
        </div>
        <div className="editor__bar">
          <p className='editor__bar-text'>
            <span className='editor__bar-space'>
              Markdown </span>
            <span className='editor__bar-stats'>{ lengthOfPreviewText } </span> 
            <span className='editor__bar-space'>symbols</span> 
            <span className='editor__bar-stats'>{ lengthOfWordsOfPreviewText } </span> 
            <span className="editor__bar-space">words</span>
            <span className="editor__bar-stats">{ sizeOfLinesOfPreviewText } </span>
            <span className='editor__bar-space'>lines</span>
            <span className="editor__bar-stats">Ln { currentLineAndCol.currentLine } Col { currentLineAndCol.currentCol }</span>
           </p>
        </div>
      </div>
    </section>
  )
}

export default Editor
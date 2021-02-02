import './App.scss';
import defaultText from './defaultText';
import React, {useState} from 'react';
import DOMpurify from "dompurify";
import marked from 'marked';

marked.setOptions({
  breaks: true
})

function App() {
  const [text, setText] = useState(defaultText)

  const handleChange = (event) => {
    setText(event.target.value)
  }
  const markdown = marked(text, {sanitize: true});

  return (
    <div className="App d-flex flex-column align-items-center">
      <div id="editor-wrapper">
        <div id="editor-toolbar" class="toolbar">Editor</div>
        <textarea id="editor" onChange={handleChange}>{defaultText}</textarea>
      </div>
      <div id="preview-wrapper">
        <div id="preview-toolbar" class="toolbar">Preview</div>
        <div id="preview" dangerouslySetInnerHTML={{__html: DOMpurify.sanitize(markdown)}}>
      </div>
      </div>
    </div>
  );
}

export default App;

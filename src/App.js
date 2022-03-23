//Foi usado a API CKEditor para fazer o rich text
//https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html
import './App.css';
import React, { useState } from 'react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import parse from "html-react-parser";

function App() {
  const [text,setText] = useState("");
  return ( 
    <div className = "App" >
      <div className="editor">
        <CKEditor
          editor={ClassicEditor}
          data={text}
          onChange={(event, editor) => {
          const data = editor.getData();
          setText(data);
        
        }}
        
        />
      </div>
      <div>
        <h2>Content</h2>
        <p>{ parse(text) }</p>
      </div>
    </div>
  );
}

export default App;

import React from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Iprops{
   content:string
}
const SyntaxFileHighLighter= ({content}:Iprops) => {
  return (
  <SyntaxHighlighter language="javascript" style={atomOneDark} showLineNumbers customStyle={{backgroundColor:"transparent",width:"100%",maxHeight:"100vh",overflowX:"auto",fontSize:"1rem",overflowY:"auto"}}>
      {String(content)}
  </SyntaxHighlighter>
  )
}

export default SyntaxFileHighLighter



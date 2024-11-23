import React from "react"
import SyntaxFileHighLighter from "./SyntaxFileHighLighter"
import { setClickedFile } from "../App/Features/FileTreeSlice"
import OpenedFileBar from "./OpenedFileBar"
import { useSelector } from "react-redux"
import { FileTree } from "../data/FileTree"
import { RootState } from "../App/Store"
const Preview= () => {
    const {ClickedFile:{filecontent}}=useSelector((state:RootState)=>state.fileTree);
  return (
    <>
        <OpenedFileBar/>
        <SyntaxFileHighLighter content={filecontent}/>
    </>
  )
}

export default Preview
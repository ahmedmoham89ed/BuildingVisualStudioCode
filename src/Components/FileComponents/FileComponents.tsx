import React, { ReactNode, useState } from "react"
import { IFile } from "../../Interfaces"
import BottomArrowIcon from "../BottomArrowIcon"
import RightArrowIcon from "../RightArrowIcon"
import RenderFileIcon from "../RenderFileIcon"
import { useDispatch, useSelector } from "react-redux"
import {  setClickedFile, setOpensFile } from "../../App/Features/FileTreeSlice"
import { RootState } from "../../App/Store"
import { doesFileobjectExist } from "../../Utilis/Function"
interface Iprops{
   FileTree:IFile
}
const FileComponents= ({FileTree}:Iprops) => {
   const {id,name,isFolder,children,content}=FileTree;
   const {OpenedFile}=useSelector((state:RootState)=>state.fileTree);
   const [isOpen,setIsOpen]=useState(false);
   const dispatch=useDispatch();
   const toggle=()=>setIsOpen(prev=>!prev);

   const exists=doesFileobjectExist(OpenedFile,id)
   const onfileclicked=()=>{
      dispatch(setClickedFile({filename:name,filecontent:content,activeTabId:id}));
      if(exists) return;
      dispatch(setOpensFile([...OpenedFile,FileTree]));
   }
  return (
    <div className="">

       <div className=" mb-1 text-white ml-5 cursor-pointer">
          <div className="flex">
            {isFolder?(
              <div onClick={toggle} className="flex items-center">
                  {isOpen?<BottomArrowIcon/>:<RightArrowIcon/>}
                  <span className='mr-2'><RenderFileIcon filename={name} isFolder={isFolder} IsOpen={isOpen} /></span>
                  <span>{name}</span>
              </div>
              ):(
              <div className="flex items-center" onClick={onfileclicked}>
                  <span className='mr-2'><RenderFileIcon filename={name} /></span>
                  <span>{name}</span>
              </div>)
            }
          </div>
          {isOpen && children && children.map((file,index)=>(
          <FileComponents key={index} FileTree={file} />))}
       </div>
    </div>
  )
}

export default FileComponents
import React, { useState } from 'react'
import { IFile } from '../Interfaces'
import RenderFileIcon from './RenderFileIcon';
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { setClickedFile, setOpensFile, setTabIdToRemove } from '../App/Features/FileTreeSlice';
import { RootState } from '../App/Store';
import DropMenu from './UI/DropMenu';
interface IProps{
    file:IFile;
}
const OpendFilesBarTabs = ({file}:IProps) => {
    const dispatch=useDispatch();
    const {OpenedFile,ClickedFile:{activeTabId}}=useSelector((state:RootState)=>state.fileTree);

  const onclick=()=>{
    const {id,name,content}=file;
    dispatch(setClickedFile({filename:name,filecontent:content,activeTabId:id}));
  }

  const OnRemove=(id:string)=>{

        const filtered=OpenedFile.filter(file=>file.id !== id);
        const lastTabs=filtered[filtered.length-1];
        if(!lastTabs){
            dispatch(setOpensFile([]));
            dispatch(setClickedFile({activeTabId:null,filecontent:"",filename:""}))
            return;
        }
        dispatch(setOpensFile(filtered));
        dispatch(setClickedFile({activeTabId:lastTabs.id,filecontent:lastTabs.content,filename:lastTabs.name}))
  }
  return (
    <>
        <div className="flex items-center border border-[#ffffff1f] px-1 gap-1" onClick={onclick} 
        style={{borderTop:file.id===activeTabId?"3px solid #cf6ccf":"3px solid transparent"}} onContextMenu={e=>{
            e.preventDefault();
            dispatch(setTabIdToRemove(file.id))
        }}>
            
            <RenderFileIcon filename={file.name}/>
            <span className='cursor-pointer my-2 flex justify-center items-center w-fit mr-2  ' >
                {file.name}
            </span>
            <span className='hover:bg-[#64646473] rounded-sm cursor-pointer ' onClick={e=>{
                e.stopPropagation();
                OnRemove(file.id);
            }}>
               <IoMdClose />
            </span>
        </div>
    </>
  )
}

export default OpendFilesBarTabs
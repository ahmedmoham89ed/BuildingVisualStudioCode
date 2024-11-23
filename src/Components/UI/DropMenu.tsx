import React, { useEffect, useRef } from 'react'
import { setOpensFile } from '../../App/Features/FileTreeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../App/Store';
interface IProps{
    setShowMenu:(val:boolean)=>void;
    position:{
        x:number,
        y:number
    }
}
const DropMenu = ({position:{x,y},setShowMenu}:IProps) => {
    const menuref=useRef<HTMLDivElement>(null);
    const dispatch=useDispatch();
    const {OpenedFile,TabIdToRemove}=useSelector((state:RootState)=>state.fileTree);

    const closeAll=()=>{
        dispatch(setOpensFile([]));
         setShowMenu(false);
    }
    const onclose=()=>{
        const filtered=OpenedFile.filter(file=>file.id !== TabIdToRemove);
        dispatch(setOpensFile(filtered)); 
        setShowMenu(false);
    }

    useEffect(()=>{
      
      const handleClickOutSide=(event:MouseEvent)=>{
        if(menuref.current && !menuref.current.contains(event?.target as Node)){
            setShowMenu(false);
        }
      }

      window.addEventListener("click",handleClickOutSide);

      return()=>{
        window.addEventListener("click",handleClickOutSide);
      }
    },[setShowMenu]);
  return (
    <>
      <div ref={menuref} className="">
        <ul className="bg-white text-black w-fit px-7 py-2 text-xl rounded-md cursor-pointer capitalize" style={{position:"absolute",left:x,top:y}}>
            <h1 onClick={onclose}>Close</h1> 
            <h1 onClick={closeAll}>close all</h1>
        </ul>
      </div>
    </>
  )
}

export default DropMenu
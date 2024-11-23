import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../App/Store';
import OpendFilesBarTabs from './OpendFilesBarTabs';
import SyntaxFileHighLighter from './SyntaxFileHighLighter';
import DropMenu from './UI/DropMenu';

const OpenedFileBar = () => {
    const {OpenedFile}=useSelector((state:RootState)=>state.fileTree);
    const [showMenu,setShowMenu]=useState(false)
    const [menuPosition,setmenuPosition]=useState<{x:number,y:number}>({x:0,y:0});
  return (
    <>
      <div className="">
          <ul className='flex' onContextMenu={e=>{
            e.preventDefault();
            setmenuPosition({x:e.clientX,y:e.clientY});
            setShowMenu(true);}} >
              {OpenedFile.map((file)=>(
              <OpendFilesBarTabs key={file.id} file={file} />
              ))}
            {showMenu && <DropMenu position={menuPosition} setShowMenu={setShowMenu}/>}
          </ul>
      </div>
    </>
  )
}

export default OpenedFileBar
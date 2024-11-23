import React from 'react'
import IconImg from './IconImg'
import FileIcon from './FileIcon';
interface IProps{
    filename:string,
    isFolder?:boolean,
    IsOpen?:boolean
}
const extenisonIconPath:Record<string,string>={
    //File
    tsx:"/public/icons/875209.png",
    ts:"/public/icons/ts.svg",
    js:"/public/icons/js.svg",
    css:"/public/icons/css.svg",
    html:"/public/icons/html.svg",
    jsx:"/public/icons/875209.png",
    json:"/public/icons/15484303.png",
    md:"/public/icons/md.png",
    map:"/public/icons/jss.png",
    exe:"/public/icons/exe1.png",
    
    //Folders
    node_modules:"/public/icons/folder_node_js_icon_161287.png",
    Public:"/public/icons/Folder_Public_29924.png",
    Src:"/public/icons/closesrc.png",
    Components:"/public/icons/comopen.png"
}

const RenderFileIcon = ({filename,isFolder,IsOpen}:IProps) => {
    const extension=filename.split(".").pop();
    if(extension && Object.prototype.hasOwnProperty.call(extenisonIconPath,extension)){
        const iconPath=isFolder?IsOpen?
        `${extenisonIconPath[extension]}`:
        `${extenisonIconPath[extension]}`:
        `${extenisonIconPath[extension]}`;

      return <IconImg src={iconPath} />
    }
    
    if(isFolder) return !IsOpen && isFolder?
    <IconImg src='/public/icons/comopen.png' />:
    <IconImg src='/public/icons/comopen2.png' />;
    
    return <FileIcon/>
}

export default RenderFileIcon

/* File */
// if(extension==="tsx") return <IconImg src='/public/icons/875209.png' />
// if(extension==="ts") return <IconImg src='/public/icons/ts.svg' />
// if(extension==="js") return <IconImg src='/public/icons/js.svg' />
// if(extension==="css") return <IconImg src='/public/icons/css.svg' />
// if(extension==="html") return <IconImg src='/public/icons/html.svg' />
// if(extension==="jsx") return <IconImg src='/public/icons/875209.png' />
// if(extension==="json") return <IconImg src='/public/icons/15484303.png' />
// if(extension==="md") return <IconImg src='/public/icons/md.png' />
// if(extension==="map") return <IconImg src='/public/icons/jss.png' />
// if(extension==="exe") return <IconImg src='/public/icons/exe1.png' />
// /* Folder */
// if(extension==="node_modules") return !IsOpen && isFolder?<IconImg src='/public/icons/folder_node_js_icon_161287.png' />:<IconImg src='/public/icons/download.png' />
// if(extension==="Public") return !IsOpen && isFolder?<IconImg src='/public/icons/Folder_Public_29924.png' />:<IconImg src='/public/icons/closefolder.png' />
// if(extension==="Src") return !IsOpen && isFolder?<IconImg src='/public/icons/closesrc.png' />:<IconImg src='/public/icons/opensrc.png' />
// if(extension==="Components") return !IsOpen && isFolder?<IconImg src='/public/icons/comopen.png' />:<IconImg src='/public/icons/comopen2.png' />

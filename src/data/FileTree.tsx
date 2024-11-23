import { IFile } from "../Interfaces";
import {v4 as uuid } from "uuid"
export const FileTree: IFile = {
  id:uuid(),
  name: "Vs Studio Code",
  isFolder: true,
  children: [
    {
      id:uuid(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id:uuid(),
          name: ".Vite",
          isFolder: true,
          children: [{id:uuid(), name: "react.js", isFolder: false }],
        },
        {
          id:uuid(),
          name: "@babel",
          isFolder: true,
          children: [
            {
              id:uuid(),
              name: "code-frame",
              isFolder: true,
              children: [
                {id:uuid(), name: "README.md", isFolder: false },
                {id:uuid(), name: "package.json", isFolder: false },
                {
                  id:uuid(),
                  name: "Lib",
                  isFolder: true,
                  children: [
                    { id:uuid(),name: "index.js", isFolder: false },
                    {id:uuid(), name: "index.js.map", isFolder: false },
                  ],
                },
                {id:uuid(), name: "LICENSE", isFolder: false },
              ],
            },
          ],
        },
        {
          id:uuid(),
          name:"@aalloc",
          isFolder:true,
          children:[
            {id:uuid(),name:"index.d.ts",isFolder:false},
            {id:uuid(),name:"index.js",isFolder:false},
            {id:uuid(),name:"License",isFolder:false},
            {id:uuid(),name:"Package.json",isFolder:false},
            {id:uuid(),name:"readme.md",isFolder:false},
          ]
        },
        {
          id:uuid(),
          name:"@ampproject",
          isFolder:true,
          children:[
            {id:uuid(),name:"dist",isFolder:true,children:[{id:uuid(),name:"remapping.mjs",isFolder:false},{id:uuid(),name:"remapping.mjs.map",isFolder:false},{id:uuid(),name:"remapping.umd.js",isFolder:false},{id:uuid(),name:"remapping.umd.js.map",isFolder:false}]},
            {id:uuid(),name:"License",isFolder:false},
            {id:uuid(),name:"Package.json",isFolder:false},
            {id:uuid(),name:"readme.md",isFolder:false},
          ]
        },
        {
          id:uuid(),
          name:"@esbuild",
          isFolder:true,
          children:[
            {id:uuid(),name:"esbuild.exe",isFolder:false},
            {id:uuid(),name:"package.json",isFolder:false},
            {id:uuid(),name:"README.md",isFolder:false},
          ]
        },
        {
          id:uuid(),
          name:"@eslint",
          isFolder:true,
          children:[
            {id:uuid(),name:"Config-array",isFolder:true,children:[{
              id:uuid(),
              name: "code-frame",
              isFolder: true,
              children: [
                {id:uuid(), name: "README.md", isFolder: false },
                {id:uuid(), name: "package.json", isFolder: false },
                {
                  id:uuid(),
                  name: "Lib",
                  isFolder: true,
                  children: [
                    {id:uuid(), name: "index.js", isFolder: false },
                    {id:uuid(), name: "index.js.map", isFolder: false },
                  ],
                },],},]}
                
          ]
        }
      ],
    },
    {
      id:uuid(),
      name:"Public",
      isFolder:true,
      children:[
        {id:uuid(),name:"index.html",isFolder:false}
      ]
    },
    {
      id:uuid(),
     name:"Src",
     isFolder:true,
     children:[
      {id:uuid(),name:"Components",isFolder:true,children:[{id:uuid(),name:"index.tsx",isFolder:false,content:`
export interface IFile{
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
}

function fact(n:number):number{
    if(n<=1) return 1;
    return n*fact(n-1);
}
console.log(fact(7));
console.log(fact(8));

`}]},
      {id:uuid(),name:"React.tsx",isFolder:false,content:`
export interface IFile{
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
}

function fact(n:number):number{
    if(n<=1) return 1;
    return n*fact(n-1);
}
console.log(fact(7));
console.log(fact(8));

`},
      {id:uuid(),name:"index.tsx",isFolder:false,content:`
export interface IFile{
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
}

function fact(n:number):number{
    if(n<=1) return 1;
    return n*fact(n-1);
}
console.log(fact(7));
console.log(fact(8));

`},
     ]
    },
    {
      id:uuid(),
      name: "index.html",
      isFolder: false,
      content:`
export interface IFile{
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
}

function fact(n:number):number{
    if(n<=1) return 1;
    return n*fact(n-1);
}
console.log(fact(7));
console.log(fact(8));

`
    },
    {
      id:uuid(),
      name:"style.css",
      isFolder:false
      ,content:`
export interface IFile{
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
}

function fact(n:number):number{
    if(n<=1) return 1;
    return n*fact(n-1);
}
console.log(fact(7));
console.log(fact(8));

`
    },
    {
        id:uuid(), 
        name:"main.jsx",
        isFolder:false
        ,content:`export interface IFile{
          id:string,
          name:string,
          isFolder:boolean,
          children?:IFile[],
          content?:string}`
    },
    {
      id:uuid(),
      name:"App.tsx",
      isFolder:false
      ,content:`
export interface IFile{
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
}

function fact(n:number):number{
    if(n<=1) return 1;
    return n*fact(n-1);
}
console.log(fact(7));
console.log(fact(8));

`
    },
    {
      id:uuid(),
      name:"index.tsx",
      isFolder:false
      ,content:`
export interface IFile{
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
}

function fact(n:number):number{
    if(n<=1) return 1;
    return n*fact(n-1);
}
console.log(fact(7));
console.log(fact(8));

`
    },
    {
      id:uuid(),
      name:"index.html",
      isFolder:false
      ,content:`
export interface IFile{
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
}

function fact(n:number):number{
    if(n<=1) return 1;
    return n*fact(n-1);
}
console.log(fact(7));
console.log(fact(8));

`
    },
    {
      id:uuid(),
      name:"package.json",
      isFolder:false
      ,content:`
export interface IFile{
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
}

function fact(n:number):number{
    if(n<=1) return 1;
    return n*fact(n-1);
}
console.log(fact(7));
console.log(fact(8));

`
    },
    {
      id:uuid(),
      name:"package-lock.json",
      isFolder:false
      ,content:`
export interface IFile{
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
}

function fact(n:number):number{
    if(n<=1) return 1;
    return n*fact(n-1);
}
console.log(fact(7));
console.log(fact(8));

`
    },
    {
      id:uuid(),
      name:"eslint.config.js",
      isFolder:false
      ,content:`
export interface IFile{
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
}

function fact(n:number):number{
    if(n<=1) return 1;
    return n*fact(n-1);
}
console.log(fact(7));
console.log(fact(8));

`
    },
    {
      id:uuid(),
      name:"tailwind.config.js",
      isFolder:false
      ,content:`
export interface IFile{
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
}

function fact(n:number):number{
    if(n<=1) return 1;
    return n*fact(n-1);
}
console.log(fact(7));
console.log(fact(8));

`
    },
    {
      id:uuid(),
      name:"README.md",
      isFolder:false
      ,content:`
export interface IFile{
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
}

function fact(n:number):number{
    if(n<=1) return 1;
    return n*fact(n-1);
}
console.log(fact(7));
console.log(fact(8));

`
    },
    {
      id:uuid(),
      name:"vite.config.js",
      isFolder:false
      ,content:`
export interface IFile{
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
}

function fact(n:number):number{
    if(n<=1) return 1;
    return n*fact(n-1);
}
console.log(fact(7));
console.log(fact(8));

`
    },

    
  ],
};

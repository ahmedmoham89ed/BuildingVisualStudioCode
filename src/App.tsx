import React from 'react';
import './App.css'
import FileComponents from './Components/FileComponents/FileComponents'
import { FileTree } from './data/FileTree';
import ResizeAblePannel from './Components/ResizeAblePannel';
import Preview from './Components/Preview';
import { useSelector } from 'react-redux';
import { RootState } from './App/Store';
import WelcomeTab from './Components/WelcomeTab';
import DropMenu from './Components/UI/DropMenu';

function App() {
  const {OpenedFile}=useSelector((state:RootState)=>state.fileTree);
  return (
    <div>
      <div className='flex h-screen text-xl font-semibold' >
          <ResizeAblePannel showPanel leftPanel={<div className="min-w-72 "><FileComponents FileTree={FileTree} /></div>} 
          rightPanel={OpenedFile.length?<Preview/>:<WelcomeTab/>}/>    
      </div>  
    </div>
  )
}

export default App


{/* <FileComponents filename='index.tsx' fileicon={<SiTypescript/>} />
      <FileComponents filename='App.css'  fileicon={<FaCss3/>} />
      <FileComponents filename='App.jsx'  fileicon={<FaAtom/>} />
      <FileComponents filename='index.css'  fileicon={<FaCss3/>} />
      <FileComponents filename='main.jsx'  fileicon={<FaAtom/>} />
      <FileComponents filename='.gitignore'  fileicon={<FaGitAlt/>}/>
      <FileComponents filename='eslint.config.js'  fileicon={<SiEslint/>}/>
      <FileComponents filename='index.html'  fileicon={<FaHtml5/>} />
      <FileComponents filename='package-lock.json'  fileicon={<FaNodeJs/>} />
      <FileComponents filename='package.json'  fileicon={<FaNodeJs/>} />
      <FileComponents filename='postcss.config.js'  fileicon={<SiPostcss/>} />
      <FileComponents filename='README.md'  fileicon={<FileQuestion/>} />
      <FileComponents filename='tailwind.config.js'  fileicon={<RiTailwindCssFill/>} />
      <FileComponents filename='Next.config.js'  fileicon={<RiNextjsFill/>} />
      <FileComponents filename='vite.config.js'  fileicon={<SiVite/>} /> */}
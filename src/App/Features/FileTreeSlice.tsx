import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { IFile } from '../../Interfaces'

interface IClicked{
    activeTabId:string|null;
    filename:string,
    filecontent:string|undefined
}
interface IinitialState{
    OpenedFile:IFile[];
    ClickedFile:IClicked;
    TabIdToRemove:string|null
}
const initialState:IinitialState = {
   OpenedFile:[],
   ClickedFile:{
       activeTabId:null,
        filename:"",
        filecontent:""
   },
   TabIdToRemove:null
}
const FileTreeSlice = createSlice({
    name: 'fileTree',
    initialState,
    reducers: {
      setOpensFile:(state,action:PayloadAction<IFile[]>)=>{
       state.OpenedFile=action.payload
      },
      setClickedFile:(state,action:PayloadAction<IClicked>)=>{
       state.ClickedFile=action.payload;
      },
      setTabIdToRemove:(state,action:PayloadAction<string|null>)=>{
        state.TabIdToRemove=action.payload;
       },
      
    },
  })

export const {setOpensFile,setClickedFile,setTabIdToRemove}=FileTreeSlice.actions;
export default FileTreeSlice.reducer;
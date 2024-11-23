import { IFile } from "../Interfaces";

export const doesFileobjectExist=(arr:IFile[],id:string)=>{
  return arr.some(obj=>obj.id===id) 
}

export interface IFile{
    id:string,
    name:string,
    isFolder:boolean,
    children?:IFile[],
    content?:string
}

function fact(n:number):number{
    if(n<=1) return 1;
    return n*fact(n-1);
}
console.log(fact(7));
console.log(fact(8));


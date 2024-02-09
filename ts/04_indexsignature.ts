type Novel = {
    [key:string]:string|{id:number}|boolean|undefined|symbol;
    title:string;
    addr:{id:number;};
    isFree?:boolean;
} & {fk:symbol}

let novel:Novel = {title: "SDf",addr:{id:123},fk:Symbol()}

type X = {id:string;}
type Y = {id:number;}
type Z = X&Y;
// const z:Z = {id:1};
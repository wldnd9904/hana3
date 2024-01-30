
const expressFn = function(name) {
    // if, 'use strict'?
    this.name = name;
    console.log(this, new.target, this.name, name);
  }
  
  
  const arrowFn = (name) => {
    this.name = name;
    console.log(this, new.target, this.name, name);
  }
  
  expressFn('expfn');
  arrowFn('afn');
  
  const dfn = new expressFn('D');
  //const afn = new arrowFn('A'); // error!
  console.log(globalThis.name)
  console.log(globalThis)
  console.log(this)

  const obj1 = {name:"obj1",obj2:{name:"obj2",f:()=>{console.log(this.name)}}}
  const obj3 = {name:"obj1",obj2:{name:"obj2",obj3:{f:()=>{console.log(this.name)}}}}
  obj3.obj2.obj3.f()
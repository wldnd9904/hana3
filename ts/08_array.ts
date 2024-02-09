type A = {                
    name: string,            
    age: number,             
 };                      
 
 type B = {
 name: string,
 addr: string,
  };
 const onlyA: A[] = [
    {name: 'lim', age: 10},
    {name: 'hong', age: 20},
 ];
 const onlyB: B[] = [
    {name: 'jang', addr: 'Seoul'},
    {name: 'park', addr: 'Busan'},
 ];
 const aOrB = [...onlyA, ...onlyB]; // (A|B)[]
 
 console.log(aOrB)

 aOrB.push({  // 가능! union은 freshness에서 제외!
    name: 'Tan',
    age: 30,
    addr: 'Incheon',
 });

 console.log(aOrB)

 type tup=[number, number, ...any[]];
 const a:tup = [1,2,1,2,"gd"];

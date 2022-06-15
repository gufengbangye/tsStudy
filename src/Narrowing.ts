//窄化
// 类型窄化根据类型守卫在子语句块重新定义
// 主要是为了用于联合类型对特定类型做处理
type shop = string | number
//typeof+if窄化
function getShop(a:shop){
   if(typeof a === 'string'){
      // 被窄化成字符串
      a.toLocaleLowerCase()
   }else{
      //dosomething
   }
}
//真值窄化
type Address = string | Array<string> | null
function getAddress(b:Address){
    if(b&&typeof b === 'object'){
       for(const item of b){
         
       }
    }else{
        //string | null
        //doSomething
    }
}
//in 窄化
type Car = {
    move:() => void,
}
type Student = {
    study: () => void
}
function isStudent(a:Car|Student){
    if('move' in a){
        a.move()
    }else{
        a.study()
    }
}

//instanceof窄化
function isDate(x:Date|string){
    if(x instanceof Date){
      x.getDate() //x Date
    }else{
      //字符串
    }
}

//类型推导窄化
 let school = Math.random()<10?9:' hi hi i'
 school = 'a'
 school = 1
//  school ={} //报错

// is操作符
function isCar(a : Car | Student) : a is Car{
  return (a as Car).move !== undefined
}
let bmw: Student = {
  study : () => {}
} 
if(isCar(bmw)){
   bmw.move()
}else{
    bmw.study()
}

//判别联合的窄化
type circle = {
  kind: 'circle',
  radius: number
}
type rect = {
    kind: 'rect',
    width: number,
    height: number
}
function getAear(shape : circle | rect){
  switch (shape.kind) {
    case 'circle':
        return shape.radius ** 2
    case 'rect' :
        return shape.width * shape.height
    default:
        const noVal:never = shape
        return noVal
  }
}

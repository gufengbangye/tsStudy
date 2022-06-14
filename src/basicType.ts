const address:string = '2'
const age:number = 12
const list:Array<string> = ['1','2']
const skill:Array<string|number> = [1,'2']
const obj:{x:number} = {x:0}
let pepole :unknown
pepole = 2
pepole = 4 
pepole = true
// let h: boolean =pepole 
function sayName(name:string):string{
    return name.toLocaleUpperCase()
}
const  sayNumber = (num:number):string => num + ''.toLocaleLowerCase()
sayNumber(1)
//匿名函数
// 类型会根据上下文推测类型
list.forEach(item => item.toLocaleLowerCase())
// skill.forEach(item => item.toLocaleLowerCase())

const addNumber = (a:number, b:number ):number => a+b
addNumber(1,2)
// addNumber(1) //报错缺少参数
const addAge = (a:number,b?:number) :number => a 
addAge(1,2)
addAge(1)

//对象
// 当对象有了类型则需要将所声明的类型严格执行,可选项也是如同函数加问号
const info:{
    name:string,
    age:number
} = {name:'张三',age:18} 
const human:{
    name:string,
    age?:number
} = {name:'张三'}

 function getInfo(human:string|number){
     return human
 }
 getInfo(1)
 getInfo('kangkang')
//  getInfo([1]) //报错


//接口
 interface box {
     height: string,
     width: string,
 }
 interface content extends box {
     inner:string,
 }
 //接口合并
 interface box  {
     color:string
 }
 const content:content = {
    height: '198px',
    width:'120px',
    inner:'我是一个内容块',
    color:"#000000" 
}
//type 别名
//别名联合
type cat = {
    name: string
}
type dog = {
    age : number
}
type Name = cat & dog
const iphoneNumber:Name = {
    name:'cat',
    age:1
}
//as类型断言
// const myCanvas = document.getElementById('canvas') as HTMLCanvasElement

// !运算符
 
function getName(name: string | null){
    // console.log(name.toLocaleLowerCase()) //报错
       console.log(name!.toLocaleLowerCase()) //报错
}
// 枚举
enum Dirction {
    left ,
    right,
    up = 4,
    down
}
console.log(Dirction[Dirction.left])
let  width:number|'auto' 
width =  'auto'
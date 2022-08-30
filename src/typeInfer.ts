interface Animal {
    age: number,
    address: string,
    eat: (x:number,y:number) => number
}
type Food = {
   age: number
}
const b:Animal = {
    age:18,
    address:'hdjd',
    eat:(x,y) => x+y
}
// type c = keyof Animal['eat']
// const d:c = 2
function getAnimal<Animal, T extends keyof Animal>(a:Animal, b:T ): Animal[T]{
   return a[b]
}
console.log(typeof getAnimal({
    age:18,
    address:'sdh',
}, "age"))

type fisher = {
  swim: number,
  fly: string
}
type skill = keyof fisher

type Arrayish = {[n:number]:unknown}
type ish = keyof Arrayish
const math : ish = Number('1')

type jk = number
let asagdhgah = {
    width:10,
    height:20
}
let item : typeof asagdhgah

//Partial
type StarCar = {
   move<T>(params:T) : number,
   name: string
}
const klkl : Partial<StarCar> = {
    move: (a) => 1
}
interface Todo {
    title: string,
    description: string
  }
function updateTodo(todo:Todo,feildsToUpdate : MyPartial<Todo>){
return {...todo,...feildsToUpdate };
}
const todo1 = {
title:'我是title1',
description: '技术时间到'
}
const todo2 = updateTodo(todo1,{
description :'todo2'
})

type MyPartial<T> = {
[p in keyof T]?: T[p]
}

//required
interface Props {
    a?:number,
    b?:number
}
const boxProps :Props = {
    a:1
}
const roomProps:MyRequired<Props> = {
   a:1,
   b:1
}
//required源码
type MyRequired<T> = {
   [P in keyof T] - ?: T[P]
}

//readOnly
type DoorProps = {
   height:number,
   readonly width: number
}

const doorProps :Readonly<DoorProps> = {
   height:100,
   width:200
}
//源码分析
type MyReadonly<T> = {
    readonly [P in keyof T] : T[P]
}

//Record
type CarItem = {
    price:number,
    info:string
}
type CarName = 'bmw'|'audi'|'大ben'
const CarShop: myRecord<CarName,CarItem> = {
    bmw: {price:1,info:'我是宝马呀'},
    audi: {price:1,info:'我是奥迪呀'},
    大ben: {price:1,info:'我是大ben呀'}
}
type myRecord<T extends keyof any, U> = {
  [P in T]: U
}

//Pick
const filterCar : MyPick<CarItem,'info'> = {
    info : 'l'
}
type MyPick<T,U extends keyof T> = {
   [P in U] : T[U]
}

//exclude
type Students ='kangkang'|'xiaohong'|'jiangnan'
type shfit = {
    name: string,
    info: string
}
type StudentJian = Exclude<shfit,{
    name:string,
    info:string,
    date:111
}>
type MyExclude<T,U> = T extends U ? never : T
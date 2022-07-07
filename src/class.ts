//类补充
class Point {
    x:number
    y:number
    constructor(x:number,y:number){
        this.x = x
        this.y = y
    }
    add(x:number,y:number):Point{
        return  new Point(this.x+ x,this.y+y)
    }
}
const aPoint = new Point(4,5)
console.log(aPoint.x)
console.log(aPoint.add(5,6))
//class的重载
class bigCar {
    width:number
    height:number
    constructor(width:number,height:number){
       this.width = width
       this.height = height
    }
    public makeBig(width:number,y:number):number
    public makeBig(width:bigCar):bigCar;
    public makeBig(width:number|bigCar,height?:number){
      if(typeof width === "number"){
        return  width + height!
      }
      return width
    }
}
//getter和setter
// class Iphone{
//     _phoneName = 'NOKIA'
//     get phoneName(){
//         return this._phoneName
//     }
//     set(val:string){
//         this._phoneName = val
//     }
// }
// const phone = new Iphone()
// console.log(phone.phoneName) //隐式的调用(阅读起来不太友好)
//改造
class Iphone{
    _phoneName = 'NOKIA'
    getphoneName(){
        return this._phoneName
    }
    setphoneName(val:string){
        this._phoneName = val
    }
}
const myIphone = new Iphone()
console.log(myIphone.getphoneName())//比较好阅读，理解这个是用来做什么的
//索引器

//继承
//类型继承
interface sky {
    width:number,
    getArea:(width:number) => number
}
interface blueSky extends sky {
    color:string
}
interface color {
    name:string
}
//类的继承
class blueSky implements sky,color {
    width: number
    getArea(width: number){
           return width
    }
    name:string
}
class SportsMan {
    Dribble = 'fast'
}
class Kobe extends SportsMan {
    name = 'Kobe'
}
const kobe = new Kobe()
console.log(kobe.Dribble)
//成员作用域
class Animal {
  public a = 111
}
const loin = new Animal()
console.log(loin.a)

class Human {
  private a = 222
}
const techer = new Human()
// console.log(techer.a)// 会报错因为a是私有的
class Ship {
  protected a = 4545
}
const starShip = new Ship()
// console.log(starShip.a) //会报错
class bigShip extends Ship {
    getShip(){
        return this.a
    }
}
const bigerShip = new bigShip()
console.log(bigerShip.getShip())
//static
//静态成员
class Glass {
  static price  = 40
}
const my = new Glass()
console.log(Glass.price)
//抽象类
abstract class Ball {
    width: 20
    getBall(){
        return this
    }
}
class basketBall extends Ball {
    constructor(){
        super()
        console.log(this)
    }
}
const basketball = new basketBall() 
basketball.width
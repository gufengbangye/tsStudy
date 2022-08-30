class lik {
    static foo=1
    sex: '1'
    constructor(){

    }
}
console.log(lik.foo)
function bs(){
    return (tartget : any) => {
        console.log(lik.foo)
        return lik
    }
}
@bs()
class Doctor {
    sex:string
    constructor(sex:string){
       this.sex =  sex
    }
}
const zeng = new Doctor('男')
// @ts-ignore
console.log(Doctor.foo)
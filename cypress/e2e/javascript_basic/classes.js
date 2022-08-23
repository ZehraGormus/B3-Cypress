class Car{

constructor(carname,model,year){
    this.carname=carname
    this.model=model
    this.year=year
}

carAge(){
    //function
    let date=new Date()
    return date.getFullYear()-this.year // arabanin yasini bulmak icin
}

}

var myCar=new Car('Seat', 'leon',2005)
console.log(myCar.carname,myCar.model,myCar.year)
console.log('car age is ',myCar.carAge())
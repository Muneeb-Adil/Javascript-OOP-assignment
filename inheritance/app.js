class AutoMobile{
    constructor(name,model,color,type){
        this.name=name
        this.model=model
        this.color=color
        this.type=type
        this.log="Close"
        this.doors="Close"
    }
    start(){
        this.log="Open"
        console.log(`${this.name} is ${this.log} for drive`)
    }
    opendoors(){
        this.doors="Open"
        console.log(`Doors of ${this.name} are ${this.doors}`)
    }
}
class Car extends AutoMobile{
    constructor(name,model,color,type,numberofdoors,numberoftyres,cost,maxspeed){
        super(name,model,color,type)
        this.numberofdoors=numberofdoors
        this.numberoftyres=numberoftyres
        this.cost=cost
        this.maxspeed=maxspeed
    }
    getDoors(){
        console.log(`Number of doors in ${this.name} = ${this.numberofdoors}`)
    }
    getTyres(){
        console.log(`Number of tyres in ${this.name} = ${this.numberoftyres}`)
    }
    getCost(){
        console.log(`Cost of ${this.name} = ${this.cost}`)
    }
    getMaxspeed(){
        console.log(`Maxspeed of ${this.name} = ${this.maxspeed}`)
    }

}

class Truck extends AutoMobile{
    constructor(name,model,color,type,numberofdoors,numberoftyres,cost,maxspeed,company){
        super(name,model,color,type)
        this.numberofdoors=numberofdoors
        this.numberoftyres=numberoftyres
        this.cost=cost
        this.maxspeed=maxspeed
        this.company=company
    }
    getDoors(){
        console.log(`Number of doors in ${this.name} = ${this.numberofdoors}`)
    }
    getTyres(){
        console.log(`Number of tyres in ${this.name} = ${this.numberoftyres}`)
    }
    getCost(){
        console.log(`Cost of ${this.name} = ${this.cost}`)
    }
    getMaxspeed(){
        console.log(`Maxspeed of ${this.name} = ${this.maxspeed}`)
    }
    getCompany(){
        console.log(`${this.name} is of ${this.company} company`)
    }

}
class Bus extends AutoMobile{
    constructor(name,model,color,type,numberofdoors,numberoftyres,ticketprice,maxspeed){
        super(name,model,color,type)
        this.numberofdoors=numberofdoors
        this.numberoftyres=numberoftyres
        this.ticketprice=ticketprice
        this.maxspeed=maxspeed
    }
    getDoors(){
        console.log(`Number of doors in ${this.name} = ${this.numberofdoors}`)
    }
    getTyres(){
        console.log(`Number of tyres in ${this.name} = ${this.numberoftyres}`)
    }
    getTicketprice(){
        console.log(`Ticket of ${this.name} = ${this.ticketprice}`)
    }
    getMaxspeed(){
        console.log(`Maxspeed of ${this.name} = ${this.maxspeed}`)
    }
}
let car = new Car("Alto","VXL - AGS","Red","Automatic",4,4,2223000,"140 KM/H")
car.start()
car.opendoors()
car.getCost()
car.getDoors()
car.getTyres()
car.getMaxspeed()
let truck = new Truck("SORENTO","V6","Brown","manual",2,8,7800000,"180 KM/H","KIA")
truck.start()
truck.opendoors()
truck.getCost()
truck.getDoors()
truck.getTyres()
truck.getMaxspeed()
truck.getCompany()
let bus = new Bus("Faisal Movers","f19","Blue","automatic",1,4,20000,"160 KM/H")
bus.start()
bus.opendoors()
bus.getTicketprice()
bus.getDoors()
bus.getTyres()
bus.getMaxspeed()
import {chooseYourCar} from "../chooseYourCar.js"
import {assert} from "chai";

describe("chooseYourCar",()=>{
    describe('choosingType',()=>{
        it ('Should throw an error Invalid Year!',()=>{
            assert.throw(()=>chooseYourCar.choosingType("Sedan",'red',1899), "Invalid Year!")
            assert.throw(()=>chooseYourCar.choosingType("Sedan",'red',2023), "Invalid Year!")
        })
        it ('Should throw an error type of car is not what you are looking for.',()=>{
            assert.throw(()=>chooseYourCar.choosingType("Coupe",'red',1999),"This type of car is not what you are looking for.")
        })
        it ('Should return this red Sedan meets the requirements, that you have',()=>{
            assert.strictEqual(chooseYourCar.choosingType("Sedan",'red',2010),"This red Sedan meets the requirements, that you have.")
            assert.strictEqual(chooseYourCar.choosingType("Sedan",'red',2011),"This red Sedan meets the requirements, that you have.")
        })
        it ('Should return this red Sedan meets the requirements, that you have',()=>{
            assert.strictEqual(chooseYourCar.choosingType("Sedan",'red',2009),"This Sedan is too old for you, especially with that red color.")
            // assert.strictEqual(chooseYourCar.choosingType("Sedan",'red',2011),"This red Sedan meets the requirements, that you have.")
        })
    })
    describe('brandName',()=>{
        it('Should throw an error Invalid Information!',()=>{
            assert.throw(()=>chooseYourCar.brandName(["BMW","Toyota"],-1),"Invalid Information!")
            assert.throw(()=>chooseYourCar.brandName(["BMW","Toyota"],2,5),"Invalid Information!")
            assert.throw(()=>chooseYourCar.brandName(["BMW","Toyota"],3),"Invalid Information!")
            assert.throw(()=>chooseYourCar.brandName([],3),"Invalid Information!")
            assert.throw(()=>chooseYourCar.brandName('',3),"Invalid Information!")
            assert.throw(()=>chooseYourCar.brandName(undefined,3),"Invalid Information!")
            assert.throw(()=>chooseYourCar.brandName(3,3),"Invalid Information!")
            assert.throw(()=>chooseYourCar.brandName({},3),"Invalid Information!")
            assert.throw(()=>chooseYourCar.brandName(NaN,3),"Invalid Information!")
            assert.throw(()=>chooseYourCar.brandName([],-1),"Invalid Information!")
            assert.throw(()=>chooseYourCar.brandName(true,3),"Invalid Information!")
            assert.throw(()=>chooseYourCar.brandName(["BMW","Toyota"],true),"Invalid Information!")
        })
        it ('Shoud return the changed array of brands as a string, joined by a comma and a space.',()=>{
            assert.strictEqual(chooseYourCar.brandName(["BMW","Toyota",'Mazda'],1),'BMW, Mazda')
        })
    })
    describe('CarFuelConsumption',()=>{
        it('Should return the car is efficient enough, it burns 7.00 liters/100 km.',()=>{
            assert.strictEqual(chooseYourCar.carFuelConsumption(100,7),'The car is efficient enough, it burns 7.00 liters/100 km.')
            assert.strictEqual(chooseYourCar.carFuelConsumption(100,5),'The car is efficient enough, it burns 5.00 liters/100 km.')
            
        })
        it('Should return the car burns too much fuel - {consumptedFuelInLitres} liters!',()=>{
            assert.strictEqual(chooseYourCar.carFuelConsumption(100,9),'The car burns too much fuel - 9.00 liters!')
            assert.strictEqual(chooseYourCar.carFuelConsumption(100,8),'The car burns too much fuel - 8.00 liters!')
        })
        it('Should return Invalid Information!',()=>{
            assert.throw(()=>chooseYourCar.carFuelConsumption(100,-9),'Invalid Information!')
            assert.throw(()=>chooseYourCar.carFuelConsumption(100,''),'Invalid Information!')
            assert.throw(()=>chooseYourCar.carFuelConsumption(100,[]),'Invalid Information!')
            assert.throw(()=>chooseYourCar.carFuelConsumption(100,true),'Invalid Information!')
            assert.throw(()=>chooseYourCar.carFuelConsumption(100,{}),'Invalid Information!')
            assert.throw(()=>chooseYourCar.carFuelConsumption(100,undefined),'Invalid Information!')
            assert.throw(()=>chooseYourCar.carFuelConsumption('100',5),'Invalid Information!')
            assert.throw(()=>chooseYourCar.carFuelConsumption(-100,5),'Invalid Information!')
            assert.throw(()=>chooseYourCar.carFuelConsumption({},5),'Invalid Information!')
            assert.throw(()=>chooseYourCar.carFuelConsumption([],5),'Invalid Information!')
            assert.throw(()=>chooseYourCar.carFuelConsumption([undefined],5),'Invalid Information!')
            assert.throw(()=>chooseYourCar.carFuelConsumption(undefined,5),'Invalid Information!')
            assert.throw(()=>chooseYourCar.carFuelConsumption(true,7),'Invalid Information!')
            assert.throw(()=>chooseYourCar.carFuelConsumption(true,''),'Invalid Information!')
        })
    })

})


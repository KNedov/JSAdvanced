class WineSelection{
    wines=[]
    bill=0
    constructor(space){
        this.space=space
    }
    reserveABottle (wineName, wineType, price){
        if (this.space==0)throw new Error ("Not enough space in the cellar.")
            let paid=false
            this.wines.push({wineName,wineType,price,paid})
            this.space--
            return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }
    payWineBottle( wineName, price ) {
        let wine=this.wines.find(w=>w.wineName==wineName)
        if(!wine) throw new Error (`${wineName} is not in the cellar.`)
        if (wine.paid) throw new Error (`${wineName} has already been paid.`)
        if(!wine.paid) {
            wine.paid=true
            this.bill+=price
            return `You bought a ${wineName} for a ${price}$.`
        }
    }
    openBottle(wineName) {
        let wine=this.wines.find(w=>w.wineName==wineName)
        if(!wine) throw new Error ("The wine, you're looking for, is not found.")
        if(!wine.paid) throw new Error (`${wineName} need to be paid before open the bottle.`)
            this.wines=this.wines.filter(wine=>wine.wineName!==wineName)
        this.space++
        return `You drank a bottle of ${wineName}.`
    }
    cellarRevision(wineType){

        for (const el of this.wines) {
            if(el.paid==true) el.paid='Has Paid'
            if(el.paid==false) el.paid='Not Paid'
           }
        if(!wineType){
            let result=''
            result+=`You have space for ${this.space} bottles more.\nYou paid ${this.bill}$ for the wine.\n`
            this.wines=this.wines.sort((a='',b)=>a.wineName.localeCompare(b.wineName))
            result+=`${this.wines.map(({wineName,wineType,price,paid})=>`${wineName} > ${wineType} - ${paid}.`).join('\n')}`
            return result
        }
        let type= this.wines.find(w=>w.wineType==wineType)
        if (type) {
            let typeWines=this.wines.filter(wine=>wine.wineType==wineType)
            let result=typeWines.map(({wineName,wineType,price,paid})=>`${wineName} > ${wineType} - ${paid}.`)
            return result.join('\n')
        }else if (!type){
            throw new Error (`There is no ${wineType} in the cellar.`)
        }
    }

}
const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());

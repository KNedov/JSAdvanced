function solution() {

    const store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const recipe = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    return (data) => {
        const [action, type, qty] = data.split(' ');

        switch (action) {
            case 'restock': return restock(type, qty);
            case 'prepare': return prepare(type, qty);
            case 'report': return report();
        }
    }

    function report() {
        return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`
    }

    function prepare(type, qty) {
        let prepareRecipe = {};
        for (const [el, value] of Object.entries(recipe[type])) {
            let neededElementQty = value * qty;
            if (store[el] < neededElementQty) {
                return `Error: not enough ${el} in stock`;
            }
            prepareRecipe[el] = neededElementQty;
        }

        for (let [el, value] of Object.entries(prepareRecipe)) {
            store[el] -= Number(value);
        }
        return 'Success';
    }

    function restock(type, qty) {
        store[type] += Number(qty);
        return 'Success';
    }

}

let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
function argumentInfo(...args) {
    let result = {};
    for (const el of args) {
        let type = typeof(el);
        console.log(`${type}: ${el}`);
        if(!result.hasOwnProperty(type)){
            result[type] = 0;
        }
        result[type] += 1;
    }
    let keys = Object.entries(result).sort((a, b) => b[1]- a[1]);
    for (const el of keys){
        console.log(`${el[0]} = ${result[el[0]]}`);
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });
argumentInfo({ name: 'bob'}, 3.333, 9.999)
// string: cat
// number: 42
// function: function () { console.log('Hello world!'); }
// string = 1
// number = 1
// function = 1

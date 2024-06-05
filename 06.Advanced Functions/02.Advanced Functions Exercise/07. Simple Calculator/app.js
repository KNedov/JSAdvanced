function calculator() {

    const html = {
        s1: '',
        s2: '',
        result: ''
    }

    function calc(a, b, sign) {
        const signs = {
            '+': (a,b) => a + b,
            '-': (a,b) => a - b
        };

        return signs[sign](Number(a), Number(b));
    }
    
    //Your function should return an object that meets the specified requirements
    //The returned object should support the following functionality
    //•	init (selector1, selector2, resultSelector) 
    //•	add () 
    //•	subtract () 
    return {
        init: (selector1, selector2, resultSelector) => {
            html.s1 = document.querySelector(selector1);
            html.s2 = document.querySelector(selector2);
            html.result = document.querySelector(resultSelector);
        },
        add: () => {
            html.result.value = calc(html.s1.value, html.s2.value, '+');
        },
        subtract: () => {
            html.result.value = calc(html.s1.value, html.s2.value, '-');
        }
    }
}

const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result');
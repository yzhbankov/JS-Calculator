/**
 * Created by Iaroslav Zhbankov on 07.11.2016.
 */
var input = document.querySelector(".main-input");
var eq = document.querySelector(".minor-input");
var ident = {
    ac: ['[data-name="ac"]', 'ac'],
    ce: ['[data-name="ce"]', 'ce'],
    division: ['[data-name="division"]', '/'],
    multiplication: ['[data-name="multiplication"]', '*'],
    one: ['[data-name="one"]', '1'],
    two: ['[data-name="two"]', '2'],
    three: ['[data-name="three"]', '3'],
    four: ['[data-name="four"]', '4'],
    five: ['[data-name="five"]', '5'],
    six: ['[data-name="six"]', '6'],
    seven: ['[data-name="seven"]', '7'],
    eight: ['[data-name="eight"]', '8'],
    nine: ['[data-name="nine"]', '9'],
    zero: ['[data-name="zero"]', '0'],
    plus: ['[data-name="plus"]', '+'],
    minus: ['[data-name="minus"]', '-'],
    equal: ['[data-name="equal"]', '='],
    backspace: ['[data-name="backspace"]', 'back'],
    dot: ['[data-name="dot"]', '.']
};
function setInput(operator) {
    var inputValue = input.innerText;
    if (operator == "ac") {
        input.innerText = '0';
        eq.innerText = '0';
    } else if (operator == "ce") {
        input.innerText = '0';
    } else if (operator == "equal") {
        var lastChar = input.innerText.slice(input.innerText.length - 1, input.innerText.length);
        if ((input.innerText.length > 1) && ((lastChar == '+') || (lastChar == '-') || (lastChar == '/') || (lastChar == '*'))) {
            input.innerText = input.innerText + eq.innerText;
        } else if (input.innerText.length == 1) {
            input.innerText = '0' + input.innerText;
            input.innerText = input.innerText + eq.innerText;
        }
        eq.innerText = calculation(input.innerText);
        input.innerText = '0';
    } else {
        for (var key in ident) {
            if (operator == key) {
                if ((operator == 'zero') && (input.innerText.indexOf('.') == -1) &&(input.innerText.length == 1)&&(input.innerText.lastIndexOf('0') == -1)) {
                    input.innerText += '';
                } else if ((operator == 'dot') && (input.innerText.indexOf('.') != -1)) {
                    input.innerText += '';
                } else if (operator == 'backspace') {
                    if (input.innerText.indexOf('0') != 0) {
                        input.innerText = input.innerText.slice(0, input.innerText.length - 1);
                    }
                    if (input.innerText.length < 1) {
                        input.innerText = '0';
                    }
                } else if ((operator == 'plus') && ((input.innerText.lastIndexOf('+') == input.innerText.length - 1) || (
                        input.innerText.lastIndexOf('*') == input.innerText.length - 1) || (
                        input.innerText.lastIndexOf('/') == input.innerText.length - 1) || (
                        input.innerText.lastIndexOf('.') == input.innerText.length - 1) || (
                        input.innerText.lastIndexOf('-') == input.innerText.length - 1)
                    )) {
                    input.innerText = input.innerText.slice(0, input.innerText.length - 1) + ident[key][1];
                } else if ((operator == 'minus') && ((input.innerText.lastIndexOf('+') == input.innerText.length - 1) || (
                        input.innerText.lastIndexOf('*') == input.innerText.length - 1) || (
                        input.innerText.lastIndexOf('/') == input.innerText.length - 1) || (
                        input.innerText.lastIndexOf('.') == input.innerText.length - 1) || (
                        input.innerText.lastIndexOf('-') == input.innerText.length - 1)
                    )) {
                    input.innerText = input.innerText.slice(0, input.innerText.length - 1) + ident[key][1];
                } else if ((operator == 'multiplication') && ((input.innerText.lastIndexOf('+') == input.innerText.length - 1) || (
                        input.innerText.lastIndexOf('-') == input.innerText.length - 1) || (
                        input.innerText.lastIndexOf('/') == input.innerText.length - 1) || (
                        input.innerText.lastIndexOf('.') == input.innerText.length - 1) || (
                        input.innerText.lastIndexOf('*') == input.innerText.length - 1)
                    )) {
                    input.innerText = input.innerText.slice(0, input.innerText.length - 1) + ident[key][1];
                } else if ((operator == 'division') && ((input.innerText.lastIndexOf('+') == input.innerText.length - 1) || (
                        input.innerText.lastIndexOf('*') == input.innerText.length - 1) || (
                        input.innerText.lastIndexOf('-') == input.innerText.length - 1) || (
                        input.innerText.lastIndexOf('.') == input.innerText.length - 1) || (
                        input.innerText.lastIndexOf('/') == input.innerText.length - 1)
                    )) {
                    input.innerText = input.innerText.slice(0, input.innerText.length - 1) + ident[key][1];
                } else if (((operator == 'plus') || (operator == 'minus') || (operator == 'multiplication') || (operator == 'division')) && (input.innerText == '0')) {
                    input.innerText = eq.innerText + ident[key][1];
                } else {
                    input.innerText += ident[key][1];
                    if ((input.innerText.indexOf('0') == 0) && (input.innerText.indexOf('.') != 1)) {
                        input.innerText = input.innerText.slice(1);
                    }
                }
            }
        }
    }
}

function calculation(equation) {
    return eval(equation);
}

var elements = Array.prototype.slice.call(document.querySelectorAll("button"));
console.log(elements);
elements.map(function (item) {
    item.addEventListener('click', function () {
        setInput(item.getAttribute('data-name'));
    });
});

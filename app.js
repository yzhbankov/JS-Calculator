/**
 * Created by Iaroslav Zhbankov on 07.11.2016.
 */
var input = document.querySelector(".main-input");
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
    plusminus: ['[data-name="plusminus"]', '+/-'],
    dot: ['[data-name="dot"]', '.']
};
function setInput(operator) {
    var inputValue = input.innerText;
    if ((operator == "ac") || (operator == "ce")) {
        input.innerText = '0';
    } else {
        for (var key in ident) {
            if (operator == key) {
                input.innerText += ident[key][1];
            }
        }
    }
}

var elements = Array.prototype.slice.call(document.querySelectorAll("button"));
console.log(elements);
elements.map(function (item) {
    item.addEventListener('click', function () {
        setInput(item.getAttribute('data-name'));
    });
});

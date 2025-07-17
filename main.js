const engToUkr = {
    q: 'й', Q: 'Й',
    w: 'ц', W: 'Ц',
    f: 'а', F: 'А',
    j: 'о', J: 'О',
    k: 'л', K: 'Л',
    v: 'м', V: 'М',
    e: 'у', E: 'У',
    r: 'к', R: 'К',
    t: 'е', T: 'Е',
    y: 'н', Y: 'Н',
    g: 'п', G: 'П',
    h: 'р', H: 'Р',
    n: 'т', N: 'Т',
    u: 'г', U: 'Г',
    i: 'ш', I: 'Ш',
    o: 'щ', O: 'Щ',
    p: 'з', P: 'З',
    '[': 'х', '{': 'Х',
    ']': 'ї', '}': 'Ї',
    a: 'ф', A: 'Ф',
    s: 'і', S: 'І',
    d: 'в', D: 'В',
    l: 'д', L: 'Д',
    ';': 'ж', ':': 'Ж',
    "'": 'є', '"': 'Є',
    z: 'я', Z: 'Я',
    x: 'ч', X: 'Ч',
    c: 'с', C: 'С',
    b: 'и', B: 'И',
    m: 'ь', M: 'Ь',
    ',': 'б', '<': 'Б',
    '.': 'ю', '>': 'Ю',
    '/': '.', '?': ',',
    '@': '"', '#': '№',
    '$': ';', '^': ':',
    '&': '?'
};
let ukrToEng = {};
for (const key in engToUkr) {
    let value = engToUkr[key]
    ukrToEng[value] = key;
}



let input = document.getElementById('inputUncorrectWord');
let p = document.getElementById('correctedWord');
let btnEngToUkr = document.getElementById('engToUkr');
let btnUkrToEng = document.getElementById('ukrToEng');

let currentMap = engToUkr;

btnEngToUkr.addEventListener('click', function (ev) {
    currentMap = engToUkr;
    btnEngToUkr.style.background = 'lightgray';
    btnUkrToEng.style.background = 'gray';
});
btnUkrToEng.addEventListener('click', function (ev) {
    currentMap = ukrToEng;
    btnEngToUkr.style.background = 'gray';
    btnUkrToEng.style.background = 'lightgray';
});

function replacer(text) {
    let result = '';
    for (const char of text) {
        if (currentMap.hasOwnProperty(char)) {
            result += currentMap[char];
        } else {
            result += char;
        }
    }
    return result;
};
input.addEventListener('input', function (ev) {
    let corrected = replacer(input.value);
    p.textContent = corrected;
});


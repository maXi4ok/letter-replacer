
const keyboardMap = {
    f: 'а', F: 'А',
    j: 'й', J: 'Й',
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
    '/': '.', '?': ','
};

let string = 'ghbdsn';
function replacer(string, keyboardMap) {
    let newString = '';
    for (const char of string) {
        if (keyboardMap.hasOwnProperty(char)) {
            newString += keyboardMap[char];
        } else {
            newString += char;
        }
    }
    return newString;
}
console.log(string);
console.log(replacer(string, keyboardMap));

let str = 'dsnfyyz';
console.log(str);
console.log(replacer(str, keyboardMap));
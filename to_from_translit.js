const DICT = {
    a: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    ё: 'yo',
    ж: 'zh',
    з: 'z',
    и: 'i',
    й: 'j',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'h',
    ц: 'cz',
    ч: 'ch',
    ш: 'sh',
    щ: 'shh',
    ъ: '\'\'',
    ы: 'y',
    ь: '\'',
    э: 'e\'',
    ю: 'yu',
    я: 'ya',
};

function translitToRus (text) {
    let translate = '';

    let textArr = text.split('');

    textArr.forEach((char, i) => {

        let lowerChar = char.toLowerCase();

        if (DICT[lowerChar]) {
            if (lowerChar === char) {
                translate += DICT[char];
            } else {
                translate += DICT[lowerChar].substring(0, 1).toUpperCase() + DICT[lowerChar].substring(1); 
            }
            
        } else {
            translate += char;
        }

    });

    return translate;
}

function sortFunc(a, b) {
    if (DICT[a].length < DICT[b].length) {
        return 1;
    }
    if (DICT[a].length > DICT[b].length) {
        return -1;
    }
    return 0;
}

function replaceFunc(item) {
    return function (match) {

        if (match.substring(0, 1).toLowerCase() == match.substring(0, 1)) {
            return item;
        } else {
            return item.toUpperCase();
        }
        
    }
}

function translitToEng (text) {
    Object.keys(DICT).sort(sortFunc).forEach(item => {
        text = text.replace(new RegExp(`${DICT[item]}`, 'gi'), replaceFunc(item));
    });
    return text;
}

console.log(translitToRus ('Красивый текст нужно перевести в транслит. Щит и меч.'));
console.log(translitToEng ('Krasivyj tekst nuzhno perevesti v translit. Shhit i mech.'));

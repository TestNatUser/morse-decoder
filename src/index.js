const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let reg = /(.{10})/g;
    const array = expr.split(reg).filter(char => char != "");
    reg = /(.{2})/g;
    let decoded = [];
    
    array.forEach(element => {
        if (element == "********") {
            decoded.push(" ");
        } else {
            let el = element.split(reg).filter(char => char != "");
            let dec=[];
            el.forEach(e => {
                if (e != "00") {
                    if(e=="10"){
                        dec.push(".");
                    } else if(e=="11"){
                        dec.push("-");
                    }
                }
            })
            decoded.push(dec.join(""));
        }
    });
    let morse=[];
decoded.forEach(element=>{
    if(element==""){
        morse.push(" ");
    } else {
    morse.push(MORSE_TABLE[element]);
    }
})
return morse.join("");
}

decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010");

module.exports = {
    decode
}
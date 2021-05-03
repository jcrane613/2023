//Jonathan Crane
//Convert num to word equivalent


var ones = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

function convert_tens(num) {
    if (num < 10) return ones[num];
    var i = splitToDigit(num);
    var string = "";
    for (let j = 0; j < i.length; j++) {
        string+= convert_tens(i[j]);
    }
    return string;
}

function splitToDigit(n){
    return [...n + ''].map(Number)
}

function main() {
    var array = [];
    for (let j = 2; j < process.argv.length; j++) {
        array.push(convert_tens(process.argv[j]));
    }
    console.log(array.join(','));
}

main();

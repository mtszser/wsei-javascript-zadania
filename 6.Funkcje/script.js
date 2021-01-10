// Zadanie 1
const ser = () => {
    console.log("Udało się!");
}
ser();

// Zadanie 2
let s = 69;

const ser = (s) => {
    console.log(s);
}
ser(s);

// Zadanie 3
const ser = (param) =>{
    return param;
}
ser([1,2,6,0,1,"m","S"]);

// Zadanie 4
const string = (str) => {
    let c = 0;
    let time = setInterval(() => {
        console.log(str);
    if (++c >= 5) {
        clearInterval(time);
        console.log("Koniec");
    }                     
    }, 3000)
}

string("string");
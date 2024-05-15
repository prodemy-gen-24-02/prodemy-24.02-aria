

function square(r){
    return r*r;
}
function rectangle(x,y){
    return x*y;
}

function circle(r){

    return r*r*22/7;
}

function triangle(x,y){
    return x*y/2;
}

function trapezoid(a,b,h){
    var ab=parseInt(a)+parseInt(b);
    return ab*h/2;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Input angka : ', (a) => {
    console.log("Persegi: "+square(a));
    console.log("Lingkaran: "+circle(a));
    console.log("\n");

    rl.question('Input angka pertama : ', (a) => {
        rl.question('Input angka kedua : ', (b) => {
            rl.question('Input angka ketiga (tinggi segitiga dan trapesium) : ', (c) => {
        
        console.log("PersegiPanjang: "+rectangle(a,b));
        console.log("Segitiga: "+triangle(a,c));
        console.log("Trapesium: "+trapezoid(a,b,c)); 
        rl.close();
    });
    }); 
    });
});



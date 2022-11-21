let a=0;
const b=10;
let message="";

while (++a<=b) {
    message += `${a}${a !==b ? ", " : "."} `;
}

console.log(message);


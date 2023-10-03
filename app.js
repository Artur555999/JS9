let res = receipt() ;
let m = 'Вы заказали';
let s = 9000;
for (let key in res) {
    m  += ` ${key}`
    m += ` ${res[key].info}`
    s += res[key].price
}
console.log(`${m}, | Общая стоимость ${s} сум с доставкой (9000)`);

function map(arry, callback) {
    let array = [];
    for (let i = 0; i < arry.length; i++) {
        array.push(callback(arry[i])); 
    }
    return array;
}

let arry = [1, 2, 3, 4, 5, 6];

let mapp = map(arry, num => num * 2);
console.log(mapp); 
console.log(arry); 

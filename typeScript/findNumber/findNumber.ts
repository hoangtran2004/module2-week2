let array: number[] = [1, 3, 5, 6, 8, 9];
let list: number[] = [];
for (let i = 0; i < 11; i++) {
    if (array.indexOf(i) == -1) {
        list.push(i)
    }
}
console.log(list)
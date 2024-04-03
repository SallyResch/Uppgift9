function bishBosh() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 4 === 0) {
            console.log('Bish-Bosh');
        } else if (i % 3 === 0) {
            console.log('Bish');
        } else if (i % 4 === 0) {
            console.log('Bosh');
        } else {
            console.log(i);
        }
    }
}
bishBosh();
/* var numbers = [];
for (var i = 1; i <= 100; i++) {
    numbers.push(i);
}

console.log(numbers); */
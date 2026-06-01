function findPairsDivisibleBy17() {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        for (let j = i + 1; j <= 100; j++) {
            let sumOfTwoNumber = i + j;
            if (sumOfTwoNumber % 17 === 0) {
                count++;
                console.log(`(${i}, ${j}) = ${sumOfTwoNumber}`);
            }
        }
    }
    console.log(`Tổng cộng: ${count} cặp`);
}
findPairsDivisibleBy17();
async function calculateAverage(numbers) {
    if(numbers.lenth === 0) {
        return 0;
    }

    const sum = await numbers.reduce((acc, num) => acc + num, 0);
    const averageSum = await sum / numbers.length;
    const roundSum =  Math.round(averageSum * 10000) / 10000;
}

const numbers = [1, 2, 3, 5, 6, 4];
const resultFunction = calculateAverage(numbers);
console.log(resultFunction);

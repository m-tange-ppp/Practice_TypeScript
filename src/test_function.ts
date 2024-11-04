export {};

// 関数の定義
const getFizzBuzzString = (num: number): string => {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return String(num);
    }
};

const sequence = (first: number, last: number): number[] => {
    const result: number[] = [];
    for (let i = first; i  <= last; i++) {
        result.push(i);
    }
    return result;
};

for (const i of sequence(1, 100)) {
    const message = getFizzBuzzString(i);
    console.log(message);
}


// コールバック関数
const myMap = <S, T>(array: S[], callback: (element: S) => T): T[] => {
    const result: T[] = [];
    for (const element of array) {
        result.push(callback(element));
    }
    return result;
};

const data = [1, -1, 2, -3, 5, 8, -13];
console.log(myMap(data, x => x * 10));
console.log(myMap(data, x => x >= 0 ? true: false));
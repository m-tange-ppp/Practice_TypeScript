import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const textPath = path.join(fileDir, "uhyo.txt");
console.log(filePath, "\n", fileDir, "\n", textPath);

const text = readFileSync(textPath, "utf-8");

let count = 0;
let currentIndex = 0;

while (true) {
    const nextIndex = text.indexOf("uhyo", currentIndex);
    if (nextIndex >= 0) {
        count++;
        currentIndex = nextIndex + 1;
    } else {
        break;
    }
    console.log(count, currentIndex, nextIndex);
}

console.log(count);
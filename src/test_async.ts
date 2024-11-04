import { readFile } from "fs/promises";
import path, { resolve } from "path";
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const textPath = path.join(fileDir, "uhyo.txt");

const sleep = (duration: number) => {
    return new Promise<void>(resolve => setTimeout(resolve, duration));
};

// sleep(2).then(() => {
//     console.log("時間切れです");
//     process.exit()});
// const text = await readFile(textPath, "utf-8");
// console.log(text);
// console.log("すべて終了");

const errorAfter2ms = async() => {
    await sleep(2);
    throw new Error("2ms経ちました");
};

const result = await Promise.race([errorAfter2ms().catch(() => {return "エラーです"}), readFile(textPath, "utf-8")]);
console.log(result);
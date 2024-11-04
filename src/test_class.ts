export {};

class User {
    readonly name: string;
    readonly age: number;
    constructor (name: string, age: number) {
        if (name === "") {
            throw new Error("名前は空にできません");
        }
        this.name = name;
        this.age = age;
    }
    getMessage(message: string): string {
        return `${this.name} (${this.age}) [${message}]`;
    }
}

const uhyo = new User("uyho", 26);
console.log(uhyo.getMessage("こんにちは"));
const mitsu = new User("mitsu", 30);
console.log(mitsu.getMessage("Happy BirthDay"));


const createUser = (name: string, age: number) => {
    return (message: string) => `${name} (${age}) [${message}]`;
};
const getMessage = createUser("hisa", 30);
console.log(getMessage("おはよう"));
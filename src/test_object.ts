export {};

type User = {
    name: string;
    age: number;
    premiumUser: boolean;
}

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

const users: User[] = [];
const lines: string[] = data.split("\n");
for (const line of lines) {
    if (line !== "") {
        const [name, ageString, premiumUserString]: string[] = line.split(",");
        const age: number = Number(ageString);
        const premiumUser: boolean = premiumUserString === "1";
        users.push({name, age, premiumUser});
    }
}

console.log(users);

for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
    } else {
        console.log(`${user.name} (${user.age})はプレミアムユーザーではありません。`);
    }
}

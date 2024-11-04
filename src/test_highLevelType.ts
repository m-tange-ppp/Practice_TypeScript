export {};

type Option<T> = {
    tag: "some";
    value: T;
} | {
    tag: "none";
};

const isSome = <T>(obj: Option<T>): obj is {tag: "some"; value: T} => {
    return obj.tag === "some";
};

const showNumberIfExists = (obj: Option<number>) => {
    if (isSome(obj)) {
        console.log(obj.value);
    }
};

const one: Option<number> = {
    tag: "some",
    value: 1,
};

const none: Option<number> = {
    tag: "none",
};

showNumberIfExists(one);
showNumberIfExists(none);


const mapOption = <T, U>(obj: Option<T>, callback: (value: T) => U): Option<U> => {
    switch (obj.tag) {
        case "some":
            return {tag: "some", value: callback(obj.value)};
        case "none":
            return obj;
    }
};

const doubleOption = (obj: Option<number>) => {
    return mapOption(obj, x => x * 2);
};

console.log(doubleOption(one));
console.log(doubleOption(none));
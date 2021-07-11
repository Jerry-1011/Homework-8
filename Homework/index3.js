//Q1: Uppercase the first character

const name = "jerry";
const result = name.slice(1,3);
result;  et
const ucFirst = (str) =>{
    return str[0].toUpperCase + str.slice(1);
};
console.log(ucFirst(name));


//Q2: Check for spam
const checkspam = (str) => {
    const list = ["sex", "free", "viagra", "porn"];
    const arr = str.split('  ')
    console.log(thelist); ['Buy ViAgRaAAAAA now'];
    if list in thelist {
        print(true) 
    }
    else print(fales);
};


//Q3: Truncate the text

const truncate = (str,maxlength) => {
    if (str.length > maxlength) {
        return str.slice(0, maxlength) + '...'
    }
    return str;
};


//Q4: Extract the money

const value = (str) => {
    return +str.slice(1);
};

console.log(typeof value('100')); number
//Q5: Is array copied?

const game = ["roblox", "mincraft", "call of Duty", "slime rancher"];
const othergame = game;
othergame.push("Raft");
console.log(game);



//Q6: Array operations.

const music = ("Jazz", "Blues");
music.push('Rock-n-roll'[2]);
music.slice(Blues)
music.push(Classics[1]);
music.push(Rap[0]);
music.push(Reggae[1]);
console.log(music)


//Q7 Translate border-left-width to borderLeftWidt hWrite the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
//That is: removes all dashes, each word after dash becomes uppercased.

const string = 'my-short-string';
const arr = string.split('-');
console(string);



//Q8: Filter range

const range = (arr, a, b) => {
    const result = [];

    arr.foreach((value) => {
        if (value) >= a && value <=b) {
            result.push(value);
        }
    }};

    return result;
};

const easier = (arr, a, b) => arr.fillter((value) => value >= a && value <=b)
console.log(range(([5, 3, 8, 1,], 1, 4));
//Q9: Filter range "in place"

const place = (arr, a, b) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a ll arr[i] > b) {
            arr[i] = null;
        }
    }

    console.log(arr); [null, 3, null, 1]
    return arr.fillter((v) => v !==null);
console.log(place(([5, 3, 8, 1,], 1, 4));


//Q10: Map to names
const students = []
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 },
];

const names = students.map((v,i)) => {
    return v.firstname;
});

const sortnames = names.sort((a,b) => {
    return a.charCodeat(0) - b.charCodeat(0);
});

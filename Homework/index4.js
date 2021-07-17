//1

const numlist = (input) => Array.numlist(input);
console.log(numlist(35));
console.log(numlist([1, 2, 3, 54]));
//2

const fruits = (input) => fruits.join(" $ ");
console.log(fruits(["orange", "apple", "grape"]));
//3

const sort = (arr,num) => {
    let result;

}

//4

const sums = (nums) => {
    let total = 0;
    nums.forEach((v) => {
        total = total + v;
    });
    return total;
}

const additionreducer = (acc,val) => acc + val;
const multiply = (acc, val) => acc + val;

console.log(sums([1, 2, 3, 4, 5]));
console.log(sum([2, 7, 10]));
//5

const sum = (nums) => {
    let total = 0;
    nums.forEach((v) => {
        total = total + v;
    });
    return total;
}
const additionreducer = (acc,val) => acc + val;
const multiply = (acc, val) => acc * val;
console.log(sums([1, 2, 3, 4, 5]));
console.log(sum([2, 7, 10]));

//6
const removesame = (nums) => {
    const unique = [];
    nums.foreach (v => {
        if(unique.includes(v)) {
        } else {
            unique.push(v);
        }
    })
    return unique
};
console.log(removesame([1, 1, 2, 3, 7, 7, 0]));
//7

const findyear = (start, end) => {
    const findyear = []
    for(let i = start; i <= end; i++); {
        if(i % 4 === 0) {
            if(i % 100 !== 0 || i % 400 === 0) {
                findyear.push(i)
            }
        }
    }
    return findyear;
};

console.log(findyear(2000, 2018));
console.log(findyear(2013, 2015));
//8

function fibonacci(num)
{
    var num1=0;
    var num2=1;
    var sum;
    var i=0;
    for (i = 0; i < num; i++) 
    {
        sum=num1+num2;
        num1=num2;
        num2=sum;
    }
    return num2;
}
  


document.write("Fibonacci: "+fibonacci(0)+"<br>");
document.write("Fibonacci: "+fibonacci(4)+"<br>");
document.write("Fibonacci: "+fibonacci(3)+"<br>");



const findNumberIndex = (arr, num) => {
    let result;
  
    arr.forEach((v, i) => {
      if (v === num) {
        result = i;
      }
    });
  
    return `Index of ${num} is ${result}`;
  };
  
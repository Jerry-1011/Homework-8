//1

const input = [1, 2, 3, 54]
Array.isArray(input);
const imputs = 35
Array.isArray(inputs);
//2

const fruits = ["orange", "apple", "grape"];
document.getfruit("demo").innerHTML = fruits.join(" $ ");

//3

const sort =  [1, 2, 3, 4, 5]
echo.sort(sort);

const sorts =  [1, 2, 3, 4, 5, 6]
echo.sort(sorts)

//4

const sums = [1, 2, 3, 4, 5]
echo.sum(nums);  

const sum = [2, 7, 10]
echo.sum(num);

//5

const product = [1, 2, 3, 4, 5]
echo.product(product);

const products =  [2, 3]
echo.product(products);

//6
const number = [1, 1, 2, 3, 7, 7, 0];

function number(arr){
    let unique_array = Array.from(new Set(arr))
    return unique_array
}

//7

function year(startyear, endyear) {
    var year_range = [];
    for (var i = startyear; i <= endyear; i++)
    {
         year_range.push(i);
    }
    var new_array = [];

year_range.forEach(
function(year)
{ 
   if (yeat(year)) 
   new_array.push(year);
});

return new_array;
 }
functiontyear(year) ;{
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            return year;
    } else {
            return false;
    }
}
console.log(leapyear(2000,2016));

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
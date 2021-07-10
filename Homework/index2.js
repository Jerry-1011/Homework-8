ucFirst("john") == "John";

checkSpam('buy ViAgRA now') == true
checkSpam('free porn') == true
checkSpam('freebie') == false
checkSpam('free sex') == true
checkSpam("innocent rabbit") == false

truncate("Hi everyone!", 20) = "Hi everyone!"
alert( extractCurrencyValue('$120') === 120 );

const shoppingCart = fruits;
shoppingCart.push("Banana");

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("font-size") == 'fontSize';

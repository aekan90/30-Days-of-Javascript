let numOne = 3;
let numTwo = 5;
console.log(numOne == numTwo);

let JS = "JavaScript";
let PY = "Phyton";
console.log(JS == PY);

let lightOn = "true";
let lightOff = "false";
console.log(lightOn == lightOff);

// Arrays -----------------------------------------------

let nums = [3, 5, 7];
nums[2] = 9;
console.log(nums);
console.log(nums[1]);

let user1 = {
    name: 'Atıf Ertuğrul Kan',
    role: 'Kıdemli yazılım geliştirici',
    profession: 'Javascript'
}
console.log(user1);

let user2 = {
    name: 'Zeynep Bilge Kan',
    role: 'En Kıdemli yazılım geliştirici',
    profession: 'Full-Stack Developer'
}

console.log(user2);

// Math Kütüphanesi-------------------------------------------------------

console.log(Math.PI); // 3.14159735792834
console.log(Math.round(9.81)); // 0.5 in üzerinde olduğu için 10 a yuvarlar 
console.log(Math.floor(9.81)); // aşağı  yuvarlar
console.log(Math.ceil(9.81)); //  yukarı yuvarlar

console.log(Math.min(1,6,4,3,7,9,6));
let dizim = [5,7,3,22,4,78,9];
console.log('???'+Math.min(dizim));

// 0 ile 10 arasında rastgele bir sayı oluşturalım.
const num = Math.floor(Math.random () * 11) // 0 ile 10 arasında rastgele sayı oluşturur
console.log(num)

//Mutlak değer
console.log(Math.abs(-10))      // 10

//Kare kök
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Üs
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logaritma
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Sırasıyla 2 ve 10'un doğal logaritmasını döndürür
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometri
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

// 0-10 arası rasgele sayı üretir
console.log(Math.floor(Math.random()*11));


// konsola Math yazıp entera basarsanız bütün ütüphaneyi size gösterir


// burada kendinden bahseden bir paragraf yazmış. Bunuda çevirmeyelim :D
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)


let ad = 'Atıf Ertuğrul';
let soyad = 'kan';

console.log("Benim Adım "+ ad + " Soyadım "+ soyad);
console.log(`Benim adım ${ad} Kan`);

let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`) //

let adSoyad = "Atıf Ertuğrul Kan";
adSoyad.split();

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

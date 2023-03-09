console.log(3 > 2)              // true, çünkü 3 2 den büyüktür
console.log(3 >= 2)             // true, çünkü 3 2 den büyüktür
console.log(3 < 2)              // false,  çünkü 3 2 den büyüktür
console.log(2 < 3)              // true, çünkü 2 3 den küçüktür
console.log(2 <= 3)             // true, çünkü 2 3 den küçüktür
console.log(3 == 2)             // false, çünkü 3 2 ye eşit değildir
console.log(3 != 2)             // true, çünkü 3 2 ye eşit değildir
console.log(3 == '3')           // true, sadece değeri karşılaştırıyor
console.log(3 === '3')          // false, hem değeri hemde veri türünü karşılaştırıyor o yüzden yanlış. Birisi int değeri birisi string değerinden ( Bu denklik operatörü )
console.log(3 !== '3')          // true, hem değeri hemde veri türünü karşılaştırıyor o yüzden doğru. (Bu denk değil operatörü)
console.log(3 != 3)             // false, değeri karşılaştırıyor
console.log(3 !== 3)            // false, hem değeri hem de veri türünü karşılaştırıyor
console.log(0 == false)         // true, eşdeğer
console.log(0 === false)        // false, tam olarak aynı değil
console.log(0 == '')            // true, eşdeğer
console.log(0 == ' ')           // true, eşdeğer
console.log(0 === '')           // false, tam olarak aynı değil
console.log(1 == true)          // true, eşdeğer
console.log(1 === true)         // false, tam olarak aynı değil
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, eşit değil
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false


// ------------------------------ ternary if  --------------------------------------------------

console.log("------------------------------------------")  

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')


  // ------------------------------------- dışardan veri almak | prompt -------------------------------------------


let data = prompt('Başlık', 'Text İçeriği')
console.log(data +' is a ' + typeof(data))
console.log(parseInt(data))
data+=5;
console.log(parseInt(data))



  // ------------------------------------- dışardan onay almak | confirm -------------------------------------------
  const agree = confirm("İzin vermek istediine emin misin?")
  console.log(agree)


  

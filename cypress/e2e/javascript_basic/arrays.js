//creating array

var scores=new Array() //empty

var numbers= new Array(10) // 10 elemanli array baslangic olarak
var myNumbers= new Array(1,2,3,4) // baslatirken degerleri atadik

var sing=Array('Red') // array bir elemanli
var athletes=Array(3) // array 3 elemanli

var emptyArray=[]
 var colors=['red','green', 'blue']

 // array examples
 let tools=['jest', 'selenium','cypress', 'testcafe','phantomjs', 'protractor']

 // acccessing array elements

 console.log(tools)
 console.log(tools.toString)
 console.log(tools[1])

 const string=tools.toString()
console.log(string)

// add * with .join() method between array elements
const join=tools.join(' * ')
console.log(join)


//removes an element from the end of an arrays
const pop=tools.pop()
console.log(tools)

//add element to end of array
const push=tools.push('SlimerJS')
console.log(tools)

//removes an element from the beginning of an arrayslog
const shift=tools.shift()
console.log(tools)
console.log(shift)

//add element to beginning of an array
const unshift=tools.unshift('Selenoid')
console.log(tools)
console.log(unshift)

// sort elements
const sort=tools.sort()
console.log(tools)
console.log(sort)

//reverse element
const reverse=tools.reverse()
console.log(tools)
console.log(reverse)

//foe each loop
tools.forEach((value)=>{
if(value=='cypress'){
    console.log("cypress is ternding")
}else{
    console.log("element not found")
}

})




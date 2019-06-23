// Function Constructor
//  var prashant = {
//  	name: 'prashant',
//  	yearOfBirth: 1995,
//  	job: 'teacher'
//  };

//  var Person = function(name,yearOfBirth, job){
//  	this.name = name;
//  	this.yearOfBirth = yearOfBirth;
//  	this.job = job;
//  }

//  Person.prototype.calculateAge=  
//  	function(){
//  		console.log(2018-this.yearOfBirth);
//  	};

//  Person.prototype.lastName = 'Smith';

// var prashant = new Person('prashant',1995,'teacher');

// prashant.calculateAge();

// var jane = new Person('jane',1996,'designer');
// jane.calculateAge();
// var mark = new Person('mark',1994,'sales');
// mark.calculateAge();

// console.log(prashant.lastName);
// console.log(jane.lastName);


// Object.create
// var personProto ={
// 	calculateAge: function()
// 	{
// 		console.log(2018-this.yearOfBirth);
// 	}
// };

// var john = Object.create(personProto);
// john.name='John';
// john.yearOfBirth=1990;
// john.job='teacher';

// var jane = Object.create(personProto,{
// 	name: {value:'Jane'},
// 	yearOfBirth:{value:1996},
// 	job: {value:'designer'}
// });

// //Primitive vs Objects

// var a = 10;

// //primitives
// var b = a;
// a++;

// console.log(a);
// console.log(b);


// //object
// var obj1 = {
// 	name:'john',
// 	age:26
// };

// var obj2 = obj1; 

// obj1.age=30;
// console.log(obj1.age);
// console.log(obj2.age);

// //function
// var age = 20;
// var obj ={
// 	name:'prashant',
// 	city:'Kathmandu'
// };

// function change(a,b){
// 	a=30;
// 	b.city = 'Bhaktapur';
// }

// change(age,obj);
// console.log(age);
// console.log(obj.city);



//// Passing functions as arguements
//var years = [1990,1965,1935,2005,2000];

// function ageCalculate(arr,fn)
// {
// 	var finalAge=[];
// 	for(var i = 0; i<arr.length; i++)
// 	{
// 		finalAge.push(fn(arr[i]));
// 	}
// 	return finalAge;
// }

// function calculateAge(el)
// {
// 	return 2016-el;
// }

// var result = ageCalculate(years,calculateAge);
// console.log(result);

// var years = [1990,1965,1935,2005,2000];
// function arrayCalc(arr,fn)
// {
// 	var arrRes = [];
// 	for(var i = 0; i<arr.length; i++)
// 	{
// 		arrRes.push(fn(arr[i]));
// 	}
// 	return arrRes;
// }

// function calculateAge(year)
// {
// 	return 2018-year;
// }

// function isFullAge(el)
// {
// 	return el >= 18;
// }
// var ages = arrayCalc(years,calculateAge);
// console.log(ages);

// var fullAges = arrayCalc(ages,isFullAge);
// console.log(fullAges);



// function returning functions

// function interviewQuestion(job)
// {
// 	if(job === 'designer')
// 	{
// 		return function(name)
// 		{
// 			console.log(name + ' Please explain UI/UX.');
// 		}
// 	}
// 	else if(job === 'teacher')
// 	{
// 		return function(name)
// 		{
// 			console.log(name +' Which subject do you teach?');
// 		}
// 	}
// 	else
// 	{
// 		return function(name)
// 		{
// 			console.log('What are your interest?');
// 		}
// 	}
// }

// var teacherQuestion = interviewQuestion('teacher');

// teacherQuestion('prashant');

// function interviewQuestion(job)
// {
// 	if(job === 'teacher')
// 	{
// 		return function(name)
// 		{
// 			console.log(name + ' What is you teaching experience?');
// 		}
// 	}
// 	else
// 	{
// 		return function(name)
// 		{
// 			console.log(name + ' Are you berojgar?');
// 		}
// 	}
// }

// interviewQuestion()('prashant');




// Bind call and apply

// var john = {
// 	name: 'john',
// 	age: 26,
// 	job : 'teacher',
// 	presentation : function(style,timeOfDay)
// 	{
// 		if(style === 'formal'){
// 			console.log(this.name,this.age,timeOfDay);
// 		}
// 		else
// 		{
// 			console.log(this.name,this.age,timeOfDay);
// 		}
// 	}
// }


// var prashant = {
// 	name : 'prashant',
// 	age: 23,
// }

// john.presentation.call(prashant,'informal','night');
// john.presentation('formal','morning');

// // john.presentation.apply(prashant,['friendly','afternoon']);

// var  johnFriendly = john.presentation.bind(john, 'formal');
// johnFriendly('evening');

// var prashantFriendly = john.presentation.bind(prashant,'formal');
// prashantFriendly('mid-night');

// Passing functions as arguements
var years = [1990,1965,1935,2005,2000];

function ageCalculate(arr,fn)
{
	var finalAge=[];
	for(var i = 0; i<arr.length; i++)
	{
		finalAge.push(fn(arr[i]));
	}
	return finalAge;
}

function calculateAge(el)
{
	return 2016-el;
}

function isFullAge(limit,el)
{
	return el >= limit;
}

var ages = ageCalculate(years,calculateAge);
console.log(ages);

var fullAges = ageCalculate(ages,isFullAge.bind(this,16));
console.log(fullAges);

var fullJapan = ageCalculate(ages,isFullAge.bind(this, 20));
console.log(fullJapan);




















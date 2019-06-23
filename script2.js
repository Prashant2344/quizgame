// function Person(name,dob,job)
// {
// 	this.name = name;
// 	this.dob = dob;
// 	this.job = job;
// }

// Person.prototype.calcAge = function(dob)
// {
// 	return 2018-dob;
// }

// var prashant = new Person('prashant',23,'Software Developer');
// console.log(prashant);
// console.log(prashant.calcAge(1995));

// var personProto = {
// 	calcAge: function(dob){
// 		console.log(2018-this.dob);
// 	}
// };

// var prashant = Object.create(personProto,{
// 	name: {value:'prashant'},
// 	age:{value:26}
// });

// prashant.calcAge(1995);

// var age = 25;

// var obj = {
// 	name:'prashant',
// }

// function change(a,b)
// {
// 	a=20;
// 	b.name ='silapakr';
// }

// change(age,obj);

// console.log(age);
// console.log(obj.name);

// var years = [1990,1995,1998,2000,2002];
// function arrCalc(arr,fn)
// {
// 	var arrAge = [];
// 	for(var i = 0; i < arr.length; i++)
// 	{
// 		arrAge.push(fn(arr[i]));
// 	}
// 	return arrAge;
// }

// function calcAge(el){
// 	return 2019-el;
// }

// function calcEligibal(limit,el){
// 	return el>=limit;
// }

// var ages = arrCalc(years,calcAge);
// console.log(ages);

// var eligible = arrCalc(ages,calcEligibal.bind(this,20));
// console.log(eligible);

// function interviewQuestion(job)
// {
// 	return function(name)
// 	{
// 		if(job === 'developer')
// 		{
// 			console.log(name+' is developer');
// 		}
// 		else
// 		{
// 			console.log(name+' is berojgar');
// 		}
// 	}
// }

// var result = interviewQuestion('developer');
// var fianl = result('prashant');


// var beroj= interviewQuestion('developer')('ram');

// function retirement(retireAge)
// {
// 	return function(dob){
// 		var age = 2018-dob;
// 		console.log(age+' '+retireAge);
// 	}
// }


// var retirementNepal = retirement(60)(1995);

// var prashant = {
// 	name: 'prashant',
// 	message : function(style,time)
// 	{
// 		if(style === 'friendly')
// 		{
// 			console.log(time +' is friendly '+ this.name);
// 		}
// 		else
// 		{
// 			console.log(time +' is booring '+ this.name);
// 		}
// 	}
// };

// var john = {
// 	name: 'john',
// };

// var prashantFriendly = prashant.message.bind(prashant,'friendly');
// prashantFriendly('morning');

// var johnFriendly = prashant.message.bind(john,'formal');
// johnFriendly('night');
const name = 'GeonilJang',
	age = 28,
	gender = 'male',
	birth = '92';

const sayHi = (name, age, gender?) => {
	console.log(`Hello, ${name}, you are ${age}, ${gender}`);
};

sayHi(name, age);

export {};

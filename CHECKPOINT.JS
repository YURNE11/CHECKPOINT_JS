function minMax(arr) {
	min = arr[0];
	max = arr[0];
	for (var value of arr){
		if (value <min){min=value}
		if (value>max){max=value}
	}
		return [min,max];
}


//Equal number
function isSameNum(num1, num2) {
    num1 === num2 ? true : false;
}


//Filter string from numbers
function filterArray(arr) {
	var tab=[]
	for(var value of arr){
		if(typeof (value) === "number")
		{tab.push(value)}
	}
	return tab;
}


//Absolute SUM
function getAbsSum(arr){
    return arr.reduce((count, num) => count + Math.abs(num), 0)
}


//Number of True
function countTrue(arr) {
	resul = 0;
	for (var value of arr){
		if (value == true){
			resul +=1;
		}
	}
	return resul;
}


//Printer Level
function inkLevels(inks) {
	var tab= Object.values(inks);
	var min= tab[0];
	for (var value of tab){
		if(value<min)min=value;
	}
	return min;
}


//Keys values into array
function objectToArray(obj) {
	var tab=[];
	for (var value of Object.entries(obj)) tab.push(value);
	return tab
}


//People budgets
function getBudgets(arr) {
	sum=0;
	for (var value of arr) sum += value.budget;
return sum}


//Ageing the population
function afterNYears(names, n) {
	var obj={}
	for (var [key, value] of Object.entries(names)){
		obj [key] = value+Math.abs(n)}
	return obj
}


//Greeting
const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

function greeting(name) {
		if (GUEST_LIST[name]) {
			return "Hi! I'm "+name+", and I'm from "+GUEST_LIST[name]+"."
		}
		else{
			return "Hi! I'm a guest."
	}
}
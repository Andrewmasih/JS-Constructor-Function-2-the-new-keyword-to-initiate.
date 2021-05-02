

function Car(year, owner, manufacturer) {
	this.year = year;
	this.owner = owner;
	this.manufacturer = manufacturer;
	  this.speak = function () {
		  console.log (`vrooooooom!`);
	  };

}  


/*this is how to creat a 'new object' by using the "new" word and then intiate it, to creat an instance of it */
let mycar = new Car ("1965","me","bmw");

mycar.speak ();
mycar instanceof Car; /*this is to check 'myCar' is an instance of 'Car' object*/ 
console.log(mycar.year, mycar.owner, mycar.manufacturer);
/*we called the 'car' function and added 'values' to it.*/

mycar instanceof Car; /*use 'instanceof' to check if 'mycar' is the instance of 'Car' */
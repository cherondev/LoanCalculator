//Get from values from the user. We need to get the fizz vand the buzz values.
function getValues() {
	//Get user values from the page
	let fizzValue = document.getElementById("fizzValue").value;
	let buzzValue = document.getElementById("buzzValue").value;

	//Check for numbers (Parse into integer)
	fizzValue = parseInt(fizzValue);
	buzzValue = parseInt(buzzValue);

	//Check that the numbers are integers
	if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

		//Call fizzBuzz function
		let fbArray = fizzBuzz(fizzValue, buzzValue);
		//let fbArray = fizzBuzzSwitch(fizzValue, buzzValue);
		//let fbArray = fizzBuzzTernary(fizzValue, buzzValue);

		//Take return from fixxBuzz and call displayData function and write values to screen
		displayData(fbArray);
	} else {
		alert("You must enter an integer");
	}
}

//Generate numbers from fizzValue to the buzzValue
//Logic function(s)
function fizzBuzz(fizzValue, buzzValue) {
	//Initialize array
	let returnArray = [];

	//Loop from 1 to 100
	for (let i = 1; i <= 100; i++) {

		//check to see if divisible by both 3 and 5
		//check t see if divisible by fizz value 3
		//check t see if divisible by buzz value 5
		if (i % fizzValue == 0 && i % buzzValue == 0) {
			returnArray.push("FizzBuzz");
		} else if (i % fizzValue == 0) {
			returnArray.push("Fizz");
		} else if (i % buzzValue == 0) {
			returnArray.push("Buzz");
		} else {
			returnArray.push(i);
		}
	}
	//Return the array
	return returnArray;
}

function fizzBuzzSwitch(fizzValue, buzzValue) {

	let returnArray = [];
	let Fizz = false;
	let Buzz = false;

	for (let i = 1; i <= 100; i++) {
		
		Fizz = i % fizzValue == 0;
		Buzz = i % buzzValue == 0;
		
		switch(true)
		{
			case Fizz && Buzz:{
				returnArray.push("FizzBuzz");
				break;
			}
			case Fizz:{
				returnArray.push("Fizz");
				break;
			}
			case Buzz:{
				returnArray.push("Buzz");
				break;
			}
			default:{
				returnArray.push(i);
				break;
			}
		}
	}
	return returnArray;
}

function fizzBuzzTernary(fizzValue, buzzValue) {

	let returnArray = [];

	for (let i = 1; i <= 100; i++) {
		//A ternary operator evaluates true/false
		let value = ((i % fizzValue == 0 ? "Fizz" : "") + (i % buzzValue == 0 ? "Buzz" : "") || i);
		returnArray.push(value);
	}
	return returnArray;
}




//Display function
function displayData(fbArray) {

	//get the table body element from the page
	let tableBody = document.getElementById("results");

	//get the templage row
	let templateRow = document.getElementById("fbTemplate");

	//clear table first
	tableBody.innerHTML = "";

	for (let index = 0; index < fbArray.length; index += 5) {
		
		let tableRow = document.importNode(templateRow.content, true);

		//grab just the TDs and put them into an array
		let rowCols = tableRow.querySelectorAll("td");

		rowCols[0].classList.add(fbArray[index]);
		rowCols[0].textContent = fbArray[index];

		rowCols[1].classList.add(fbArray[index + 1]);
		rowCols[1].textContent = fbArray[index + 1];
		
		rowCols[2].classList.add(fbArray[index + 2]);
		rowCols[2].textContent = fbArray[index + 2];
		
		rowCols[3].classList.add(fbArray[index + 3]);
		rowCols[3].textContent = fbArray[index + 3];
		
		rowCols[4].classList.add(fbArray[index + 4]);
		rowCols[4].textContent = fbArray[index + 4];
		
		tableBody.appendChild(tableRow);
	}

	//loop over the array and create a tablerow for each item.
	//*************** The Traditional way to output the data ***************
	// let tableRows = "";
	
	// for (let i = 0; i < fbArray.length; i++) {
	// 	let fbValues = fbArray[i];
	// 	tableRows += `<tr><td>${fbValues}</td></tr>`;
	// }
	// document.getElementById("results").innerHTML = tableRows;
	
	//***************End the Traditional way to output the data ***************

}

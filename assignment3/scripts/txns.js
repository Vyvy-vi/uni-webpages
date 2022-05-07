// function to add currency symbol and commas
function currencyFormat(num) {
	return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

let currentBalance = 10000;
document.getElementById("currentBalance").value = currentBalance;

// document.getElementById("currentBalance").value = currencyFormat(currentBalance);

// add funds
const addFunds = document.getElementById("addFunds");
addFunds.addEventListener("click", addFundsHandler);

function addFundsHandler() {
	//
	let addFundsField = document.getElementById("addFundsField").value;
	let updateFundsField = parseFloat(addFundsField);
	if (confirm(`Are you sure that you want to add ${updateFundsField}$ to your balance?`) !== true)
		return;
	calculate(updateFundsField);
}

// WITHDRAW funds
/*
document.querySelector("#withdrawSubmit").addEventListener("click", withdrawFundsHandler);

function withdrawFundsHandler() {
	let withdrawInput = document.querySelector("#withdrawInput").value;
	let updateFundsField = parseFloat(withdrawInput);
	// calculate(0 - updateFundsField)
	calculate(0 - updateFundsField);
}
*/

// SUBMIT TRANSACTIONS
// document.querySelector('.submitNewExpense').addEventListener('click', yourFunction)
const buttonSubmit = document.getElementById("submitNewExpense");

buttonSubmit.addEventListener("click", submitTransaction);

function submitTransaction() {
	getValues();
	console.log("calling SubmitTransaction function");
}
function getValues() {
	const value = document.getElementById("cost").value;
	const type = document.getElementById("type").value;
	const newExpense = document.getElementById("newExpense").value;
	console.log("data:", value, type, newExpense);

	// rendering the values in the page
	const transactionsContainer = document.getElementById("transactions-container");
	const dataRow = document.createElement("div");
	dataRow.classList.add("eachTransaction");

	const div1 = document.createElement("div");
	const div2 = document.createElement("div");
	const div3 = document.createElement("div");

	//
	const newContent3 = document.createTextNode(currencyFormat(Number(value)));
	const newContent1 = document.createTextNode(newExpense);
	const newContent2 = document.createTextNode(type);

	div1.appendChild(newContent1);
	div2.appendChild(newContent2);
	div3.appendChild(newContent3);

	// 3 seperate calls - can't append all the
	// elements at once
	dataRow.appendChild(div1);
	dataRow.appendChild(div2);
	dataRow.appendChild(div3);

	console.log("dataRow", dataRow);

	transactionsContainer.appendChild(dataRow);

	// substraction or addition
	calculate(0 - value);
}
function calculate(value) {
	// convert to number
	newBalance = Number(document.getElementById("currentBalance").value) + Number(value);
	console.log(typeof newBalance, newBalance);
	// A quick note for below: Don't forget to use the formatter function again :)
	document.getElementById("currentBalance").value = newBalance;
}

// confirm when trying to leave
window.onbeforeunload = function () {
	return "Are you sure you want to navigate away? All your progress will be lost...";
};

// Set elements which are going to update and change based on information provided in the application

// Top Section Elements

const balance1 = document.querySelector('.balanace .value');
const incomeTotal1 = document.querySelector('.income-total');
const outcomeTital1 = document.querySelector('.outcome-total');
const chart1 = document.querySelector('.chart');

// Bottom Section Elements
// Tab buttons
const expenseBtn = document.querySelector('.tab1');
const incomeBtn = document.querySelector('.tab2');
const allBtn = document.querySelector('.tab3');
// Tab contents
const expense1 = document.querySelector('#expense');
const income1 = document.querySelector('#income');
const all1 = document.querySelector('#all');
// Tab lists
const incomeList = document.querySelector('#income .list');
const expenseList = document.querySelector('#expense .list');
const allList = document.querySelector('#all .list');
// Expenses Inputs
const addExpense = document.querySelector('.add-expense');
const expenseTitle = document.quaerySelector('expense-title-input');
const expenseAmount = document.querySelector('expense-amount-input');
// Income Inputs
const addIncome = document.querySelector('add-income');
const incomeTitle = document.querySelector('income-title-input');
const incomeAmount = document.querySelector('income-amount-input');

// Event Listener to listen for click on the tabs. 
// For the expenses tab, we need to show the expenses tab and list, and hide tab and lists of income and all. 
// The event listeners functions will do this for us.
// We will do the same for the Income Tab and the All Tab also.
// We will then use functions further down the 
// Expenses Tab
expenseBtn.addEventListener('click', function(){
  active(expenseBtn);
  inactive([incomeBtn, allBtn]);
  show(expenseList);
  hide([incomeList, allList]);
});
// Income Tab
incomeBtn.addEventListener('click', function(){
  active(incomeBtn);
  inactive([expenseBtn, allBtn])
  show(incomeList);
  hide([expenseList, allList]);
});
// All Tab
allBtn.addEventListener('click', function(){
  active(allBtn);
  inactive([incomeBtn, expenseBtn])
  show(allList);
  hide([incomeList, expenseList]);
});

// Adding an entry into the budget calculator

// Create an array variable for submitting entries into the list
let ENTRY_LIST = [];

// Income
// First we need to check if either the title or income amount are empty, and if so, do not execute the code:
if(!incomeTitle.value || !incomeAmount.value) return;
addIncome.addEventListener('click', function() {
  // We start by creating an array of the income title and value
  let income = {
    type : 'income',
    title : incomeTitle.value,
    // if we grab the value of the incomeAmount, it will be a string, not a number. So we parseFloat it.
    amount : parseFloat(incomeAmount.value),
  }
  // We then push this into the list which we will call ENTRY_LIST
  // Now 
  ENTRY_LIST.push(income);
  updateUI();
  clearInput([incomeTitle, incomeAmount]);
});

// Expense
// First we need to check if either the title or expense amount are empty, and if so, do not execute the code:
if(!expenseTitle.value || !expenseAmount.value) return;
addExpense.addEventListener('click', function() {
  // We start by creating an array of the income title and value
  let expense = {
    type : 'expense',
    title : expenseTitle.value,
    // if we grab the value of the incomeAmount, it will be a string, not a number. So we parseFloat it.
    amount : parseFloat(expenseAmount.value),
  }
  // We then push this into the list which we will call ENTRY_LIST
  // Now 
  ENTRY_LIST.push(expense);
  updateUI();
  clearInput([expenseTitle, expenseAmount]);
});

// Calculating the balance of the income and expenses
// Each object in the Entry_List array has the type of either income or expense. 
function calculateTotal(type, Entry_List){

  // Loop over the entries, one by one, to check if the entry type 
  ENTRY_LIST.forEach(entry => {
    if(entry.type == type){
      sum =+ entry.amount;
    }
  });

  return sum;
}

income = calculateTotal('income', ENTRY_LIST);
outcome = calculateTotal('outcome', ENTRY_LIST);

// Function to add active status to an element in the html by adding the class 'active' which is in the CSS
function active(element){
  element.classList.add('active');
}
// Function to show elements in the html that are hidden by removing the class 'hide' which is in the css
function show(element){
  element.classList.remove('hide');
}

// Function to hide elements in the html. 
// Because there are two elements which are in an array, we can use a loop to identify both of them to add the class 'hide' in the css like so:
  // function hide(elementsArray){
  //   for(let i = 0; i < elementsArray.length; i++){
  //     elementsArray[i].classList.add('hide');
  //   }
  // }
// However it is better to use the following function which will add the elements forEach elements in the Array
function hide(elementsArray){
  elementsArray.array.forEach(element => {
  element.classList.add('hide');
});
}

// Similarly, we will use the same function to remove the 'active' status from elements in the Array
function inactive(elementsArray){
elementsArray.array.forEach( element => {
  element.classList.remove('active');
});
}



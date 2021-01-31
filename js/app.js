'use strict';

let cookieTable = document.getElementById('cookie-table');
let tableHeader = document.getElementById('table-header');
let tableFooter = document.getElementById('table-footer');

const allStores = [];
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function CookieStore(name, minCustomer, maxCustomer, avgCookieBought){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieBought = avgCookieBought;
  this.cookieSoldArray = [];
  this.totalCookies = 0;
  allStores.push(this);
}

CookieStore.prototype.customerPerHour = function () {
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
};

CookieStore.prototype.cookiesPerHour = function (){
  for (let i = 0; i < hours.length; i++){
    this.cookieSoldArray.push(Math.ceil(this.customerPerHour() * this.avgCookieBought));
    this.totalCookies = this.totalCookies + this.cookieSoldArray[i];
  }
};

CookieStore.prototype.render = function() {
  this.cookiesPerHour();
  let tr = document.createElement('tr');
  cookieTable.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);
  for (let i = 0; i < this.cookieSoldArray.length; i++){
    let td = document.createElement('td');
    td.textContent = this.cookieSoldArray[i];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = this.totalCookies;
  tr.appendChild(td);
};

function renderHeader(){
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = '';
  tr.appendChild(th);
  for (let i = 0; i < hours.length; i++){
    let td = document.createElement('td');
    td.textContent = hours[i];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = 'Daily Store Totals';
  tr.appendChild(td);
  tableHeader.appendChild(tr);
}


// TA Bryant helped build out this function as part of the stretch goal
function getGrandtotals(){
  const grandTotals = new Array(hours.length + 1);
  grandTotals.fill(0);
  for (let i = 0; i < allStores.length; i++){
  // console.log(allStores[i]);
    for (let j = 0; j < allStores[i].cookieSoldArray.length; j++){
      grandTotals[j] += allStores[i].cookieSoldArray[j];
      grandTotals[grandTotals.length - 1] += allStores[i].cookieSoldArray[j];
    // console.log(allStores[i].cookieSoldArray[j]);
    // console.log(grandTotals);
    }
  }
  return grandTotals;
}

function renderFooter(){
  let grandTotals = getGrandtotals();
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = 'Totals';
  tr.appendChild(th);
  for (let i = 0; i < grandTotals.length; i++){
    let td = document.createElement('td');
    td.textContent = grandTotals[i];
    tr.appendChild(td);
  }
  tableFooter.appendChild(tr);
}

new CookieStore('Seattle', 23, 65, 6.3);
new CookieStore('Tokyo', 3, 24, 1.2);
new CookieStore('Dubai', 11, 38, 3.7);
new CookieStore('Paris', 20, 38, 2.3);
new CookieStore('Lima', 2, 16, 4.6);

function renderAll(){
  for (let i = 0; i < allStores.length; i++){
    allStores[i].render();
  }
}

renderAll();
renderHeader();
renderFooter();

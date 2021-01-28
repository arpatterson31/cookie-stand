'use strict';

// get each store element by id.

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattleList = document.getElementById('seattle');

let seattleStore = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieBought: 6.3,
  // a method to calculate random number of customers per hour
  customerPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  // a method to calculate and populate our number of cookies sold per hour array
  cookieSoldArray: [], // added array to use in render
  totalCookies: 0, // do math to add the cookie array total
  cookiesPerHour: function (){
    for (let i = 0; i < hours.length; i++){
      this.cookieSoldArray.push(Math.ceil(this.customerPerHour() * this.avgCookieBought)); // math.ceil rounds up so it corrected the NaN error I was seeing
    }
  },
  // a method to render list items
  render: function() {
    this.cookiesPerHour(); // had to call method within this method to tell li.textcontent what to enter
    for (let i = 0; i < this.cookieSoldArray.length; i++){
      // create element
      let li = document.createElement('li');
      // give it content
      li.textContent = `${hours[i]}: ${(this.cookieSoldArray[i])} cookies`;
      // add it
      seattleList.appendChild(li);
    }
  },
};

seattleStore.render();
// console.log(seattleStore.customerPerHour());
// console.log(seattleStore.cookiesPerHour());
// console.log(seattleStore.cookieArray);
// console.log(seattleStore.render());

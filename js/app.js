'use strict';

// get each store element by id.

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  // a method to calculate random number of customers per hour
  customerPerHour: function () {
    for (let i = 0; i < hours.length; i++){
      return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    }
  },
  // a method to calculate and populate our number of cookies sold per hour array
  cookieArray: [],
  cookiesPerHour: function (){
    for (let j = 0; j <)
    this.customerPerHour * this.avgCookie;
  },
  // a method to render list items
  render: function() {
    for (let i = 0; i < seattle.)
  }
};

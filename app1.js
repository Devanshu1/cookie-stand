'use strict';

function Shop(location, minCust, maxCust, avgCookieSale) {

    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.cookiesSoldHour = [];
    this.avgCookieSale = avgCookieSale;
    this.total = 0;
    this.getRandomNumber();
    this.transfer();
    

}
 

Shop.prototype.getRandomNumber = function () {
    for (var i = 0; i < 14; i++) {
        var number = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
        var totalCookies = Math.floor(this.avgCookieSale * number);
        this.cookiesSoldHour.push(totalCookies);
    }
};

Shop.prototype.totalNumber = function () {
    for (var i = 0; i < 14; i++) {
        this.total += this.cookiesSoldHour[i];
    }
    return;

};


Shop.prototype.transfer = function () {
    var mainVariable = document.getElementById('main');
    console.log(mainVariable);
    var trOne = document.createElement('tr');
    trOne.innerHTML = this.location;
    mainVariable.appendChild(trOne);

    
    var ampm = 'am';
    trOne.innerText = this.location;7
    for (var i = 0; i < 14; i++) {
        
        var tdOne = document.createElement('td');

        tdOne.innerText = this.cookiesSoldHour[i] + " cookies";
        trOne.appendChild(tdOne);
         }

    mainVariable.appendChild(trOne);

};

var pdx = new Shop ( 'PDX Airport', 23, 65, 6.3);
var pioneerSquare = new Shop ('Pioneer Square', 3, 24, 1.2);
var powells = new Shop ('Powell\'s', 11, 38, 3.7);
var stjohns = new Shop ('St John\'s', 20, 38, 2.3);
var waterfront = new Shop ('Waterfront', 2, 16, 4.6);
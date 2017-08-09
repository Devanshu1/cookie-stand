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
    var ulVariable = document.createElement('tr');
    ulVariable.innerHTML = this.location;
    mainVariable.appendChild(ulVariable);

    //var time = 6;
    var ampm = 'am';
    ulVariable.innerText = this.location;
    for (var i = 0; i < 14; i++) {
        //if (time)
        var liVariable = document.createElement('td');

        liVariable.innerText = this.cookiesSoldHour[i] + " cookies";
        ulVariable.appendChild(liVariable);
        //time++;

    }

    mainVariable.appendChild(ulVariable);

};

var pdx = new Shop ( 'PDX Airport', 23, 65, 6.3);
var pioneerSquare = new Shop ('Pioneer Square', 3, 24, 1.2);
var powells = new Shop ('Powell\'s', 11, 38, 3.7);
var stjohns = new Shop ('St John\'s', 20, 38, 2.3);
var waterfront = new Shop ('Waterfront', 2, 16, 4.6);

// pdx.getRandomNumber()
// pioneerSquare.getRandomNumber()
// powells.getRandomNumber()
// stjohns.getRandomNumber()
// waterfront.getRandomNumber()
// pdx.transfer()
// pioneerSquare.transfer()
// powells.transfer()
// stjohns.transfer()
// waterfront.transfer()
// Shop.getRandomNumber();
// Shop.transfer();
// Shop.totalNumber();


// var ShopTwo = {
//     location: 'Pioneer Square',
//     minCust: 3,
//     maxCust: 24,
//     avgCookieSale: 1.2,
//     cookiesSoldHour: [14],
//     total: 0, 

//     getRandomNumber: function () {
//         for (var i = 0; i < 14; i++) {
//             var number = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//             var totalCookies = Math.floor(this.avgCookieSale * number );
//             this.cookiesSoldHour.push(totalCookies);
//             }
//     },

//     getRandomNumber: function () {
//         for (var i = 0; i < 14; i++) {
//             var number = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//             var totalCookies = Math.floor(this.avgCookieSale * number );
//             this.cookiesSoldHour.push(totalCookies);
//             }
//     },


//     transfer: function() {
//         var mainVariable = document.getElementById('main');
//         var ulVariable = document.createElement('ul');
//         var time=6;
//         var ampm='am';
//         ulVariable.innerText=this.location;
//         for (var i = 0; i < 14; i++){
//             if (time )
//             var liVariable = document.createElement('ul');

//             liVariable.innerText =time + " :" + this.cookiesSoldHour[i] +" cookies";
//             ulVariable.appendChild(liVariable);
//             time++;

//         }
//         mainVariable.appendChild(ulVariable);
//     }  

// }

//     ShopTwo.getRandomNumber();
//     ShopTwo.transfer();






// var ShopThree = {

//     location: 'Powell\'s',
//     minCust: 11,
//     maxCust: 38,
//     avgCookieSale: 3.7,
//     cookiesSoldHour: [14],
//     total: 0,


// getRandomNumber: function () {
//         for (var i = 0; i < 14; i++) {
//             var number = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//             var totalCookies = Math.floor(this.avgCookieSale * number );
//             this.cookiesSoldHour.push(totalCookies);
//             }
//     },


//     transfer: function() {
//         var mainVariable = document.getElementById('main');
//         var ulVariable = document.createElement('ul');
//         var time=6;
//         var ampm='am';
//         ulVariable.innerText=this.location;
//         for (var i = 0; i < 14; i++){
//             if (time )
//             var liVariable = document.createElement('ul');

//             liVariable.innerText =time + " :" + this.cookiesSoldHour[i] +" cookies";
//             ulVariable.appendChild(liVariable);
//             time++;

//         }
//         mainVariable.appendChild(ulVariable);
//     }  

// }

//     ShopThree.getRandomNumber();
//     ShopThree.transfer();





//         var ShopFour = {

//             location: 'St. John\'s',
//             minCust: 20,
//             maxCust: 38,
//             avgCookieSale: 2.3,
//             cookiesSoldHour: [14],
//             total: 0,

//             getRandomNumber: function () {
//         for (var i = 0; i < 14; i++) {
//             var number = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//             var totalCookies = Math.floor(this.avgCookieSale * number );
//             this.cookiesSoldHour.push(totalCookies);
//             }
//     },


//     transfer: function() {
//         var mainVariable = document.getElementById('main');
//         var ulVariable = document.createElement('ul');
//         var time=6;
//         var ampm='am';
//         ulVariable.innerText=this.location;
//         for (var i = 0; i < 14; i++){
//             if (time )
//             var liVariable = document.createElement('ul');

//             liVariable.innerText =time + " :" + this.cookiesSoldHour[i] +" cookies";
//             ulVariable.appendChild(liVariable);
//             time++;

//         }
//         mainVariable.appendChild(ulVariable);
//     }  

// }

//     ShopFour.getRandomNumber();
//     ShopFour.transfer();

//                 var ShopFive = {

//                     location: 'Waterfront',
//                     minCust: 2,
//                     maxCust: 16,
//                     avgCookieSale: 4.6,
//                     cookiesSoldHour: [14],
//                     total: 0,


//                   getRandomNumber: function () {
//         for (var i = 0; i < 14; i++) {
//             var number = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//             var totalCookies = Math.floor(this.avgCookieSale * number );
//             this.cookiesSoldHour.push(totalCookies);
//             }
//     },


//     transfer: function() {
//         var mainVariable = document.getElementById('main');
//         var ulVariable = document.createElement('ul');
//         var time=6;
//         var ampm='am';
//         ulVariable.innerText=this.location;
//         for (var i = 0; i < 14; i++){
//             if (time )
//             var liVariable = document.createElement('ul');

//             liVariable.innerText =time + " :" + this.cookiesSoldHour[i] +" cookies";
//             ulVariable.appendChild(liVariable);
//             time++;

//         }
//         mainVariable.appendChild(ulVariable);
//     }  

// }

//     ShopFive.getRandomNumber();
//     ShopFive.transfer(); 

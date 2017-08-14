'use strict';
var shopOne = {

    location: 'PDX Airport',
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    cookiesSoldHour: [],
    total: 0, 
    getRandomNumber: function () {
        for (var i = 0; i < 14; i++) {
            var number = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
            var totalCookies = Math.floor(this.avgCookieSale * number );
            this.cookiesSoldHour.push(totalCookies);
            }
         },

    totalNumber: function() {
        for (var i = 0; i < 14; i++) {
             this.total+=cookiesSoldHour[i];
             }
             return total;
        },
    transfer: function() {
        var mainVariable = document.getElementById('main');
        var ulVariable = document.createElement('ul');
        for (var i = 0; i < 14; i++);
        var liVariable = document.createElement('ul');
        liVariable.innerText = cookiesSoldHour[i];
        ulVariable.appendChild(liVariable)

        mainVariable.appendChild(ulVariable);
    }
    }


// var shopTwo = {
//     location: 'Pioneer Square',
//     minCust: 3,
//     maxCust: 24,
//     avgCookieSale: 1.2,

//     getRandomNumber: function () {
//         var array = [];
//         for (var i = 0; i < 14; i++) {
//             var number = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//             array.push(number);
//         }
//         return array;
//     },
// }

// var shopThree = {

//     location: 'Powell\'s',
//     minCust: 11,
//     maxCust: 38,
//     avgCookieSale: 3.7,

//     getRandomNumber: function () {
//         var array = [];
//         for (var i = 0; i < 14; i++) {
//             var number = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//             array.push(number);

//         }
//         return array;
//         }
//     }
//         var shopFour = {

//             location: 'St. John\'s',
//             minCust: 20,
//             maxCust: 38,
//             avgCookieSale: 2.3,

//             getRandomNumber: function () {
//                 var array = [];
//                 for (var i = 0; i < 14; i++) {
//                     var number = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//                     array.push(number);

//                 }
//              return array;
//             }

//         }

//                 var shopFive = {

//                     location: 'Waterfront',
//                     minCust: 2,
//                     maxCust: 16,
//                     avgCookieSale: 4.6,

//                     getRandomNumber: function () {
//                         var array = [];
//                         for (var i = 0; i < 14; i++) {
//                             var number = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//                             array.push(number);

//                         }
//                         return array;
//                     }
//                 }
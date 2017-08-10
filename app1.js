'use strict';

function Shop (location, minCust, maxCust, avgCookieSale) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.cookiesSoldHour = [];
    this.avgCookieSale = avgCookieSale;
    this.total = 0;
    this.getRandomNumber();
    this.render();
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
};

Shop.prototype.render = function () {
    var tBody = document.getElementById('main');
    console.log(tBody);
    var trOne = document.createElement('tr');
    var locationTh = document.createElement('th');
    
    locationTh.innerHTML = this.location;
    trOne.appendChild(locationTh);
    tBody.appendChild(trOne);

    for (var i = 0; i < 14; i++) {
        var tdOne = document.createElement('td');

        tdOne.innerText = this.cookiesSoldHour[i] + " cookies";
        trOne.appendChild(tdOne);
    }

    // TODO render total daily cookies of store
    /*
        get the daily total cookies by calling this.totalNumber();
        append another <td> to <tr> with this.total
    */    
};

var pdx = new Shop ( 'PDX Airport', 23, 65, 6.3);
var pioneerSquare = new Shop ('Pioneer Square', 3, 24, 1.2);
var powells = new Shop ('Powell\'s', 11, 38, 3.7);
var stjohns = new Shop ('St John\'s', 20, 38, 2.3);
var waterfront = new Shop ('Waterfront', 2, 16, 4.6);

var allShops = [ pdx, pioneerSquare, powells, stjohns, waterfront ];
renderHourlyTotals();

function renderHourlyTotals () {
    /*

        loop over columns - 
        get total per column
        give the total

    */

    var tbody = document.getElementById( 'main' );
    var hourlyTotalsRow = document.createElement( 'tr' );

    var hourlyHeader = document.createElement( 'th' );
    hourlyHeader.innerText = 'Hourly Totals';
    hourlyTotalsRow.appendChild( hourlyHeader );

    for ( var i = 0; i < 14; i ++ ) { // loop over hours / columns
        var newCell = document.createElement( 'td' );

        var colTotal = 0;
        for ( var j = 0; j < allShops.length; j ++ ) { // loop over shop instances
            console.log( 'what shop iteration: ' +  allShops[j].location );
            console.log( 'that shop\'s cookie # at hour ' + 
                            i + ': ' + allShops[j].cookiesSoldHour[i] );
            colTotal += allShops[j].cookiesSoldHour[i];
        }

        console.log( '-------------------------------------' );
        newCell.innerText = colTotal;
        hourlyTotalsRow.appendChild( newCell );
    }

    tbody.appendChild( hourlyTotalsRow );
}
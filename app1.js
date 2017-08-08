'use strict';

var shopOne = {

    location: 'PDX Airport',
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    cookiesSoldHour: [14],
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
             this.total+=this.cookiesSoldHour[i];
             }
             return ;
        },
    transfer: function() {
        var mainVariable = document.getElementById('main');
        var ulVariable = document.createElement('ul');
        var time=6;
        var ampm='am';
        ulVariable.innerText=this.location;
        for (var i = 0; i < 14; i++){
            if (time )
            var liVariable = document.createElement('ul');

            liVariable.innerText =time + " :" + this.cookiesSoldHour[i] +" cookies";
            ulVariable.appendChild(liVariable);
            time++;
            
        }
        mainVariable.appendChild(ulVariable);
        
    }
 }; 
shopOne.getRandomNumber();
shopOne.transfer();
shopOne.totalNumber();


var shopTwo = {
    location: 'Pioneer Square',
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 1.2,
    cookiesSoldHour: [14],
    total: 0, 
    
    getRandomNumber: function () {
        for (var i = 0; i < 14; i++) {
            var number = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
            var totalCookies = Math.floor(this.avgCookieSale * number );
            this.cookiesSoldHour.push(totalCookies);
            }
    },
    
    getRandomNumber: function () {
        for (var i = 0; i < 14; i++) {
            var number = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
            var totalCookies = Math.floor(this.avgCookieSale * number );
            this.cookiesSoldHour.push(totalCookies);
            }
    },
    
    
    transfer: function() {
        var mainVariable = document.getElementById('main');
        var ulVariable = document.createElement('ul');
        var time=6;
        var ampm='am';
        ulVariable.innerText=this.location;
        for (var i = 0; i < 14; i++){
            if (time )
            var liVariable = document.createElement('ul');

            liVariable.innerText =time + " :" + this.cookiesSoldHour[i] +" cookies";
            ulVariable.appendChild(liVariable);
            time++;
            
        }
        mainVariable.appendChild(ulVariable);
    }  

}

    shopTwo.getRandomNumber();
    shopTwo.transfer();

    
    



var shopThree = {

    location: 'Powell\'s',
    minCust: 11,
    maxCust: 38,
    avgCookieSale: 3.7,
    cookiesSoldHour: [14],
    total: 0,

    
getRandomNumber: function () {
        for (var i = 0; i < 14; i++) {
            var number = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
            var totalCookies = Math.floor(this.avgCookieSale * number );
            this.cookiesSoldHour.push(totalCookies);
            }
    },
    
    
    transfer: function() {
        var mainVariable = document.getElementById('main');
        var ulVariable = document.createElement('ul');
        var time=6;
        var ampm='am';
        ulVariable.innerText=this.location;
        for (var i = 0; i < 14; i++){
            if (time )
            var liVariable = document.createElement('ul');

            liVariable.innerText =time + " :" + this.cookiesSoldHour[i] +" cookies";
            ulVariable.appendChild(liVariable);
            time++;
            
        }
        mainVariable.appendChild(ulVariable);
    }  

}

    shopThree.getRandomNumber();
    shopThree.transfer();

        
    
        
    
        var shopFour = {

            location: 'St. John\'s',
            minCust: 20,
            maxCust: 38,
            avgCookieSale: 2.3,
            cookiesSoldHour: [14],
            total: 0,

            getRandomNumber: function () {
        for (var i = 0; i < 14; i++) {
            var number = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
            var totalCookies = Math.floor(this.avgCookieSale * number );
            this.cookiesSoldHour.push(totalCookies);
            }
    },
    
    
    transfer: function() {
        var mainVariable = document.getElementById('main');
        var ulVariable = document.createElement('ul');
        var time=6;
        var ampm='am';
        ulVariable.innerText=this.location;
        for (var i = 0; i < 14; i++){
            if (time )
            var liVariable = document.createElement('ul');

            liVariable.innerText =time + " :" + this.cookiesSoldHour[i] +" cookies";
            ulVariable.appendChild(liVariable);
            time++;
            
        }
        mainVariable.appendChild(ulVariable);
    }  

}

    shopFour.getRandomNumber();
    shopFour.transfer();

                var shopFive = {

                    location: 'Waterfront',
                    minCust: 2,
                    maxCust: 16,
                    avgCookieSale: 4.6,
                    cookiesSoldHour: [14],
                    total: 0,
                    

                  getRandomNumber: function () {
        for (var i = 0; i < 14; i++) {
            var number = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
            var totalCookies = Math.floor(this.avgCookieSale * number );
            this.cookiesSoldHour.push(totalCookies);
            }
    },
    
    
    transfer: function() {
        var mainVariable = document.getElementById('main');
        var ulVariable = document.createElement('ul');
        var time=6;
        var ampm='am';
        ulVariable.innerText=this.location;
        for (var i = 0; i < 14; i++){
            if (time )
            var liVariable = document.createElement('ul');

            liVariable.innerText =time + " :" + this.cookiesSoldHour[i] +" cookies";
            ulVariable.appendChild(liVariable);
            time++;
            
        }
        mainVariable.appendChild(ulVariable);
    }  

}

    shopFive.getRandomNumber();
    shopFive.transfer(); 
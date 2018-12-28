//Alert Box
//alert('Welcome to JS');

// confirm Box

//confirm('Good Morning JS')
//console log
console.log('Good Morning');

//Display date on the console
var date=new Date().toLocaleDateString();
console.log(date);




// Display date on the web page using DOM
document.write(date);
document.querySelector('#display').textContent=date;
//Display Current Time
var time=new Date().toLocaleTimeString();
document.querySelector('#display').textContent=time;
// Digital clock
function digitalclock() {
    var time =new Date().toLocaleTimeString();
    document.querySelector('#time').textContent=time;
}
setInterval(digitalclock, 1000);
//class notes
//
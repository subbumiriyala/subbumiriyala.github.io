//Alert Box
//alert('Welcome to JS');
// confirm Box
//confirm('Good Morning JS');
//console log
console.log('good morning javascript');
//Display date on the console
var date = new Date().toLocaleDateString();
console.log(date);
// Display date on the web page using DOM
document.querySelector('#display').textContent = date;
//dispaly corrent time
var time = new Date().toLocaleDateString();
document.querySelector('#display').textContent = time;
//digital clock
function digitalclock(){
    var time = new Date().toLocaleDateString();
    document.querySelector('#time').textContent = time;
}
setInterval(digitalclock, 1000); 
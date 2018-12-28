//Block scoping
{
    var i = 10;
}
console.log(i);
// Block scoping for FOR loop
for(var k=0;k<=10;k++){

}
console.log(k);
//Block scoping for if Block
if(true){
    var z=20;
}
console.log(z);
// Function Scoping
function xxx(){
    //var i=30;
    console.log(i);
}
xxx()
console.log(i);
// IIFE example
(function()
{
    var z=30;
    console.log(z);
})();

// Read and Write Operations for variables


// Implications of Read and Write Operations


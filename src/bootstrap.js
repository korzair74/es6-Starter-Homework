var nums = ['100','300','400','60','40'];
var total = 0;    
function myAdderFor() {
  for(var i=0; i < nums.length; i++){
    total = total + Number(nums[i]);
}
console.log(total);
}

myAdderFor(nums)

function myAdderWhile() {
    var i=0; i < nums.length; 
    i++; {
      debugger;
      total = total + Number(nums[i]);
    }
    console.log(total);
  }
  
myAdderWhile(nums)
function addUpToFirst(n) {
        
  let total = 0;
  
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  
  return total;
}
// end addUpToFirst

function addUpToSecond(n) {
  return n * (n + 1) / 2;
}
// end addUpToSecond

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
// end printAllPairs

function sum(nums) {
        
  let total = 0;
  
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  
  return total;
}
// end sum

function double(nums) {
        
  let doubledNums = [];

  for (let i = 0; i < nums.length; i++) {
    doubledNums.push(2 * nums[i]);
  }
  
  return doubledNums;
}
// end double

function allEven(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      return false;
    }
  }
  return true;
}
// end allEven
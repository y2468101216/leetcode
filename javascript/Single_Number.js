/**
 * Given an array of integers, every element appears twice except for one. 
 * Find that single one.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	 if(nums.length==1){ return nums[0]; }
	    nums = nums.sort(function(val1, val2) {
	        return val1>val2?1:val1<val2?-1:0;
	    });
	    console.log(nums);
	    for(var i=0;i<nums.length;++i){
	        if(nums[i]!=nums[i-1]&&nums[i]!=nums[i+1]){ return nums[i]; }  // Find the single one
	    }
};

console.log(singleNumber([-2,0,-2]));
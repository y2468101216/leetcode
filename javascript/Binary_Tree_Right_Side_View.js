/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
     
 }

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
	var resultArray = [];
	var CountTreeNode = function(TreeNode){
		resultArray.push(TreeNode.val);
		if(TreeNode.right == null){
			return resultArray;
		}else{
			CountTreeNode(TreeNode.right)
		}
	}
	CountTreeNode(root)
	return resultArray;  
};

var tree = new TreeNode(1);
tree.right = new TreeNode(2);
tree.right.right = new TreeNode(3);
console.log(rightSideView(tree));
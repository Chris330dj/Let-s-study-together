var MinStack = function(){
    this.stack = [];
    this.min_stack = [Infinity];
};

/**
 * @param {number}
 * @return {void}
 */
MinStack.prototype.push = function(x){
    this.stack.push(x);
    this.min_stack.push(Math.min(x, this.min_stack[this.min_stack.length-1]));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function(){
    this.stack.pop();
    this.min_stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function(){
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function(){
    return this.min_stack[this.min_stack.length - 1];
};

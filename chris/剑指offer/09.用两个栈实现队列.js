var CQueue = function(){
    this.stackA = new Array(0);
    this.stackB = new Array(0);
};

/**
 * @param {number} value 
 * @return {void}
 */
CQueue.prototype.appendTail = function(value){
    this.stackA.push(value)
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function(){
    if(this.stackB.length) {
        return this.stackB.pop();
    }else{
        while(this.stackA.length){
            this.stackB.push(this.stackA.pop());
        }
        if(!this.stackB.length){
            return -1;
        }else {
            return this.stackB.pop();
        }
    }
}
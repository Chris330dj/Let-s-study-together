/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
    return s.split(' ').join('%20');
};

console.log(replaceSpace("We are happy."));

const transpose = function(matrix) {
    // set our variable
    //for... of to iterate through the number
    let newRowArray = [];
    let newColArray = [];
    let noOfRow  = matrix[0].length;
    
    for (let col = 0; col < noOfRow; col++) {
      for (const row of matrix) {
        newRowArray.push(row[col]);
      }
      newColArray.push(newRowArray);
      newRowArray = [];
    }
    return newColArray;
};

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        } 
    }
    return false;
}

module.exports = wordSearch;
module.exports = transpose;
    

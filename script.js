const findSum = function(array) {
    // your code here - don't forget to return a number!
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
        // sum = [i] + numbers[i]
    }
    var sum = array.reduce((sums, numbers) => {
        return sums + numbers
    },0)
    };
    findSum([2,4,6]) //done
    
    const findFrequency = function(array) {
    // your code here - don't forget to return an object!
    let count = {};
    let maxCount = 0;
    let maxItem = "";
    
    for (let i = 0; i < array.length; i++) {
      let item = array[i];
      //if item in the array exist increment
      if (count[item]) {
        count[item]++;
      } //add 1 if item doesnt exist just yet
      else {
        count[item] = 1;
      }
      // if 0 is less the most frequent item
      if (maxCount < count[item]) {
        //store freq item inside maxCount
        maxCount = count[item];
        maxItem = item;
      }
    }
    
    let minCounts = {}
    let minCount = Infinity;
    let minItem = ''
    
    //finding min
    for (let j = 0; j < array.length; j++) {
      let item = array[j];
      //if item in the array exist increment
      if (minCounts[item]) {
        minCounts[item]++;
      } //add 1 if item doesnt exist just yet
      else {
        minCounts[item] = 1;
      }
      // if 0 is less the most frequent item
      // console.log(minCount, minCounts[item], item)
      //if Infinity is greater or equal to the item 
      if (minCount >= minCounts[item]) {
        //store freq item inside maxCount
        minCount = minCounts[item];
        minItem = item;
      }
    }
    
    return {
      most:maxItem,
      least:minItem,
    }
    };
    findFrequency(['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd']); // { most: 'a', least: 'd' }
    
    const isPalindrome = function(str) {
        // your code here - don't forget to return a boolean!
         // your code here - don't forget to return a boolean!
    let j = str.length
    //the for loop iterates through string and stops halfway through the string
    for(let i = 0; i < j / 2;i++){
      //retrieves the first letter of the strin
      let x = str[i]
      console.log(x)
      //retrieves the last letter of the string
      //minus one retrieves the last letter 
      let y = str[j - 1]
      console.log(y)
      if(x != y){
      return false
      } else {return true}
    }
    };
    isPalindrome('canal'); // false
    isPalindrome('Ana'); // true
    
    const largestPair = function(array) {
    // your code here - don't forget to return a number!
    // your code here - don't forget to return a number!
    // Write a function called largestPair that takes an array of integers and finds the pair of adjacent elements that has the largest product and return that product. For example:
    let max = -Infinity
    for(let i = 1; i < array.length;i++){
    
    max = Math.max(array[i] * array[i - 1], max)       
    // 1 * 5 ; 1 * 2; 2 * 3; 3 * 1; 1 * 4
     //9 * 5; 5 * 10; 10 * 2; 2 * 24; 24 * -1; -1 * -48
    //after find the max number from this is iteration 
    }
        return max
    };
    
    
    const removeParenth = function (str) {
        // your code here - don't forget to return a string
        let newString = str.replace("(not)", "");
        return newString;
    };
      removeParenth("ido(not)liketocode"); // 'idoliketocode'
    
    
    const scoreScrabble = function (str) {
        // your code here - don't forget to return a number!
        let input = "";
        let score = 0;
        let results = false;
        // 1 - a, e, i, o, u, l, n, r, s, t
        let point1 = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
        // 2 - d, g
        let point2 = ["d", "g"];
        // 3 - b, c, m, p
        let point3 = ["b", "c", "m", "p"];
        // 4 - f, h, v, w, y
        let point4 = ["f", "h", "v", "w", "y"];
        // 5 - k
        let point5 = ["k"];
        // 8 - j, x
        let point8 = ["j", "x"];
        // 10 - q, z
        let point10 = ["q", "z"];
        //should I iterate? or should I compare with if statment assigning them to numbers?
        for (let i = 0; i < str.length; i++) {
          if (point1.includes(str[i])) {
            score = score + 1;
          }
          if (point2.includes(str[i])) {
            score = score + 2;
          }
          if (point3.includes(str[i])) {
            score = score + 3;
          }
          if (point4.includes(str[i])) {
            score = score + 4;
          }
          if (point5.includes(str[i])) {
            score = score + 5;
          }
          if (point8.includes(str[i])) {
            score = score + 8;
          }
          if (point10.includes(str[i])) {
            score = score + 10;
          }
        }
        return score
        // 2 - d, g
        // 3 - b, c, m, p
        // 4 - f, h, v, w, y
        // 5 - k
        // 8 - j, x
        // 10 - q, z
      };
      scoreScrabble("hello"); // 8
      scoreScrabble("quiet"); // 14
      //how do I get both to give me the sum?

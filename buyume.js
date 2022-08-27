
 
// Given an array of strings, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// INPUT
const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
 
// OUTPUT
// [[“nat”, “tan”], [“bat”], [“tea”, “ate”, “eat]]
 
// INPUT
// [“”]
// OUTPUT
// [[“”]]
 
// INPUT
// [“a”]
// OUTPUT
// [[“a”]]
 
 
// Constraints:
// 1 <= array.length <= 104
// 1 <= array[i].length <= 100
 
// input only consists of lowercase alphabets

const groupAnagram = (strs) => {
    let obj = {};
    for(let str of strs) {
        let letters = str.split("").sort().join("");
        obj[letters] ? obj[letters].push(str) : obj[letters] = [str]
    }
    return Object.values(obj)
}

const result = groupAnagram(strs);

// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// INPUT
const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
// const word = "ABCCED"
 
// OUTPUT
// true
 
// INPUT
// board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
word = "abcced"
 
// OUTPUT
// false
 
const exist = (board, word) => {
    if(!board.length) return false
    
    const h = board.length
    const w = board[0].length
    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    const go = (x, y, k) => {
        if(board [x] [y] != word[k]) return false;
        if(k === word.length -1 ) return true;

        board[x][y] = '*';
        for(const [dx, dy] of dirs) {
            const i = x + dx;
            const j = y + dy;
            if(i >= 0 && i<h && j>=0 && j < w) {
                if(go(i, j, k+1)) return true
            }
        }
        board[x][y] = word[k]
        return false
    }

    for(let i = 0; i < h; i++) {
        for (let j = 0; j < h; j++ ) {
            if(go(i, j, 0)) return true
        }
    }
    return false;
}

console.log(exist(board, word));
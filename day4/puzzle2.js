import { draws } from "./input.js";
import { bingoBoards } from "./input.js";


let evaluateBoard = (board, set) => {
   for (let i = 0; i < 5; i++) {
      let columnMatch = 0, rowMatch = 0;
      for (let j = 0; j <5; j++) {
         if (set[board[j][i]]) { columnMatch++ }
         if (set[board[i][j]]) { rowMatch++ }
      }
      if (columnMatch == 5 || rowMatch == 5) { return true }
   }
   return false;
}

let selectedSet = [];
let score = 0;

for (let draw of draws) {

   selectedSet[draw] = true;
   let scores = [];
   
   for (let i = 0; i < bingoBoards.length; i++) {
      let board = bingoBoards[i]; 

      if (evaluateBoard(board, selectedSet)) {
         let boardScore = 0;

         for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
               if (!selectedSet[board[i][j]]) { boardScore += board[i][j] }
            }
         }

         bingoBoards.splice(i, 1);
         i--;


         boardScore *= draw;
         
         scores.push(boardScore);
      }
   }

   if (scores.length > 0) {
      console.log(scores);
   }
      
}

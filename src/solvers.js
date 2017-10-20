/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
//helpers 
//hasAnyRooksConflicts, togglePiece: function(rowIndex, colIndex)
// board.togglePiece(0,0);

window.findNRooksSolution = function(n) {
  var board = new Board({n: n});
  for (var i = 0; i < n; i++) {
    board.togglePiece(i, i);
  }
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var factorial = function(number, count, total) {
    if (number === count) {
      return count * total;
    }
    return factorial(number, count + 1, total * count);
  };
  
  var solutionCount = factorial(n, 1, 1);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme





  //console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  // var conflict = window.Board.prototype.hasAnyQueensConflicts;
  // var toggle = window.Board.prototype.togglePiece;
  
  if ( n === 1 || n === 0) {
    return 1;
  }
  
  var rec = function(row, col) {
    if (col === n) {
      return;  
    }
    if (row === n) {
      if (!board.conflict()) {
        solutionCount++;
        return;
      } else {
        return;
      }
    }
    
    board.toggle(row, col);
    
    var help = false;
    
    if (!board.conflict()) {
      rec(row + 1, 0);
      help = true;
    }
    
    if (board.conflict() || help) {
      board.toggle(row, col);
      rec(row, col + 1);
    }
  };
  
  for (var i = 0; i < Math.floor(n / 2); i++) {
    var board = new Board({n: n});
    board.toggle = window.Board.prototype.togglePiece;
    board.conflict = window.Board.prototype.hasAnyQueensConflicts;
    board.toggle(0, i);
    rec(1, 0);
  }
  
  solutionCount *= 2;
  
  if (n % 2 === 1) {
    var board = new Board({n: n});
    board.toggle = window.Board.prototype.togglePiece;
    board.conflict = window.Board.prototype.hasAnyQueensConflicts;
    board.toggle(0, Math.floor(n / 2));
    
    rec(1, 0);
  }

  //console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

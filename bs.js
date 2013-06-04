var makeCell = function() {
  return {
    ship: false,
    hit: false,
    to_s: function() {
      if (this.ship && this.hit) {
        return 'X';
      } else if (this.ship) {
        return 'S';
      } else {
        return ' ';
      }
    }
  };
};

var makeBoard = function(n){
  n = n || 9;
  var board = _.map(_.range(n), function(){
    return _.map(_.range(n), function(){
      return makeCell();
    });
  });

  board.print = function() {
   _.each(this, function(row) {
      var string = _.map(row, function(cell){
        return cell.to_s();
      }).join(' ');
      console.log(string);
    });
  };

  return board;
};



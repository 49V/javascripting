var repeatNumbers = function(data){
  const num_rows = data.length;
  const index_row = 0;
  const index_column = 1;
  var phrase;
  var message = "";

  for (var i = 0; i < num_rows; i++){
      phrase = data[i][index_row].toString();
      message += phrase.repeat(data[i][index_column]);
      // If we are not on the last row
      if((i + 1) !== num_rows){
        message += ", ";
      }
  }

  return message;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
let counter = 0;
function inception() {
  debugger;
  if (counter > 3) {
    return "done";
  }
  counter++;
  return inception();
}

inception();

// only the last inception gets 'done' returned, we have to bubble the return back up to the top
// inception(inception(inception(inception('done'))))

// 1. identify the base case (when to stop)
// 2. identify the recursive case (when counterr is < 3)
// 3. get closer and closer and return when needed. usually have 2 returns (for base case and recursive case)

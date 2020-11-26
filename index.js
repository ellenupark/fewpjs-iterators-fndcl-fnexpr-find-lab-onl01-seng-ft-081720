const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (record) => {
  let winYear = record.find(function(obj) {
    return obj["result"] === "W";
  })

  if (winYear) {
    return winYear["year"];
  } else {
    return undefined;
  }
}; 
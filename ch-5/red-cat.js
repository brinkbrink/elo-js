let cats = [["panda", "tigre", "jerry"],["fiona", "justine", "rastakitty"],["miss b","franny","abe"]].reduce((previousValue, currentValue)=>previousValue.concat(currentValue),[]);
console.log(cats);

// or

let katz = [["panda", "tigre", "jerry"],["fiona", "justine", "rastakitty"],["miss b","franny","abe"]];
console.log(katz.reduce((flat, current) => flat.concat(current), []));
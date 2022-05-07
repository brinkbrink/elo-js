/*A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.
Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
If you haven’t already, also write a recursive version of nth.*/

arrayToList = (array) => {
    newList = null;
    for (let i = array.length - 1; i>=0; i--) {
        newList = {value: array[i], rest: newList};
    }
    return newList;
}

console.log(arrayToList([10,20,30,4]));

listToArray = (list) => {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

console.log(listToArray(arrayToList([10,20,30,4])));

let aList = arrayToList([10,20])
prepend = (list, element) => {
    return {element, rest: list};
}
console.log(prepend(aList, 20));
console.log(prepend(prepend(null, 20), 10));
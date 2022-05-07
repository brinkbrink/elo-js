/*Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.
To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".
The Object.keys function will be useful when you need to go over the prop- erties of objects to compare them.*/

deepEqual = (value1, value2) => {
    if(value1 == null || value2 == null || typeof(value1) != "object" || typeof(value2) != "object"){
        return false;
    }
    else if (value1 === value2){
        return true;
    }
    else{
        if ((Object.keys(value1)).length != (Object.keys(value2)).length){
            return false;
        } else {
            let keys1 = Object.keys(value1);
            let keys2 = Object.keys(value2);
            for(key in keys1){
                if(!keys2.includes(key) || !deepEqual(a[key], b[key])){
                    return false;
                } else {
                    return true;
                }
            }
        }
    }
}
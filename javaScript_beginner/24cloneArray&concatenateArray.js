// clone array

// concatenate of two arrays


let array1 = ["item1","item2"];

//let array2 = array1.slice(0).concat(["item3","item4"])
 //let array2 = [].concat(array1);

 //new way 
 //spread opreator

  let array2 = [...array1 , "item3", "item4"];

 array1.push("item3");

 console.log(array1);
 console.log(array2);


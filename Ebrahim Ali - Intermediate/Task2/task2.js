let arr = ["apple", "banana", "pear", "kiwi"];
let dr = [];



// ##########################################################
console.log(`##### 1 #####`);
// ##########################################################

function maxStr(e) {
  if (e.length > "0") {
    let a = e[0];
    for (let i = 0; i < e.length; i++) {
      if (e[i].length > a.length) {
        a = e[i];
      }
    }
    console.log(a);
  } else console.log("null");
}

maxStr(arr);
maxStr(dr);



// ##########################################################
console.log(`##### 2 #####`);
// ##########################################################

function bigStr(e) {
  if (e.length > "0") {
    console.log(
      e.reduce(function (pre, cur) {
        return pre.length > cur.length ? pre : cur;
      })
    );
  } else console.log("null");
}

bigStr(arr);
bigStr(dr);



// ##########################################################
console.log(`##### 3 #####`);
// ##########################################################

function hugeStr(e) {
  if (e.length > "0") {
    console.log(...(arr.filter(function (ele) {
        return ele.length > arr[0].length;
      })))
  } else  console.log("null");
}

hugeStr(arr);
hugeStr(dr);



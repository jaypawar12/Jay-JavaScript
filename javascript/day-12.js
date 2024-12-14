// AARAY

// ARRAY :- Store Multiple Value Single Variable.

let arr = [11,12,13,14,15]
console.log("Array :-",arr);

// length :- Index Start (0)
// ARR length :- ShowIn Total length.

// Push ,Pop, shift, upshifts, Splice (ARRAY FUNCTON)

// 1.Push :- New Element Of Add Array

let data = [11, 12, 13, 14, 15]
console.log("Array Before Push Method :-",data);
data.push(55);
console.log("Array After Push Method :-",data);

// 2.Pop :- Remove At Last Element.

let array = [11, 12, 13, 14, 15]
console.log("Array Before Pop Method :-",array);
array.pop();
console.log("Array After Pop Method :-",array);

// 3.Shift :- Remove At First Element.

let removeFirstEle = [11, 12, 13, 14, 15]
console.log("Array Before Shift Method :-",removeFirstEle);
removeFirstEle.shift();
console.log("Array After Shift Method :-",removeFirstEle);

// 4. Unshift :- Add To Start.

let addStart = [11, 12, 13, 14, 15]
console.log("Array Before UnShift Method :-",addStart);
addStart.unshift(10);
console.log("Array After UnShift Method :-",addStart);

// 5. Splice :- Change Original Array (add,remove,replace). [startIdx,delCount,newElement]

let splice = [11, 12, 13, 14, 15]
console.log("Array Before Splice Method :-",splice);
splice.splice(1,2,30,25,20);
console.log("Array After Splice Method :-",splice);

// 6. Slice :- Returns a Piece of The Array [startIdx,endIdx]

let slice = [1, 2, 333, 444, 5, 6];
console.log("Array before Slice Method :-", slice);
let slicedArray = slice.slice(2, 4);
console.log("Array after Slice Method :-", slicedArray);
console.log("Original Array after Slice Method :-", slice);

// 7. Concat :- Joins Multiplle Arrays & Returns Result.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let result = arr1.concat(arr2, arr3);
console.log("Array 1 :-", arr1);
console.log("Array 2 :-", arr2);
console.log("Array 3 :-", arr3);
console.log("Concatenated Array:", result);

// 8. toString :- Converts Array to String.

let toString = [1, 2, 3, 4, 5];
console.log("Array as Number :-", toString);
let arrString = toString.toString();
console.log("Array as String :-", arrString);

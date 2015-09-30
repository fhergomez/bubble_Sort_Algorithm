//Descending order
function bubbleSortDesc(arr) {
     var len = arr.length;
     for (var i = len-1; i >= 0; i--) {
          for (var j = len-1;  j >= 1; j--) {
               if(arr[j-1] < arr[j] {
                    var temp = arr[j];
                    arr[j] = arr[j-1j];
                    arr[j-1] = temp;
               }
          }
     }
     return arr;
}
bubbleSort([7,5,2,4,3,9,10]); // [10,9,7,5,4,3,2]
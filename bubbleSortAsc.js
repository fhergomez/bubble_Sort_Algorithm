//Ascending order
function bubbleSort(arr) {
     var len = arr.length;
     for (var i = len-1; i >= 0; i--) {
          for (var j = 1;  j <= 1; j++) {
               if(arr [j-1] > arr [j] {
                    var tem = arr [j-1];
                    arr [j-1] = arr [j];
                    arr[j] = temp;
               }
          }
     }
     return arr;
}
bubbleSort([7,5,2,4,3,9,10]); // [2,3,4,5,7,9,10]
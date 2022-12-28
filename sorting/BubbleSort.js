//Bubble Sort

function getBubblesort(Arr) {
   for (let i = 0; i <= Arr.length; i++) {
      for (let j = i + 1; j < Arr.length; j++) {
         if(Arr[j]< Arr[i]){
            //swapping logic
            [Arr[j],Arr[i]] = [Arr[i],Arr[j]]
         }
      }

   }
   return Arr;
}


   let res1 = getBubblesort([5, 2, 3, 4, 7, 1]);
   console.log(res1)

//Conventional method for swaping would be

// let temp = 0;
// temp = Arr[j];
// Arr[j] = Arr[i];
// Arr[i] = temp;

//Alternate way of buuble sort

function bubbleSort(arr2){
   for(let i=arr2.length;i>0;i--){
      for(let j=0;j<i-1;j++){
         if(arr2[j]>arr2[j+1]){
            [arr2[j],arr2[j+1]] = [arr2[j+1],arr2[j]]
         }
      }
   }
   return arr2;
}
let res  = bubbleSort([5,1,9,8,6,77,0,4])
console.log(res);
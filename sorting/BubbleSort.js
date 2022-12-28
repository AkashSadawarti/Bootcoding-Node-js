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

console.log(getBubblesort([5, 2, 3, 4, 7, 1]));


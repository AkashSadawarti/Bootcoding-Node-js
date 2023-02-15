// nstructions
// You're an avid bird watcher that keeps track of how many birds have visited your garden in the last seven days.

const { reduce } = require("bluebird");

// You have six tasks, all dealing with the numbers of birds that visited your garden.

// 1. Check what the counts were last week
// For comparison purposes, you always keep a copy of last week's counts nearby, which were: 0, 2, 5, 3, 7, 8 and 4. Implement the BirdWatcher.getLastWeek() method that returns last week's counts:
let birdsPerDay1 = [0,2,5,3,7,8,4]
function getLastWeek(){
       return birdsPerDay1;
}
console.log("---------Answer 1---------------")
console.log(getLastWeek())
// BirdWatcher.getLastWeek();
// // => [0, 2, 5, 3, 7, 8, 4]
// 2. Check how many birds visited today
// Implement the BirdWatcher.getToday() method to return how many birds visited your garden today. The bird counts are ordered by day, with the first element being the count of the oldest day, and the last element being today's count.
let birdsPerDay2 = [ 2, 5, 0, 7, 4, 1 ];
function BirdWatcher(){
          let res = birdsPerDay2[birdsPerDay2.length-1]
          return res;
}
console.log("---------Answer 2---------------")
console.log(BirdWatcher())
// int[] birdsPerDay = { 2, 5, 0, 7, 4, 1 };
// BirdWatcher birdCount = new BirdWatcher(birdsPerDay);
// birdCount.getToday();
// // => 1
// 3. Increment today's count
// Implement the BirdWatcher.incrementTodaysCount() method to increment today's count:

// int[] birdsPerDay = { 2, 5, 0, 7, 4, 1 };
// BirdWatcher birdCount = new BirdWatcher(birdsPerDay);
// birdCount.incrementTodaysCount();
// birdCount.getToday();
// // => 2
function BirdWatcher2(){
    return birdsPerDay2[birdsPerDay2.length-1] + 1;
  }
  console.log("---------Answer 3---------------")
  console.log(BirdWatcher2())
// 4. Check if there was a day with no visiting birds
// Implement the BirdWatcher.hasDayWithoutBirds() method that returns true if there was a day at which zero birds visited the garden; otherwise, return false:

// int[] birdsPerDay = { 2, 5, 0, 7, 4, 1 };
// BirdWatcher birdCount = new BirdWatcher(birdsPerDay);
// birdCount.hasDayWithoutBirds();
// // => true
function BirdWatcher3(){
    for(let i=0;i<birdsPerDay2.length;i++){
        if(birdsPerDay2[i]  === 0){
            return true;
        }else{
            false;
        }
    }
    }
    console.log("---------Answer 4---------------")
    console.log(BirdWatcher3())
    // 5. Calculate the number of visiting birds for the first number of days
    // Implement the BirdWatcher.getCountForFirstDays() method that returns the number of birds that have visited your garden from the start of the week, but limit the count to the specified number of days from the start of the week.
    
    // int[] birdsPerDay = { 2, 5, 0, 7, 4, 1 };
    // BirdWatcher birdCount = new BirdWatcher(birdsPerDay);
    // birdCount.getCountForFirstDays(4);
    // // => 14
    let num = 3
    let sum = 0;
    function Birdwatcher4(){
        for(let i=0;i<=num;i++){
            sum = sum + birdsPerDay2[i];
        }
        return sum;
    }
    console.log("---------Answer 5---------------")
    console.log(Birdwatcher4())
    // 6. Calculate the number of busy days
    // Some days are busier that others. A busy day is one where five or more birds have visited your garden. Implement the BirdWatcher.getBusyDays() method to return the number of busy days:
    
    // int[] birdsPerDay = { 2, 5, 0, 7, 4, 1 };
    // BirdWatcher birdCount = new BirdWatcher(birdsPerDay);
    // birdCount.getBusyDays();
    // // => 2
    let count = 0;
    function BirdWatcher5(){
        for(let i=0;i<birdsPerDay2.length;i++){
            if(birdsPerDay2[i] >= 5){
              count++ ;
            }
        }
        return count;
    }
    console.log("---------Answer 6---------------")
    console.log(BirdWatcher5())
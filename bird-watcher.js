// nstructions
// You're an avid bird watcher that keeps track of how many birds have visited your garden in the last seven days.

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
          return birdsPerDay2.length-1;
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
    return (birdsPerDay2.length-1) + 1;
  }
  console.log("---------Answer 3---------------")
  console.log(BirdWatcher2())

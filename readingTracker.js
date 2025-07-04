// Weekly reading log
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Adds a new reading entry to the log
function addReadBook(day, book, minutes) {
  // newEntry object with inputs
  const newEntry = { day, book, minutes };
  // Update array of entries
  readingLog.push(newEntry);
}

// Returns total minutes spent reading all week
// Input: Array
// Output: Number
function totalReadingMinutes(log) {
  // initialze total to 0
  let total = 0;
  // iterate each object's minutes member
  for (let entry of log) {
    // add minutes to update total
    total += entry.minutes;
  }
  return total;
}

// Returns the book read most frequently
function mostReadBook(log) {
  // object to count books
  const bookCounts = {};
  // iterate each element of given log
  for (let entry of log) {
    // check if the element already counted
    if (!bookCounts[entry.book]) {
      //if not, update count to 1
      bookCounts[entry.book] = 1;
    } else {
      // if already counted, increase count by 1
      bookCounts[entry.book]++;
    }
  }

  let maxBook = null;
  let maxCount = 0;
  for (let book in bookCounts) {
    // if current element count greater then max,
    if (bookCounts[book] > maxCount) {
      // current element new most frequent
      maxBook = book;
      // new max count is current element's count
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}

// Prints a summary of minutes read per day
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
addReadBook("Saturday", "Dune", 50);

// Test The Hobbit should most read and total 450 min
addReadBook("Saturday", "The Hobbit", 90);
addReadBook("Sunday", "The Hobbit", 90);
addReadBook("Monday", "The Hobbit", 90);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));


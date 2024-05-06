// Function to find the maximum number of meetings that can
// be performed in a meeting room.
function maxMeetings(start, end, n) {
  // Create an array to store meetings as pairs of start and end times
  const meetings = [];
  for (let i = 0; i < n; i++) {
    meetings.push({ start: start[i], end: end[i] });
  }

  // Sort meetings by end times in ascending order
  meetings.sort((a, b) => a.end - b.end);

  // Initialize variables
  let res = 1;
  let prevEnd = meetings[0].end;

  // Iterate through the sorted meetings
  for (let i = 1; i < n; i++) {
    // If the start time of the current meeting is greater than or equal
    // to the end time of the previous selected meeting, select it
    if (meetings[i].start > prevEnd) {
      res++;
      prevEnd = meetings[i].end;
    }
  }

  // Return the maximum number of meetings that can be accommodated
  return res;
}

// Example usage:

const start = [1, 3, 0, 5, 8, 5];
const end = [2, 4, 6, 7, 9, 9];
const n = start.length;
console.log(maxMeetings(start, end, n)); // Output: 4

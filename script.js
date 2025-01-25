document.getElementById('calculateButton').addEventListener('click', calculateAge);

function calculateAge() {
  // Get the input values
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);

  // Check if all inputs are valid
  if (!day || !month || !year) {
    document.getElementById('result').textContent = "Please enter a valid date.";
    return;
  }

  // Get the current date
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth() + 1; // Month is 0-indexed in JavaScript
  const currentYear = today.getFullYear();

  // Calculate age
  let age = currentYear - year;

  // Adjust age if the birthday hasn't occurred yet this year
  if (currentMonth < month || (currentMonth === month && currentDay < day)) {
    age--;
  }

  // Display the result
  if (age < 0) {
    document.getElementById('result').textContent = "The date is in the future! Please enter a valid date.";
  } else {
    document.getElementById('result').textContent = `You are ${age} years old.`;
  }
}

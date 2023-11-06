// validation.js

// Function to validate email format
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate a required field
export function validateRequired(value) {
  return value.trim() !== '';
}

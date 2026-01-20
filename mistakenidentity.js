// mistaken_identity.js
// Simulates a random identity mix-up

function getRandomIdentity() {
  const names = ["Alex", "Jordan", "Sam", "Taylor"];
  const roles = ["Voter", "Admin", "Guest"];

  const name = names[Math.floor(Math.random() * names.length)];
  const role = roles[Math.floor(Math.random() * roles.length)];

  return `Identity mismatch detected: ${name} identified as ${role}`;
}

console.log(getRandomIdentity());

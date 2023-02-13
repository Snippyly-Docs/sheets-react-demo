

const FirstNames = ['Troy', 'Abed', 'Patrick', 'Sandy', 'Pearl', 'Spongebob', 'Ross', 'Rachel'];
const LastNames = ['Cheeks', 'Krabs', 'Squarepants', 'Tentacles', 'Smith', 'Johnson', 'Davis'];

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function generateUserId() {
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

function generateName() {
  return `${FirstNames[Math.floor(Math.random() * FirstNames.length)]} ${LastNames[Math.floor(Math.random() * LastNames.length)]}`;
}

function generateEmail(name: string) {
  return `${name.replace(' ', '.').toLowerCase()}@email.com`;
}

function generateUserData() {
  const name = generateName();
  return {
    userId: generateUserId(),
    name,
    email: generateEmail(name)
  };
}

export { generateUserData };
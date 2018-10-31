const allPeople = [
  { id: 16, username: "bfrest" },
  { id: 14, username: "mfrest" },
  { id: 132, username: "kfrest" },
  { id: 3, username: "kfas" },
  { id: 17, username: "s" },
  { id: 54, username: "kfas" },
  { id: 5, username: "ks" },
  { id: 1, username: "kfas" },
  { id: 34, username: "kfas" }
];
const friends = [17, 14];

//loops the users friends array
for (let i = 0; i < friends.length; i++) {
  // loops over the list of all the people in a database
  for (let j = 0; j < allPeople.length; j++) {
    if (friends[i] === allPeople[j].id) {
      // takes away the person from the array if the
      // person in already on the friends list
      allPeople.splice(j, 1);
    }
  }
}

console.log(allPeople);

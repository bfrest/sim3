const array1 = [{ id: 16, username: "bfrest" }, { id: 14, username: "mfrest" }, { id: 132, username: "kfrest" }, { id: 3, username: "kfas" }];
const friends = [17, 14];
const reccomended = [...array1];

for (let i = 0; i < friends.length; i++) {
  for (let j = 0; j < reccomended.length; j++) {
    console.log(friends[i], reccomended[j].id);
    if (friends[i] === reccomended[j].id) {
      reccomended.splice(reccomended[j], 1);
    } else {
      console.log(reccomended[j].id);
    }
  }
}

console.log(reccomended);

// you need to make a copy of the person list, then drop the ones that match an id from the friends

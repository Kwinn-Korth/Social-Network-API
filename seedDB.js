const mongoose = require("mongoose");
const { User, Thought, Reaction } = require("./models");

mongoose.connect("mongodb://127.0.0.1:27017/social-network-api");

const seedDatabase = async () => {
  try {
    await User.deleteMany();
    await Thought.deleteMany();
    await Reaction.deleteMany();

    const arrayLength = 6;

    const userList = [
      "Frodo Baggins",
      "Gandalf the Grey",
      "Aragorn",
      "Legolas",
      "Gimli",
      "Gollum",
      "Bilbo Baggins",
      "Samwise Gamgee",
      "Saruman",
      "Galadriel",
      "Elrond",
      "Boromir",
      "Faramir",
      "Merry",
      "Pippin",
      "Theoden",
      "Eowyn",
      "Grima Wormtongue",
      "Sauron",
      "Smeagol"
    ];

    const thoughtList = [
      "I wish the ring had never come to me.",
      "A wizard is never late, nor is he early, he arrives precisely when he means to.",
      "Not all those who wander are lost.",
      "The dwarf breathes so loud, we could have shot him in the dark.",
      "Nobody tosses a dwarf!",
      "My precious.",
      "I like half of you half as well as I should like, and I like less than half of you half as well as you deserve.",
      "I can't carry it for you, but I can carry you!",
      "A wizard should know better!",
      "Even the smallest person can change the course of the future.",
      "You shall not pass!",
      "One does not simply walk into Mordor.",
      "I will not risk open war.",
      "The journey doesn't end here.",
      "Fool of a Took!",
      "You have no power here, Gandalf the Grey.",
      "I am no man.",
      "Leave now and never come back!",
      "The time of the orc has come.",
      "My precious."
    ];

    let newUsers = userList.map((username) => ({
      _id: new mongoose.Types.ObjectId(),
      username: username,
      email: `${username.split(" ")[0].toLowerCase()}@example.com`,
      thoughts: [],
      friends: []
    }));

    let newThoughts = [];

    for (let i = 0; i < arrayLength; i++) {
      newThoughts.push({
        _id: new mongoose.Types.ObjectId(),
        thoughtText: thoughtList[i],
        username: newUsers[i].username,
        reactions: []
      });
    }

    let newReactions = [];

    for (let i = 0; i < arrayLength; i++) {
      newReactions.push({
        _id: new mongoose.Types.ObjectId(),
        reactionId: new mongoose.Types.ObjectId(),
        reactionBody: thoughtList[i],
        username: newUsers[i].username
      });
    }

    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    for (let i = 0; i < newThoughts.length; i++) {
      let randomUser = getRandomNumber(0, arrayLength);
      let randomThought = getRandomNumber(0, arrayLength);
      let randomReaction = getRandomNumber(0, arrayLength);
      let randomFriend = getRandomNumber(0, arrayLength);

      newThoughts[randomThought].reactions.push(newReactions[randomReaction]._id);
      newUsers[randomUser].thoughts.push(newThoughts[randomThought]._id);
      newUsers[randomUser].friends.push(newUsers[randomFriend]._id);
    }

    await User.deleteMany();
    await User.insertMany(newUsers);
    await Thought.deleteMany();
    await Thought.insertMany(newThoughts);
    await Reaction.deleteMany();
    await Reaction.insertMany(newReactions);

    console.log("Database seeded");
    console.info("Seeding successful");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    console.info("Process exit");
    process.exit(0);
  }
};

seedDatabase();

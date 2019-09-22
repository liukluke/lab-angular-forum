// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Thread = require("../models/Thread");

const bcryptSalt = 10;

mongoose
  .connect('mongodb://localhost/forum-development', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
  {
    username: "Alice",
    email: "alice@info.com",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt)),
  },
  {
    username: "Carlos",
    email: "carlos@info.com",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt)),
  },
  {
    username: "Sito",
    email: "sito@info.com",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt)),
  },
  {
    username: "Pako",
    email: "pako@info.com",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt)),
  },
  {
    username: "Salva",
    email: "salva@info.com",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt)),
  },
]

let createThreads = (userId) => {
  return [
    {
      author: userId,
      title: "La vita è bella",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit esse iure quae pariatur aut vero dolores distinctio, perspiciatis, cum quas at illum deleniti repellendus, incidunt tempora labore veniam ipsum? Quis."
    },
    {
      author: userId,
      title: "Il pasto nudo",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit esse iure quae pariatur aut vero dolores distinctio, perspiciatis, cum quas at illum deleniti repellendus, incidunt tempora labore veniam ipsum? Quis."
    },
    {
      author: userId,
      title: "Mi illumino d'immenso",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit esse iure quae pariatur aut vero dolores distinctio, perspiciatis, cum quas at illum deleniti repellendus, incidunt tempora labore veniam ipsum? Quis."
    },
    {
      author: userId,
      title: "Le fate ignoranti",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit esse iure quae pariatur aut vero dolores distinctio, perspiciatis, cum quas at illum deleniti repellendus, incidunt tempora labore veniam ipsum? Quis."
    },
    {
      author: userId,
      title: "L'avversario",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit esse iure quae pariatur aut vero dolores distinctio, perspiciatis, cum quas at illum deleniti repellendus, incidunt tempora labore veniam ipsum? Quis."
    }
  ]
}

let newThreads = [];
User.deleteMany()
  .then(() => User.create(users))
  .then(usersCreated => {
    Thread.deleteMany()
    return usersCreated.map((user, i) => newThreads.push(createThreads(user._id)[i]))
  })
  .then(() => Thread.create(newThreads))
  .then(() => mongoose.disconnect())
  .catch(err => {
    mongoose.disconnect()
    throw err
  })

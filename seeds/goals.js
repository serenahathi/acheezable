const {
  mongoose
} = require('../server/db/mongoose');
const id = new mongoose.Types.ObjectId("5ace2a706784617302a7d890");

const seeds = [{
    completed: false,
    completedAt: null,
    text: "Meditate",
    createdAt: new Date(Date.now()),
    creator: id
  }, {
    completed: false,
    completedAt: null,
    text: "Run 5K",
    createdAt: new Date(Date.now()),
    creator: id
  }, {
    completed: false,
    completedAt: null,
    text: "Write a journal",
    createdAt: new Date(Date.now()),
    creator: id
  }, {
    completed: false,
    completedAt: null,
    text: "Drink 8 glasses of water",
    createdAt: new Date(Date.now()),
    creator: id
  }, {
    completed: true,
    completedAt: null,
    text: "Meditate",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 1)),
    creator: id
  }, {
    completed: true,
    completedAt: null,
    text: "Run 5K",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 1)),
    creator: id
  }, {
    completed: true,
    completedAt: null,
    text: "Write a journal",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 1)),
    creator: id
  }, {
    completed: true,
    completedAt: null,
    text: "Drink 8 glasses of water",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 1)),
    creator: id
  }, {
    completed: true,
    completedAt: null,
    text: "Meditate",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 2)),
    creator: id
  }, {
    completed: true,
    completedAt: null,
    text: "Run 5K",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 2)),
    creator: id
  }, {
    completed: true,
    completedAt: null,
    text: "Write a journal",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 2)),
    creator: id
  }, {
    completed: true,
    completedAt: null,
    text: "Drink 8 glasses of water",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 2)),
    creator: id
  }, {
    completed: true,
    completedAt: null,
    text: "Meditate",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 3)),
    creator: id
  }, {
    completed: false,
    completedAt: null,
    text: "Run 5K",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 3)),
    creator: id
  }, {
    completed: true,
    completedAt: null,
    text: "Write a journal",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 3)),
    creator: id
  }, {
    completed: true,
    completedAt: null,
    text: "Drink 8 glasses of water",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 3)),
    creator: id
  }, {
    completed: false,
    completedAt: null,
    text: "Meditate",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 4)),
    creator: id
  }, {
    completed: true,
    completedAt: null,
    text: "Run 5K",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 4)),
    creator: id
  }, {
    completed: false,
    completedAt: null,
    text: "Write a journal",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 4)),
    creator: id
  }, {
    completed: true,
    completedAt: null,
    text: "Drink 8 glasses of water",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 4)),
    creator: id
  }, {
    completed: true,
    completedAt: null,
    text: "Meditate",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 5)),
    creator: id
  }, {
    completed: false,
    completedAt: null,
    text: "Run 5K",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 5)),
    creator: id
  }, {
    completed: false,
    completedAt: null,
    text: "Write a journal",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 5)),
    creator: id
  }, {
    completed: true,
    completedAt: null,
    text: "Drink 8 glasses of water",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 5)),
    creator: id
  },
  // {
  //   completed: false,
  //   completedAt: null,
  //   text: "Meditate",
  //   createdAt: new Date(new Date().setDate(new Date().getDate() - 6)),
  //   creator: id
  // }, {
  //   completed: true,
  //   completedAt: null,
  //   text: "Run 5K",
  //   createdAt: new Date(new Date().setDate(new Date().getDate() - 6)),
  //   creator: id
  // }, {
  //   completed: false,
  //   completedAt: null,
  //   text: "Write a journal",
  //   createdAt: new Date(new Date().setDate(new Date().getDate() - 6)),
  //   creator: id
  // }, {
  //   completed: false,
  //   completedAt: null,
  //   text: "Drink 8 glasses of water",
  //   createdAt: new Date(new Date().setDate(new Date().getDate() - 6)),
  //   creator: id
  // },
]

module.exports = seeds;

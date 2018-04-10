const seeds = [{
  completed : false, completedAt : null, text : "Meditate", createdAt : new Date(Date.now())
}, {
  completed : false, completedAt : null, text : "Run 5K", createdAt : new Date(Date.now())
}, {
  completed : false, completedAt : null, text : "Write a journal", createdAt : new Date(Date.now())
}, {
  completed : false, completedAt : null, text : "Drink 8 glasses of water", createdAt : new Date(Date.now())
}, {
  completed : true, completedAt : null, text : "Meditate", createdAt : new Date(new Date().setDate(new Date().getDate()-1))
}, {
  completed : true, completedAt : null, text : "Run 5K", createdAt : new Date(new Date().setDate(new Date().getDate()-1))
}, {
  completed : true, completedAt : null, text : "Write a journal", createdAt : new Date(new Date().setDate(new Date().getDate()-1))
}, {
  completed : true, completedAt : null, text : "Drink 8 glasses of water", createdAt : new Date(new Date().setDate(new Date().getDate()-1))
}, {
  completed : true, completedAt : null, text : "Meditate", createdAt : new Date(new Date().setDate(new Date().getDate()-2))
}, {
  completed : true, completedAt : null, text : "Run 5K", createdAt : new Date(new Date().setDate(new Date().getDate()-2))
}, {
  completed : true, completedAt : null, text : "Write a journal", createdAt : new Date(new Date().setDate(new Date().getDate()-2))
}, {
  completed : true, completedAt : null, text : "Drink 8 glasses of water", createdAt : new Date(new Date().setDate(new Date().getDate()-2))
}, {
  completed : true, completedAt : null, text : "Meditate", createdAt : new Date(new Date().setDate(new Date().getDate()-3))
}, {
  completed : false, completedAt : null, text : "Run 5K", createdAt : new Date(new Date().setDate(new Date().getDate()-3))
}, {
  completed : true, completedAt : null, text : "Write a journal", createdAt : new Date(new Date().setDate(new Date().getDate()-3))
}, {
  completed : true, completedAt : null, text : "Drink 8 glasses of water", createdAt : new Date(new Date().setDate(new Date().getDate()-3))
}, {
  completed : false, completedAt : null, text : "Meditate", createdAt : new Date(new Date().setDate(new Date().getDate()-4))
}, {
  completed : true, completedAt : null, text : "Run 5K", createdAt : new Date(new Date().setDate(new Date().getDate()-4))
}, {
  completed : false, completedAt : null, text : "Write a journal", createdAt : new Date(new Date().setDate(new Date().getDate()-4))
}, {
  completed : true, completedAt : null, text : "Drink 8 glasses of water", createdAt : new Date(new Date().setDate(new Date().getDate()-4))
}, {
  completed : true, completedAt : null, text : "Meditate", createdAt : new Date(new Date().setDate(new Date().getDate()-5))
}, {
  completed : false, completedAt : null, text : "Run 5K", createdAt : new Date(new Date().setDate(new Date().getDate()-5))
}, {
  completed : false, completedAt : null, text : "Write a journal", createdAt : new Date(new Date().setDate(new Date().getDate()-5))
}, {
  completed : true, completedAt : null, text : "Drink 8 glasses of water", createdAt : new Date(new Date().setDate(new Date().getDate()-5))
}, {
  completed : false, completedAt : null, text : "Meditate", createdAt : new Date(new Date().setDate(new Date().getDate()-6))
}, {
  completed : true, completedAt : null, text : "Run 5K", createdAt : new Date(new Date().setDate(new Date().getDate()-6))
}, {
  completed : false, completedAt : null, text : "Write a journal", createdAt : new Date(new Date().setDate(new Date().getDate()-6))
}, {
  completed : false, completedAt : null, text : "Drink 8 glasses of water", createdAt : new Date(new Date().setDate(new Date().getDate()-6))
},
]

module.exports = seeds;

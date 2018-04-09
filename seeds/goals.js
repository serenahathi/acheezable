const seeds = [{
 completed : false, completedAt : null, text : "TEST GOAL", createdAt : new Date(Date.now())
}, {
 completed : false, completedAt : null, text : "TEST GOAL 2", createdAt : new Date(Date.now())
}, {
 completed : true, completedAt : null, text : "TEST GOAL 3", createdAt : new Date(Date.now())
}, {
 completed : false, completedAt : null, text : "TEST GOAL 4", createdAt : new Date(Date.now())
}, {
 completed : true, completedAt : null, text : "TEST GOAL -1", createdAt : new Date(new Date().setDate(new Date().getDate()-1))
}, {
 completed : true, completedAt : null, text : "TEST Day -1", createdAt : new Date(new Date().setDate(new Date().getDate()-1))
}, {
 completed : false, completedAt : null, text : "TEST Day -1", createdAt : new Date(new Date().setDate(new Date().getDate()-1))
}, {
 completed : false, completedAt : null, text : "TEST Day -1", createdAt : new Date(new Date().setDate(new Date().getDate()-1))
}, {
 completed : true, completedAt : null, text : "TEST Day -2", createdAt : new Date(new Date().setDate(new Date().getDate()-2))
}, {
 completed : true, completedAt : null, text : "TEST Day -2", createdAt : new Date(new Date().setDate(new Date().getDate()-2))
}, {
 completed : true, completedAt : null, text : "TEST Day -2", createdAt : new Date(new Date().setDate(new Date().getDate()-2))
}, {
 completed : false, completedAt : null, text : "TEST Day -2", createdAt : new Date(new Date().setDate(new Date().getDate()-2))
}, {
 completed : true, completedAt : null, text : "TEST Day -3", createdAt : new Date(new Date().setDate(new Date().getDate()-3))
}, {
 completed : false, completedAt : null, text : "TEST Day -3", createdAt : new Date(new Date().setDate(new Date().getDate()-3))
}, {
 completed : false, completedAt : null, text : "TEST Day -3", createdAt : new Date(new Date().setDate(new Date().getDate()-3))
}, {
 completed : false, completedAt : null, text : "TEST Day -3", createdAt : new Date(new Date().setDate(new Date().getDate()-3))
}, {
 completed : true, completedAt : null, text : "TEST Day -4", createdAt : new Date(new Date().setDate(new Date().getDate()-4))
}, {
 completed : true, completedAt : null, text : "TEST Day -4", createdAt : new Date(new Date().setDate(new Date().getDate()-4))
}, {
 completed : true, completedAt : null, text : "TEST Day -4", createdAt : new Date(new Date().setDate(new Date().getDate()-4))
}, {
 completed : true, completedAt : null, text : "TEST Day -4", createdAt : new Date(new Date().setDate(new Date().getDate()-4))
}, {
 completed : true, completedAt : null, text : "TEST Day -5", createdAt : new Date(new Date().setDate(new Date().getDate()-5))
}, {
 completed : true, completedAt : null, text : "TEST Day -5", createdAt : new Date(new Date().setDate(new Date().getDate()-5))
}, {
 completed : true, completedAt : null, text : "TEST Day -5", createdAt : new Date(new Date().setDate(new Date().getDate()-5))
}, {
 completed : true, completedAt : null, text : "TEST Day -5", createdAt : new Date(new Date().setDate(new Date().getDate()-5))
}, {
 completed : true, completedAt : null, text : "TEST Day -6", createdAt : new Date(new Date().setDate(new Date().getDate()-6))
}, {
 completed : true, completedAt : null, text : "TEST GOAL -6", createdAt : new Date(new Date().setDate(new Date().getDate()-6))
}, {
 completed : true, completedAt : null, text : "TEST GOAL -6", createdAt : new Date(new Date().setDate(new Date().getDate()-6))
}, {
 completed : false, completedAt : null, text : "TEST GOAL -6", createdAt : new Date(new Date().setDate(new Date().getDate()-6))
},
]

module.exports = seeds;

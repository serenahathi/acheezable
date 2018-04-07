const {MongoClient} = require('mongodb');

let connection;
let db;

beforeAll(async () => {
  connection = await MongoClient.connect(global.__MONGO_URI__);
  db = await connection.db(global.__MONGO_DB_NAME__);
});

afterAll(async () => {
  await connection.close();
  await db.close();
});

it('should aggregate goals from collection', async () => {
  const goals = db.collection('goals');

  await goals.insertMany([
    { goal: 'Meditate', complete: true },
    { goal: 'Drink 8 glasses of water', complete: true },
    { goal: 'Run 10k', complete: true },
    { goal: 'Write a journal', complete: false }
  ]);

  const completedGoalsCount = await Goals
    .aggregate([
      { $group: { _id: '$complete', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ])
    .toArray();

    expect(completeGoalsCount).toEqual([
      { _id: true, count: 3 },
      { _id: false, count: 1 }
    ]);
});

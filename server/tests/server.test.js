const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Goal} = require('./../models/goal');

const goals = [
  {text: 'Run a Bit'},
  {text: 'Eat a Salad'}
];

beforeEach((done) => {
  Goal.remove({}).then(() => {
    return Goal.insertMany(goals);
  }).then(() => done());
});

describe('POST /', () => {
  it('should create a new goal', (done) => {
    let text = 'Go for a Swim';

    request(app)
      .post('/')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Goal.find({text: text}).then((goals) => {
          expect(goals.length).toBe(1);
          expect(goals[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });
});

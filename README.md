# [Acheezable](https://acheezable.herokuapp.com/)

A cheesy self-led personal development app to encourage positivity during the achievement of goals.

## Requirements

* MongoDB and Mongod
* [Node and npm](https://nodejs.org/en/)

## Installation

Install MongoDB and Mongod

`git clone https://github.com/serenahathi/acheezable`

Run `npm install` to download dependencies

Create a `config.json` file and place your own MongoDB URI within test and development environment variables

Run `seed` to create dependent data

## Usage

Run `mongod` in background

Run `node server/server.js` to launch app

Navigate to `http://localhost:3000`

## Running Tests

`npm run cypress` to run feature tests via cypress.io

### MVP

###### User Stories

```
As a user,
So that I can work on my personal development today,
I would like to create some goals to track.

As a user,
So that I can be realistic about how many goals I can complete today,
I want to be restricted to four goals only.

As a user,
So that I can keep track of my goals,
I would like to be able to tick off goals when they’re met

As a user,
So that I can feel good about achieving my goals,
I would like some positive feedback once they’re all ticked off.
```

##### Features

* Input 4 goals for the day [x]
* User checks box when each goal is complete [x]
* When all goals are checked, a motivational message appears [x]

### MVP 2.0

![alt text](assets/images/mvpOne.png)

###### User Stories

```
As a user,
So that I can set goals based on how much time I have,
I would like the flexibility to choose any number of goals per day.

As a user,
So that I can stay focused on Today's goals,
I would like to display Today's goals only.

As a user,
So that I can see how I am progressing with my goals,
I would like to convert my total completed goals into a completion percentage.
```

##### Features

* User can set any number of goals per day [x]
* User can navigate to Progress Tracker where only Today's goals are displayed [x]
* A completion percentage is displayed, and updates whenever a completion button is clicked [x]

![alt text](assets/images/mvpTwo.png)

## Acheezable 1.0.0

###### User Stories

```
As a user,
So that I can protect my user details,
I would like to be able to login and logout of my account securely.

As a user,
So that I can get inspiration for goals I would like to achieve,
I would like to get some appropriate suggestions.

As a user,
So that I can amend any typos to goals I have created,
I would like to be able to edit the text of the goal.

As a user,
So that I can stay motivated to achieve the goals I have set,
I would like to receive words of encouragement.

As a user,
So that I can feel a true sense of accomplishment for completing all of my goals,
I would like to receive some type of reward upon 100% completion.

As a user,
So that I can reflect on what goals I have achieved,
I would like to be able to look at my recent history.
```

##### Features

* User can sign up, login, and logout of their profile [x]
* If user is struggling to create goals, they can click on a suggestions button and receive some inspiration [x]
* User can edit their goals if they have made a mistake [x]
* If user is struggling to complete goals, they can click on a 'motivational hit' button and receive some encouragement [x]
* When user completes all their goals, the app will help the user celebrate their success [x]
* User can reflect on their recent history by viewing the data breakdown of the last 7 days [x]

![alt text](assets/images/acheezableOne.png)

## Authors

**Team Cheezers**:

* Terry Allitt
* Ben Challenor
* Serena Hathi
* Heather Stock
* Lewis Watson

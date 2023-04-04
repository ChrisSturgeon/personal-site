import SessionHub from './imgs/SessionHub.png';
import RedoneIt from './imgs/RedoneitHomepage.png';
import WhereInTheWorld from './imgs/RESTCountries.png';
import ReactRecords from './imgs/ReactRecords.png';
import BattleShips from './imgs/BattleShips.png';
import WheresFry from './imgs/WheresFry.png';

export const projectData = [
  {
    name: 'Session Hub',
    screenshot: SessionHub,
    about:
      'An SPA built with React consuming a REST API built with Express. The project aim was to create a social media site where users can create accounts, add friends, and post about their recent surfing, windsurfing, kitesurfing etc. sessions for other users to like and comment on. ',
    challenges: [
      'Issuance, storage and authentication of JWTs using PassportJS',
      'Allowing users to drop pins for their session location to display with Leaflet and Open Street Map',
      'Writing custom React hooks for fetching, posting and updating data',
      'Mocking the API during front-end testing using msw',
      'Using Mongoose pipelines to collate data across multiple collections into a single server response',
    ],
    live: 'https://chrissturgeon.github.io/session-hub-front-end/',
    repo: 'https://github.com/ChrisSturgeon/session-hub-front-end',
  },

  {
    name: 'RedoneIt',
    screenshot: RedoneIt,
    altText: 'Screenshot of RedoneIt front page',
    about:
      'A site to display information about countries with data fetched from the REST Countries API built as a challenge from Front End Mentor.',
    challenges: [
      'User authentication and session management with Firebase',
      'Effective data organisation with Firestore',
      'Creating maintanable and reusable React components for use across different pages',
      'How to increase user interactivity with the help of CSS animations and Framer Motion',
    ],
    live: 'https://chrissturgeon.github.io/redoneit/',
    repo: 'https://github.com/ChrisSturgeon/REST-Country-App',
  },
  {
    name: 'Where in the World?',
    screenshot: WhereInTheWorld,
    altText: 'Screenshot of the Where in the World front page',
    about:
      'A site to display information about countries with data fetched from the REST Countries API built as a challenge from Front End Mentor. I decided to undertake this project in order to focus upon improving my knowledge of testing and accessibility, as well as dig under the hood of React and dabble with some CSS-in-JS using Styled Components.',
    challenges: [
      'How to setup React and integrate libraries from scratch without the help of Create React App or Vite etc.',
      'Using Styled Components within React, in particular global styles to allow users to toggle between dark and light themes',
      'Mocking the third party API with msw during testing to reduce unnecessary calls',
      'Testing with asynchronous user events with React Testing Library and Jest',
    ],
    live: 'https://chrissturgeon.github.io/REST-Country-App/#/all',
    repo: 'https://github.com/ChrisSturgeon/odin-shopping-cart',
  },

  {
    name: 'Battle Ships',
    screenshot: BattleShips,
    altText: 'Screenshot of Battle Ships gameboard',
    about:
      'A BattleShips style game created with Vanilla JS to greater my understanding of OOP, Jest and TDD.',
    challenges: [
      'Learning how to write code in a modular manner so not only can it be tested during development, but also maintable in future.',
      'How to seperate game logic from the user interface',
      'How to use function factories to seperate game components and model them with with OOP',
    ],
    live: 'https://chrissturgeon.github.io/odin-battleships/',
    repo: 'https://github.com/ChrisSturgeon/odin-battleships',
  },
  {
    name: "Where's Fry?",
    screenshot: WheresFry,
    altText: "Screenshot of Where's Fry image searching game",
    about:
      "The photo-tagging project from the Javascript and the Backend module of The Odin Project. The aim was to create an app using React and Firebase in which users race against the clock to find and correctly identify characters from a Where's Wally style photo to try and top a leaderboard stored on the backend.",
    challenges: [
      'How to use asynchronous functions within React',
      'Detecting where on an image a user has clicked, and verifying if the coordinates match those held in a database',
      'Creating a timer with JavaScript and publishing results on recent and all-time highscore leaderboards',
    ],
    live: 'https://chrissturgeon.github.io/odin-wheres-fry/',
    repo: 'https://github.com/ChrisSturgeon/odin-wheres-fry',
  },
];

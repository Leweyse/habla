# PRATEN
"Praten" is a Dutch language study tool that adapts to any personality. This web application is still under development. 

## TECHNOLOGIES USED
* HTML
* CSS: Sass, Scss.
* Git Bash
* MongoDB
* JavaScript: Express, React JS

## SPECIAL GOTCHAS OF MY PROJECT
### Problems I faced
My goal with this app prompted me to work with technologies and frameworks like React JS, Express, Scss and MongoDB. Working on every detail of the design on the Front End and Back End helped me learn new things and remember what I already knew.

* This was my first time working with Sass. At some point in the project, each new idea came with the anguish of having to deal with my CSS file. I felt like writing CSS code became a headache, that's when I looked for a solution and found Sass. I hope to make the most of Sass's potential in this and my next projects, until then I will continue to learn more about this useful tool.
* [...]

### API

The API is written in Node.JS and feeds off a NoSQL MongoDB database. The API has the following features:

* Uses the [Mongoose](http://mongoosejs.com/) Node.js driver for connecting to the database.
* CORS headers are used to allow cross origin data access by clients.
* API is configured for production vs. development environments via an external `config.js` file (not present in this repo) which is deployed along with the Node.js application code.
* API routes are defined in a declarative manner which could allow for easy self-documentation or automated generation of a test harness in future.
* Restify does not provide any session management or authentication so I rolled my own custom middleware for this. The [node.bcrypt.js](https://github.com/ncb000gt/node.bcrypt.js) crypto library is used to hash and salt user details in the database.
* Clients wishing to authenticate and access full REST API functionality (`POST`, `PUT` and `DELETE` actions for example) must authenticate by including a Base64 hash of their username and password in their request's `Authorization`.
* Aggregation and caching of personal social data from a variety of 3rd party APIs.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

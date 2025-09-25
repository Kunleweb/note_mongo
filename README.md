**SECURE NOTE TAKING APP**

A simple note-taking application built with Express.js.
Users can create, view, and manage notes through a clean interface.

**FEATURES**
1) Create, view, and delete notes
2) RESTful API built with Express.js
3) Full Authentication and Authorization

**Stack**
1) Expressjs
2) MongoDB
3) EJS

**PROJECT SETUP**

Clone the repository:
<pre>  git clone https://github.com/Kunleweb/note_mongo.git </pre>

**Change Dir**
<pre> cd express-notes-app </pre>

**Install dependencies:**
<pre> npm install </pre>

**Environment Variables** <br>
This project uses a config.env file to manage environment variables.
Create a file named config.env in the project root and add the following:
<pre> 
PORT=3000
NODE_ENV=development
DATABASE=mongodb+srv://<username>:<password>@cluster-url/dbname
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=90d
COOKIE_EXPIRES_IN=90 </pre>

**Start the server:**
<pre> npm start </pre>

**Deployment**<br>
The app is deployed at: <br>
https://notemongo-production.up.railway.app/ 



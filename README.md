<p>
    This was built using NodeJS for backend. Mongo-DB to store user info, and Angular for front end. Passwords are secured using jwt. They are stored as tokens on Mongo-DB. The app also uses protected routes that are only available if a user is logged and can't be accessed to everyone.
</p>

<h3> App Functionalities </h3>
<ul>
  <li>	Register User </li>
  <li>	Login user After registration </li>
  <li>	Handles Errors Checking and Form Validation </li>
  <li>	Display profile/dashboard page if a user logged in </li>
 </ul> 
<p>  
To run the application, please look at the package.json file and make sure all dependencies are installed. If not, please install them. For example, if you are missing the express server, you can simply install by running the command "npm install express". This assumes you already have Nodejs installed.
  
<p>
 <ul>
   <li>	Create empty folder in your workspace and clone the repository. </li>
   <li>	Once the repository has been cloned, please install node modules if you haven't already </li>
   <li>	Open two command prompt window and navigate to the directory </li>
<li>	In the first command prompt, please navigate into "angular-src" folder and run the command: "npx ng serve -o" </li>
   <li>	The above is used to launch our front-end application </li>
<li>	In the second command prompt and navigate to where the project is located but DO NOT navigate to angular-src folder. Then run "node app.js" </li>
   <li>	The above is used to launch our backend application </li>
</ul>

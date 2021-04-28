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

<p> Here is the pictures of the application running and showing the main pages </p>

<h3> Home Page/Landing Page </h3> 

<img width="1668" alt="Home:Landing Page" src="https://user-images.githubusercontent.com/65043805/116443731-9ad17880-a819-11eb-9426-2ccef8bb86c5.png">

<h3> Register Page </h3>
<img width="1679" alt="Registration page" src="https://user-images.githubusercontent.com/65043805/116443861-c6ecf980-a819-11eb-89f7-0ab96b26aec9.png">


<h3> Login Page </h3>
    <img width="1680" alt="Login Page" src="https://user-images.githubusercontent.com/65043805/116443892-cfddcb00-a819-11eb-95e9-e7410486caed.png">

<h3> DashBoard Page </h3>

<img width="1678" alt="DashBoard Page" src="https://user-images.githubusercontent.com/65043805/116443997-e6842200-a819-11eb-843e-dda896a32d80.png">


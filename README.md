Setup:
1.	Cloning Repository
a)	Clone the git repository at https://github.com/GregWith2Gs/Exalendar-React into your preferred folder.
b)	Install node package manager at https://docs.npmjs.com/downloading-and-installing-node-js-and-npm.
c)	Make sure you are in the local repository folder and run the command ‘npm install’ in your terminal (Powershell on Windows, terminal on MacOS and Linux).

2.	MySQL Workbench
a)	Download MySQL installer from https://dev.mysql.com/downloads/installer/
b)	Go through installation as normal, installing MySQL server and MySQL Workbench.
c)	Open MySQL Workbench, then click “Open file” and open up the “exlanedar.sql” that should be in your git repository inside of the “resources” folder. Then click the run query button. This will create the database on your local MySQL server.

3.	Running the Web Application
a)	If you are using Visual Studio, open up Visual Studio and open the folder in which your repository is cloned and open two terminal instances (Windows Powershell). If you are not using Visual Studio and are on Windows, open up 2 instances of Windows Powershell. 
b)	Making sure you are in the repository folder, type “npm start” into one of your terminal instances. This should open up an instance of the Exalendar React app that you can access at “http://localhost:3000/”
c)	Now, using the second terminal window making sure you are in the repository folder, “cd src” to navigate to the src folder. Now enter the command “node server.js.” This will start the backend server allowing its API endpoints to be visible. If you want to test out the API, download a program like Postman or Insomnia, the server’s endpoint is at “http://localhost:4000/”
d)	The entire web application should now be functional! You should be able to add events and have them added to the database using the form. You should be able to reload the page and keep all existing events that persist from the MySQL database.


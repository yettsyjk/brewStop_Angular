# brewStop_Angular
## Angular 8 app created by SOftware Developer Yettsy J Knapp 
1. Yettsy a Developer located in Denver, CO
1. Connect with [Yettsy](www.linkedin.com/in/yettsy-jo-knapp) !


## Setting up Angular App
1. Creating an app on Heroku using Angular8 
1. Install dependencies the Angular CLI with the following command: npm install -g @angular/cli
1. create a new Angular 8 project in CLI: ng new myapp for this app is pubCrawl so I enter ng new pubCrawl
## This install will prompt you two questions Answer them according to the answers below:

1. Routing: Would you like to add Angular routing? Answer is Yes                                                                          
2. CSS or SCSS: Which stylesheet format would you like to use? Answer is  CSS
    
## cd myapp 
## Running the Project
1. enter in CLI: ```ng serve -o --port=PORTNUMBER &``` this command keeps the port running on the port you requested 
1. the -o flag is optional but it opens up your default browser to the location htt://localhost:4200
1. Control C to close the port and exit the server. Keep in mind the ```&``` command target keeps the server running, ```fg``` for foreground and know which apps are still running in the background. Control C to exit any app server still running. 
1. Great rule of thumb is to close the ports you are not currently using ;)

## services 
1. services are special components are reusable throughout your app
1. Generate service Angular CLI: ng g s http
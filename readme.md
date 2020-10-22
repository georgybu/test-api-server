For start local server please run

`npm install`

`npm start`

Init repo:

`heroku git:remote -a test-api-server`

Deploy:

`git push heroku master`

Public URL:

https://test-api-server.herokuapp.com/

API:

- Reset Data:

    GET https://test-api-server.herokuapp.com/reset

- Login

    POST https://test-api-server.herokuapp.com/login
    
    BODY: any object

- Get Users

    GET https://test-api-server.herokuapp.com/users
    
- Get User Details
    
    GET https://test-api-server.herokuapp.com/users/:id
    
    EXAMPLE: https://test-api-server.herokuapp.com/users/1
    
- Update user details

    POST https://test-api-server.herokuapp.com/users/:id
 
    BODY: user object
 

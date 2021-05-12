# zuriCrudApp
A simple express App that performs CRUD operations and uses momgoDB as database
#DOCUMENTATION OF ROUTES
the home route is created as /api/v1/infos and it is connected to the infoRouter middleware.
the routes.js here are located in the routes folder. Here there are two routes, the "/" and the "/:id".
The former is used for the get (reads all the documents) and post (create new document) requests while the later one is used for get (read just one document based on the id provided), patch (updates a document based on id specified) and delete (deletes a document based on id) request.
# HEROKU APP
https://zuri-express-crud-app.herokuapp.com/api/v1/infos

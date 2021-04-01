# wallet-api
REST API powered by Node JS + Mongo Db  [Atlas]

Run following command to start locally 
node app.js 


API will use MongoDb cloud (Atlas) 
please update your credentials in config.json
 "connectionString":  "mongodb+srv://<atlasusername>:<atlaspass>@sandbox.v2ifo.mongodb.net/wallet?retryWrites=true&w=majority",
 
 API Endpints :
 1.UserModule : 
 SignUp      : /users/register : POST
 Login       : /users/authenticate   POST (Generate bearer token)   
 Update      : /users/:userId PUT (With bearer token)
 GetUserInfo : /users/:userId GET (With bearer token)
 
 TODO : Card module, Transaction module ...
 

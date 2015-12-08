// Dependencies
var route = require('koa-route');

// Route definitions
module.exports = function router(app)
{
  // Set TODO routes
  // app.use(route.get('/', require('./routes/list')));
  // app.use(route.get('/todo/new', require('./routes/add')));
  // app.use(route.get('/todo/:id', require('./routes/show')));
  // app.use(route.get('/todo/delete/:id', require('./routes/remove')));
  // app.use(route.get('/todo/edit/:id', require('./routes/edit')));
  // app.use(route.post('/todo/create', require('./routes/create')));
  // app.use(route.post('/todo/update', require('./routes/update')));
  
  //Set my routes
  app.use(route.get('/', function *(){
      this.body = 'Welcome to API v1, available routes is get /athletes/{?id} and post athletes';
  }));
  app.use(route.get('/athletes', require('./routes/athletes/getAthletes')));
  app.use(route.get('/athletes/:id', require('./routes/athletes/getAthlete')));
  app.use(route.post('/athletes', require('./routes/athletes/addAthlete')));
  
};
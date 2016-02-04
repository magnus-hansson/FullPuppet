var supertest = require('supertest');
var app = require("./server.js");
//var config = require('../config')();
var request = supertest.agent(app.listen());

describe('Our application', function () {
    it('has a simple root application', function (done) {
        request
            .get('/')
            .expect(200)
            .expect(function(res) {
        		res.body = 'Welcome to API v1, available routes is get /athletes/{?id} and post athletes';
        		
      		})
            .end(done);
    });
});

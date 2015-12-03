var supertest = require('supertest');
var app = require("./server.js");
//var config = require('../config')();
var request = supertest.agent(app.listen());

describe('Our application', function () {
    it('has a simple root application', function (done) {
        request
            .get('/')
            .expect(200)
            //.expect(/Find the APIs under/)
            .end(done);
    });
});

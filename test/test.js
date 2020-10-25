// Import the dependencies for testing
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Records", () => {
    describe("Post /", () => {
        it("Test 200 status code and object", (done) => {
             chai.request(app)
                 .post('/records/getFilteredRecord')
                 .end((err, res) => {
                     res.should.be.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
        
    });
});
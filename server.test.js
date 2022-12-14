const request = require("supertest");
const app = require('./routes/User');
const mongoose = require('mongoose');




describe("Test the root path", () => {
test("It should response the POST method", () => {
const response = request(app).post("http://localhost:8000/User/add"
).send ({
"Name": "Obaid",
"Email": "obaid",
"Age": 12,
"Contact": 123
})
expect(response.statusCode).toBe(200);
})
})

describe("Test the root path", () => {
    test("It should response the GET method", () => {
      const response = request(app)
        .post("http://localhost:8000/user/delete")
        .send({
          Name: "Zaryab Hasaan",
          Email: "i202487@nu.edu.pk",
          Age: 22,
          Contact: 3136900427,
        });
      expect(response.statusCode), toBe(200);
    });
  });
  
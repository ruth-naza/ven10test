const request = require("supertest");
const {app, server} = require("../../server.js")

// afterAll(async () => {
//   await new Promise(resolve => setTimeout(() => resolve(), 10000)); // avoid jest open handle error
// });

describe("GET /api/owners", () => {
	beforeEach((done) => {
		// server = app.listen(4000, (err) => {
		// 	if (err) return done(err);
		// 	agent = request.agent(server);
		// 	done();
		// });
		
	});

	afterEach((done) => {
	//  server.close(done);
	//  done();
	});

	// jest.setTimeout(30000);
	test("It should respond with an array of owners", async (done) => {
		const response = await request(app).get("/api/owners");
		const status = response.body.status;
		const result = response.body.data.result;
		expect(status).toBe("ok");
		expect(Array.isArray(result)).toBe(true);
		done();
	})
})

// describe("GET /api/owners", () => {
// 	// jest.setTimeout(30000);
// 	test("It should respond with an array of owners after filters are added", async () => {
// 		const response = await request(app).get("/api/owners/?countries=Ireland&colors=Red,Blue,Green&startYear=1999&endYear=2012&gender=Female");
// 		const status = response.body.status;
// 		const resultNumber = response.body.data.count;
// 		expect(status).toBe("ok");
// 		expect(resultNumber).toBe(16);
// 	})
// })
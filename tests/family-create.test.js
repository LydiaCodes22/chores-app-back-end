const { expect } = require("chai");
const request = require("supertest");
const getDB = require("../src/services/db");
const app = require("../src/app");

describe("create family", () => {
  let db;
  beforeEach(async () => (db = await getDB()));
  afterEach(async () => {
    await db.query("DELETE FROM Family");
    await db.close();
  });

  describe("/family", () => {
    describe("POST", () => {
      it("creates a new family in the database", async () => {
        const res = await request(app).post("/family").send({
          familyName: "The Smiths",
        });

        expect(res.status).to.equal(201);

        const [[familyEntry]] = await db.query(
          `SELECT * FROM Family WHERE familyName = 'The Smiths'`
        );

        expect(familyEntry.familyName).to.equal("The Smiths");
      });
    });
  });
});

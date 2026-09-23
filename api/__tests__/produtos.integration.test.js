const request = require("supertest")
const createApp = require("../app")

describe("API /produtos testes de integracao", () => {
    let app

    beforeEach(() => {
        app = createApp()
    })

    describe("GET /produtos", () => {
        test("retorna 200 e um array com os produtos iniciais", async () => {
            const res = await request(app).get("/produtos")
        })
    })
})
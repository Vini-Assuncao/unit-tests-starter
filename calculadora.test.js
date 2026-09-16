const {
    soma,
    subtrai,
    divide,
    ehPar,
    raiz,
    media,
} = require("./calculadora")

describe("soma", () => {
    test("Soma com dois números positivos", () => {
        expect(soma(2, 3)).toBe(5)    
    })

    test("Soma com dois números negativos", () => {
        expect(soma(-2, -3)).toBe(-5)
    })
})

describe("subtrai", () => {
    test("Subtração com resultado positivo", () => {
        expect(subtrai(8, 2)).toBe(4)
    })
    test("Subtração com resultado negativo", () => {
        expect(subtrai(1, 2)).toBe(-1)
    })
})



describe("raiz", () => {
    test("calcula a raiz de número não exato com precisão", () => {
        expect(raiz(2)).toBeCloseTo(1.414)
    })
    test("Lançar erro para número negativo", () => {
        expect(() => raiz(-4)).toThrow("Nao e possivel calcular raiz de numero negativo")
    })
})
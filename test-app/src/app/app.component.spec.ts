import { add } from './utils/add'

describe("The dummy test", () => {

  beforeEach(() => {

  })

  afterEach(() => {

  })

  beforeAll(() => {

  })

  afterAll(() => {

  })

  it("Test 01", () => {
    expect(true).toBeTruthy()
  })

  it("Test 02", () => {
    expect(true).toBe(true)
  })

  it("Should add two values", () => {
    expect(add(2,3)).toEqual(5);
  })


})

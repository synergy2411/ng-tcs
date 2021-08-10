import { DataService } from "./data.service"

describe("Test suites for Data Service", () => {

  let dataService : DataService;

  beforeEach(() => {
    dataService = new DataService()
  })
  afterEach( () => {
    dataService = null;
  })

  it("Should give me users array", () => {
    expect(dataService.getUsers().length).toEqual(2);
  })

  it("Should give me users array as observable", () => {
    dataService.getObs().subscribe(data => {
      expect(data).not.toBeUndefined();
    })
  })

  it("Should give me data once promise resolved", async () => {
    let response = null
    try{
       response = await dataService.getPromise()
      }catch(err){

      }
      expect(response).not.toBeUndefined();
  })
})

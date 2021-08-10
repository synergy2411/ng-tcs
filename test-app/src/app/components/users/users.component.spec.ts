import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from 'src/app/services/data.service';
import { UsersComponent } from './users.component';

describe("Test suite for UsersComponent", () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [],
      declarations :  [UsersComponent],
      providers :   [DataService]
    }).compileComponents()

  })

  let fixture : ComponentFixture<UsersComponent>
  let usersCmp : UsersComponent
  let dataService : DataService

  beforeEach(() => {

    fixture = TestBed.createComponent(UsersComponent)
    usersCmp = fixture.componentInstance;
    dataService = new DataService()
    fixture.detectChanges();
  })

  it("Should populate the users from DataService", () => {
    expect(usersCmp.users).toEqual(dataService.users)
  })

  it("Should users not to be null", () => {
    expect(usersCmp.users).not.toBeNull()
  })

  it("Should create the users", () => {
    expect(usersCmp).toBeTruthy()
  })

  it("Users component should have user - email and age", () => {
    expect(usersCmp.user.email).toEqual("test@test.com");
  })

  it("Users template should display email in h2 element", () => {
    let compiledTemplate = fixture.nativeElement;
    expect(compiledTemplate.querySelector('h2').textContent).toEqual("test@test.com");
  })

})

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersComponent } from './users.component';

describe("Test suite for UsersComponent", () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [],
      declarations :  [UsersComponent],
      providers :   []
    }).compileComponents()
  })

  let fixture : ComponentFixture<UsersComponent>
  let usersCmp : UsersComponent

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent)
    usersCmp = fixture.componentInstance;
  })

  it("Should create the users", () => {
    expect(usersCmp).toBeTruthy()
  })

  it("Users component should have user - email and age", () => {
    expect(usersCmp.user.email).toEqual("test@test.com");
  })

  it("Users template should display email in h2 element", () => {
    let compiledTemplate = fixture.nativeElement;
    fixture.detectChanges()
    expect(compiledTemplate.querySelector('h2').textContent).toEqual("test@test.com");
  })

})

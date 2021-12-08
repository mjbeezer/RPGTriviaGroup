/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { RegisterNewUserComponent } from './register-new-user.component';

let component: RegisterNewUserComponent;
let fixture: ComponentFixture<RegisterNewUserComponent>;

describe('registerNewUser component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ RegisterNewUserComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(RegisterNewUserComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
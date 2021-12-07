/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { UserprofileComponent } from './userprofile.component';

let component: UserprofileComponent;
let fixture: ComponentFixture<UserprofileComponent>;

describe('userprofile component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UserprofileComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(UserprofileComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { HeroesComponent } from './heroes.component';

let component: HeroesComponent;
let fixture: ComponentFixture<HeroesComponent>;

describe('Heroes component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HeroesComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(HeroesComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
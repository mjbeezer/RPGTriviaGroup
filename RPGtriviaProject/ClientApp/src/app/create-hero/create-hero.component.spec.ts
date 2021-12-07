/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { CreateHeroComponent } from './create-hero.component';

let component: CreateHeroComponent;
let fixture: ComponentFixture<CreateHeroComponent>;

describe('createHero component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CreateHeroComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(CreateHeroComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
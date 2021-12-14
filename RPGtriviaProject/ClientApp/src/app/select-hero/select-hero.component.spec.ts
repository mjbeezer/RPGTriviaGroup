/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { SelectHeroComponent } from './select-hero.component';

let component: SelectHeroComponent;
let fixture: ComponentFixture<SelectHeroComponent>;

describe('selectHero component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SelectHeroComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(SelectHeroComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
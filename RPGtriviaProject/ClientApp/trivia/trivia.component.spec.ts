/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { TriviaComponent } from './trivia.component';

let component: TriviaComponent;
let fixture: ComponentFixture<TriviaComponent>;

describe('Trivia component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TriviaComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(TriviaComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
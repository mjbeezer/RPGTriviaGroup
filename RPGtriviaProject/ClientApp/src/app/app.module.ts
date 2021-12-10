import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { TriviaComponent } from './trivia/trivia.component';
import { QuestionMasterComponent } from './question-master/question-master.component';
import { HeroesComponent } from './heroes/heroes.component';
import { VillainComponent } from './villain/villain.component';
import { PlayersComponent } from './players/players.component';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { RegisterNewUserComponent } from './register-new-user/register-new-user.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    TriviaComponent,
    QuestionMasterComponent,
    HeroesComponent,
    VillainComponent,
    PlayersComponent,
    CreateHeroComponent,
    RegisterNewUserComponent,
    UserprofileComponent
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'questions', component: QuestionMasterComponent },
      { path: 'villains', component: VillainComponent },
      { path: 'heroes', component: HeroesComponent },
      { path: 'players', component: PlayersComponent },
      { path: 'createhero', component: CreateHeroComponent },
      { path: 'register', component: RegisterNewUserComponent },
      { path: 'profile', component: UserprofileComponent }

    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

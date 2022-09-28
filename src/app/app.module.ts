import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WorkScreenComponent } from './work-screen/work-screen.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AbmPiezasScreenComponent } from './abm-piezas-screen/abm-piezas-screen.component';
import { WindmillCardComponent } from './windmill-card/windmill-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    NavBarComponent,
    WorkScreenComponent,
    AbmPiezasScreenComponent,
    WindmillCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

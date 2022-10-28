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
import { PrototypeDetailScreenComponent } from './prototype-detail-screen/prototype-detail-screen.component';
import { AbmPrototypesScreenComponent } from './abm-prototypes-screen/abm-prototypes-screen.component';
import { PrototypeCardComponent } from './prototype-card/prototype-card.component';
import { PieceCardComponent } from './piece-card/piece-card.component';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { WindmillModelComponent } from './windmill-model/windmill-model.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    NavBarComponent,
    WorkScreenComponent,
    AbmPiezasScreenComponent,
    PrototypeDetailScreenComponent,
    AbmPrototypesScreenComponent,
    PrototypeCardComponent,
    PieceCardComponent,
    AdminScreenComponent,
    WindmillModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatButtonToggleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

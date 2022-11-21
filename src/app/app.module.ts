import { InterceptorService } from './interceptors/interceptor.service';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RecoverPasswordScreenComponent } from './recover-password-screen/recover-password-screen.component';
import { GetCodePasswordScreenComponent } from './get-code-password-screen/get-code-password-screen.component';
import { UserCardComponent } from './user-card/user-card.component';
import { AddUserBtnComponent } from './add-user-btn/add-user-btn.component';
import { ApprovedScreenComponent } from './approved-screen/approved-screen.component';

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
    RecoverPasswordScreenComponent,
    GetCodePasswordScreenComponent,
    UserCardComponent,
    AddUserBtnComponent,
    ApprovedScreenComponent,
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

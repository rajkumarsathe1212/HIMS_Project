import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralModule } from './general/general.module';
import { LoginComponent } from './login/login.component';
import { MasterModule } from './master/master.module';
import { SharedModule } from './shared/shared.module';
import { WildCardComponent } from './wild-card/wild-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WildCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneralModule,
    SharedModule,
    MasterModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './components/alert';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { RegisterComponent } from './account/register.component';
import { SignupComponent } from './examples/signup/signup.component';
import { ResetPasswordComponent } from './account/reset-password/reset-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AgmCoreModule } from '@agm/core';
import { AccountRoutingModule } from './account/account-routing.module';
import { AccountModule } from './account/account.module';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    //AccountModule,
    //ExamplesModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBo5g3bCuE-_XSzmz6_7RC-R8d9YgkHILA'
    }),
    NgxMaskModule.forRoot(maskConfigFunction),


  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AlertComponent,
    AdminLayoutComponent,
    //RegisterComponent,
    SignupComponent,
    //ResetPasswordComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

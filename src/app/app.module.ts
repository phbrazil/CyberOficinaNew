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
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './components/alert';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { SignupComponent } from './examples/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AgmCoreModule } from '@agm/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  imports: [
    MatAutocompleteModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
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
    SignupComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from 'app/account/profile/profile.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        LandingComponent,
        //SignupComponent,
        //ProfileComponent
    ]
})
export class ExamplesModule { }

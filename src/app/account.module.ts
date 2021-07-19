import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './account/login/login.component';
import { ResetPasswordComponent } from './account/reset-password/reset-password.component';
import { RegisterComponent } from './account/register.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        //AccountRoutingModule
    ],
    declarations: [
        //LayoutComponent,
        LoginComponent,
        ResetPasswordComponent,
        RegisterComponent
    ]
})
export class AccountModule { }
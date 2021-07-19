import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { UserProfileComponent } from 'app/user-profile/user-profile.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { OrcamentoComponent } from 'app/orcamento/orcamento.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgxMaskModule.forRoot(maskConfigFunction),

  ],
  declarations: [
    DashboardComponent,
    OrcamentoComponent,
    UserProfileComponent,
    //TableListComponent,
    //TypographyComponent,
    //IconsComponent,
    //MapsComponent,
    //NotificationsComponent,
    //UpgradeComponent,
  ]
})

export class AdminLayoutModule { }

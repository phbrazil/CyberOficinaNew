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
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { OrcamentoComponent } from 'app/orcamento/orcamento.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { MeusOrcamentosComponent } from 'app/meus-orcamentos/meus-orcamentos.component';
import { EditUserProfileComponent } from 'app/account/edit-profile/edit-profile.component';
import { ProfileComponent } from 'app/account/profile/profile.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

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
    MatAutocompleteModule,
  ],
  declarations: [
    DashboardComponent,
    OrcamentoComponent,
    EditUserProfileComponent,
    ProfileComponent,
    MeusOrcamentosComponent
    //TableListComponent,
    //TypographyComponent,
    //IconsComponent,
    //MapsComponent,
    //NotificationsComponent,
    //UpgradeComponent,
  ]
})

export class AdminLayoutModule { }

import { Routes } from '@angular/router';
import { EditUserProfileComponent } from 'app/account/edit-profile/edit-profile.component';
import { ProfileComponent } from 'app/account/profile/profile.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { MeusOrcamentosComponent } from 'app/meus-orcamentos/meus-orcamentos.component';
import { OrcamentoComponent } from 'app/orcamento/orcamento.component';

export const AdminLayoutRoutes: Routes = [

    //NOVAS ROTAS INTERNAS DO SITE DEVEM SER INCLUIDAS AQUI
    { path: 'dashboard', component: DashboardComponent },
    { path: 'edit-profile', component: EditUserProfileComponent },
    { path: 'user-profile', component: ProfileComponent },
    { path: 'orcamento', component: OrcamentoComponent },
    { path: 'meus-orcamentos', component: MeusOrcamentosComponent },

];

import { Routes } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { MeusOrcamentosComponent } from 'app/meus-orcamentos/meus-orcamentos.component';
import { OrcamentoComponent } from 'app/orcamento/orcamento.component';
import { UserProfileComponent } from 'app/user-profile/user-profile.component';

export const AdminLayoutRoutes: Routes = [
    
    //NOVAS ROTAS INTERNAS DO SITE DEVEM SER INCLUIDAS AQUI
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'orcamento', component: OrcamentoComponent },
    { path: 'meus-orcamentos', component: MeusOrcamentosComponent },

];

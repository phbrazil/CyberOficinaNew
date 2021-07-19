import { Component, OnInit } from '@angular/core';
import { AccountService } from 'app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-meus-orcamentos',
  templateUrl: './meus-orcamentos.component.html',
  styleUrls: ['./meus-orcamentos.component.css']
})
export class MeusOrcamentosComponent implements OnInit {

  orcamentos = [];

  user = JSON.parse(localStorage.getItem('user'));

  constructor(private accountService: AccountService) { }

  ngOnInit() {

    this.listOrcs(this.user.id);
  }

   //LIST PENDING ORCS
   listOrcs(idUser: string) {

    this.accountService.listOrcs(idUser)
      .pipe(first())
      .subscribe(x => {

        this.orcamentos = x['orcamentos'];

      });
  }

}

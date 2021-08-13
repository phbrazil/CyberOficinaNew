import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  constructor(private accountService: AccountService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {

    this.listOrcs(this.user.id);
    
  }

  dataTable(){

    var $ = require('jquery');

    require('datatables.net')

    this.changeDetector.detectChanges();

    $('table').DataTable();


  }

   //LIST PENDING ORCS
   listOrcs(idUser: string) {

    this.accountService.listOrcs(idUser)
      .pipe(first())
      .subscribe(x => {

        this.orcamentos = x['orcamentos'];

        this.dataTable();

      });
  }

}

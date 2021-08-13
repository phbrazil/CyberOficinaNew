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

  dataTable() {

    //https://datatables.net/reference/option/language

    var $ = require('jquery');

    require('datatables.net')

    this.changeDetector.detectChanges();

    $('table').DataTable({
      "language": {
        "decimal": ",",
        "emptyTable": "No data available in table",
        "info": "Exibindo do _START_ ao _END_ de _TOTAL_ registros",
        "infoEmpty": "Exibindo 0 ao 0 de 0 registros",
        "infoFiltered": "(filtrado de _MAX_ registros no total)",
        "infoPostFix": "",
        "thousands": ".",
        "lengthMenu": "Exibindo _MENU_ registros",
        "loadingRecords": "Carregando...",
        "processing": "Processando...",
        "search": "Pesquisar:",
        "zeroRecords": "Nenhum registro encontrado",
        "paginate": {
          "first": "Primeiro",
          "last": "Último",
          "next": "Próximo",
          "previous": "Anterior"
        },
        "aria": {
          "sortAscending": ": activate to sort column ascending",
          "sortDescending": ": activate to sort column descending"
        }
      }
    });


  }

  //LIST PENDING ORCS
  listOrcs(idUser: string) {

    this.accountService.listOrcs(idUser)
      .pipe(first())
      .subscribe(x => {

        this.orcamentos = x['orcamentos'];

        console.log(this.orcamentos)

        this.dataTable();

      });
  }

}

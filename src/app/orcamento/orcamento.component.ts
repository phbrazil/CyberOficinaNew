import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from 'app/_services';
import { Observable } from 'rxjs';
import { first, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.css']
})


export class OrcamentoComponent implements OnInit {

  orcamento: FormGroup;
  loading = false;
  submitted = false;
  isVeiculo = false;
  isNaoLiga = true;
  isBarulho = true;
  isNaoSeiProb = true;

  ready = false;

  marcas = [
  ]

  veiculos = [
  ]

  prioridades = [
    {
      id: 1,
      nome: 'Baixa'
    },
    {
      id: 2,
      nome: 'Média'
    },
    {
      id: 3,
      nome: 'Alta'
    },
  ]

  constructor(private formBuilder: FormBuilder, private alertService: AlertService,
    private accountService: AccountService) { }

  ngOnInit() {

    this.orcamento = this.formBuilder.group({
      marca: ['', Validators.required],
      veiculo: ['', Validators.required],
      urgencia: ['', Validators.required],
      isMecSemOfic: ['', Validators.required]

      //cidade: ['', Validators.required],     
      //estado: ['', Validators.required],    
      //uf: ['', Validators.required],    
    });

    this.listFabricantes();

  }

  checkVeiculo(marca: String) {

    this.orcamento.get('veiculo').setValue('')

    this.veiculos = [];

    this.isVeiculo = false;

    this.marcas.forEach(element => {
      if (element.nome == marca) {
        this.isVeiculo = true;
      }

    });

    if (!this.isVeiculo) {
      this.isBarulho = true;
      this.isNaoLiga = true;
      this.isNaoSeiProb = true;
      this.orcamento.reset();
      this.alertService.error('Selecione o Fabricante do veículo');
    } else {

      this.accountService.listVeiculos(marca)
        .pipe(first())
        .subscribe(x => {

          this.veiculos = x['veiculos'];

        });

    }

  }

  checkSintoma(option: string) {

    if (option == 'isNaoLiga') {
      this.isNaoLiga = true;
      this.isBarulho = false;
      this.isNaoSeiProb = false;
    } else if (option == 'isBarulho') {
      this.isNaoLiga = false;
      this.isBarulho = true;
      this.isNaoSeiProb = false;
    } else if (option == 'isNaoSeiProb') {
      this.isNaoLiga = false;
      this.isBarulho = false;
      this.isNaoSeiProb = true;
    }

  }

  onSubmit() {


  }


  listFabricantes() {
    
    this.veiculos = [];

    this.loading = true;

    this.accountService.listFabricantes()
      .pipe(first())
      .subscribe(x => {

        x.fabricantes.forEach((fabricante, index) => {

          this.marcas.push({ id: index, nome: fabricante },)

          this.loading = false;

        });

      });


  }


}

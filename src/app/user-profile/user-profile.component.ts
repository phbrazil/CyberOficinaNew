import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService, AlertService } from 'app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  profile: FormGroup;
  submitted = false;

  user = JSON.parse(localStorage.getItem('user'));

  isLoading = false;
  isLoadingCEP = false;

  //DADOS SENSIVEIS
  nome
  email
  logradouro
  numero
  complemento
  bairro
  cidade
  uf
  pais
  cep
  empresa
  cpf
  celular
  telefone

  //SE FOR ESPECIALISTA OU CLIENTE
  spec = true;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) { }


  //MASKS
  getCepMask(): string {
    return '00000-009';
  }


  ngOnInit() {

    this.profile = this.formBuilder.group({
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      //estado: ['', Validators.required],
      uf: ['', Validators.required],
      pais: ['', Validators.required],

    });

    this.isLoading = true;

    this.accountService.getById(this.user.id)
      .pipe(first())
      .subscribe(
        data => {
          this.cpf = data.cpf;
          this.cep = data.cep;
          this.nome = data.nome;
          this.email = data.email;
          this.pais = 'Brasil';
          this.cep = data.cep;
          this.logradouro = data.rua;
          this.numero = data.numero;
          this.complemento = data.complemento;
          this.bairro = data.bairro;
          this.cidade = data.cidade;
          this.uf = data.uf;
          this.empresa = '9ember';
          this.celular = data.celular;
          this.telefone = data.telefone;

          this.isLoading = false;

          this.loadCurrentAddress();

        },
        error => {
          this.isLoading = false;
          this.alertService.error(`Erro ${error.status}, favor tentar novamente mais tarde`);
        });


  }

  get a() { return this.profile.controls; }

  getCep(cep: string): void {

    cep = cep.replace(/\D/g, '');

    if (cep !== '') {

      const validaCep = /^[0-9]{8}$/;

      if (validaCep.test(cep)) {

        this.accountService.cep(cep)
          .pipe(first())
          .subscribe(
            dados => {

              this.patchNewAddress(dados);

            },
            error => {

              //LIMPA FORMULARIO SE CEP FOR INVALIDO
              let address = {
                logradouro: '',
                bairro: '',
                cidade: '',
                estado: '',
                uf: '',
                cep: ''
              }

              this.profile.patchValue(address);

              this.alertService.error("Cep inválido");
              this.isLoadingCEP = false;
            });
      } else {

        //LIMPA FORMULARIO SE CEP FOR INVALIDO
        let address = {
          logradouro: '',
          bairro: '',
          cidade: '',
          estado: '',
          uf: '',
          cep: ''
        }

        this.profile.patchValue(address);

        this.alertService.error("Cep inválido");

      }
    }
  }

  patchNewAddress(dados) {

    let address = {
      logradouro: dados.dados.logradouro,
      bairro: dados.dados.bairro,
      cidade: dados.dados.cidade,
      estado: dados.dados.estado,
      complemento: dados.dados.complemento,
      uf: dados.dados.uf,
    }

    this.profile.patchValue(address);
  }

  loadCurrentAddress() {

    let currentAddress = {
      cep: this.cep,
      logradouro: this.logradouro,
      numero: this.numero,
      bairro: this.bairro,
      cidade: this.cidade,
      estado: this.uf,
      complemento: this.complemento,
      uf: this.uf,
      pais: 'Brasil'
    }

    this.profile.patchValue(currentAddress);
  }

  onSubmit() {

    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.profile.invalid) {

      return;
    }


    this.isLoading = true;
    this.accountService.update(this.user.id, this.profile.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Dados atualizados com sucesso', { keepAfterRouteChange: true });
          this.ngOnInit();
          //this.router.navigate(['../login'], { relativeTo: this.route });
        },
        error => {
          this.alertService.error("Occorreu um erro, tente novamente mais tarde: Status ", error.status);
          this.isLoading = false;
        });
  }

}

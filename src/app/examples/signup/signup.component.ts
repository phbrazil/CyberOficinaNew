import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService, AlertService } from 'app/_services';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;

    form: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
          });
      
          // get return url from route parameters or default to '/'
          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    get f() { return this.form.controls; }

    onSubmit() {

      this.submitted = true;
    
        // reset alerts on submit
        this.alertService.clear();
    
        // stop here if form is invalid
        if (this.form.invalid) {
          return;
        }
    
    
        this.loading = true;
    
        this.accountService.login(this.f.username.value, this.f.password.value)
          .pipe(first())
          .subscribe(
            data => {    
              this.router.navigate([this.returnUrl]);
            },
            error => {
              if (error.status == 401) {
                this.alertService.error('Acesso Negado');
              } else {
                this.alertService.error(error.status);
    
              }
              this.loading = false;
            });
      }
    
}

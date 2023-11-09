import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthApiService } from '../../auth/Service/auth-api.service';
import { Router } from '@angular/router';
import { ErrorDialogService } from 'src/app/modules/service/api/error-dialog.service';
import { SnackbarComponent } from 'src/app/shared/snackbar/snackbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isLoginSuccess: boolean = true;
  myForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthApiService,
    private router: Router,
    private errorDialogService: ErrorDialogService,
    private snackBar: SnackbarComponent,
  ){
    this.myForm = this.formBuilder.group({
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.email,
        ])
      ],
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
        ])
      ]
    })
  }

  ngOnInit(){
  }

  login(){
    this.isLoginSuccess = false;
    this.authService.getLogin(this.myForm.value).subscribe(
      (response) => {
        sessionStorage.setItem('token', response.success);
        this.router.navigate(['/dashboard/tour']);
        this.snackBar.openSnackBar("Login Success", 'success-snackbar')
      },
      (error) => {
        this.isLoginSuccess = true;
        let messageError = error.error.error
        if (!messageError) {
          messageError = 'Lỗi Nghiêm Trọng';
        }
        this.errorDialogService.openErrorDialog(messageError);
      },
    );
  }

  showRegisterPage(){
    this.router.navigate(['/register']);
  }

}

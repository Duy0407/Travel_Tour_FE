import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthApiService } from '../../auth/Service/auth-api.service';
import { Router } from '@angular/router';
import { passwordMatchValidator } from './custom-validator/passwordMatchValidator';
import { SnackbarComponent } from 'src/app/shared/snackbar/snackbar.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public isRegisterSuccess: boolean = true;
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthApiService,
    private router: Router,
    private snackBar: SnackbarComponent,
  ){
    this.registerForm = this.formBuilder.group({
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
      ],
      password_confirmation: [
        "",
        Validators.compose([
          Validators.required,
        ])
      ],
      name: [
        "",
        Validators.required,
      ],
      phone: [
        "",
        Validators.required,
      ]
    }, 
    // {validators: passwordMatchValidator()}
    )
  }

  ngOnInit(): void {
  }

  register(){
    console.log(this.registerForm.value);
    
    this.isRegisterSuccess = false;
    this.authService.getRegister(this.registerForm.value).subscribe(
      (response) => {
        this.router.navigate(['/login']);
        this.snackBar.openSnackBar("Register Success", 'success-snackbar')
      },
      (error) => {
        this.isRegisterSuccess = true;
        let messageError = error.error.error
        if (!messageError) {
          messageError = 'Lỗi Nghiêm Trọng';
        }
        this.snackBar.openSnackBar(messageError, 'error-snackbar')
      }
    )
  }

  showLoginPage(){
    this.router.navigate(['/login']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder,UntypedFormControl,UntypedFormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared/service/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
  
  loginForm: UntypedFormGroup;
  showPassword:boolean = false;
  loading:boolean = false;
  users: any[] = [];

  get email(): UntypedFormControl {
    return this.loginForm.get('email') as UntypedFormControl;
  }

  get password(): UntypedFormControl {
    return this.loginForm.get('password') as UntypedFormControl;
  }

  constructor(
    private router: Router,
    private fb: UntypedFormBuilder,
    private _sharedService: SharedService,
    private toastService: ToastrService
  ) { }

  ngOnInit(): void {
   this.createLoginForm();
   this.getUsersList();
  }

  createLoginForm(): void {
     this.loginForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password: ['',  [Validators.required]]
     })
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  getUsersList() {
    this._sharedService.getUsersList().subscribe({
      next:(users) => {
        users.forEach((user) => {
          this.users.push(user.email);
          
        })
      }
    })
  }

  checkAuth(email:string): boolean {
    let i = 0
    for( i = 0; i< this.users.length ; i++ ){
      if(email == this.users[i]){
        return true;
      }
    }
    return false;
  }

  login(): void {

    if(this.loginForm.valid){

    if(this.checkAuth(this.loginForm.value.email) && this.loginForm.value.password === '123456') {
       localStorage.setItem('token',this.loginForm.value.email);
       this.toastService.success('Login Successfully', 'Success');
       this._sharedService.isUserLoggedIn.next(true);
       this.router.navigate(['/']);
    }else {
       this.toastService.warning('Email or Password is wrong!!!','Login Failed!!!')
    }
    }
  }

}

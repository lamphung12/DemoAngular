import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    password : new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('password',Validators.required),
    country: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    gender: new FormControl(''),
    phone: new FormControl('',Validators.minLength(9))
  })
  obj: any;

  constructor() { }

  ngOnInit(): void {
  }
  re(){
    alert("Đăng ký thành công")
  }

  register(){
    console.log(this.form.value)
    this.obj={
      email : this.form.value.email,
      password : this.form.value.password,
      confirmPassword: this.form.value.confirmPassword,
      country: this.form.value.country,
      age: this.form.value.age,
      gender: this.form.value.gender,
      phone: this.form.value.phone
    }


  }

}

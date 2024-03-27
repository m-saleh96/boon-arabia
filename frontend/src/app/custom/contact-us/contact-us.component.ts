import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  errors:string[] = [];

  constructor (private registerService:RegisterService , private router:Router){}

  ngOnInit(): void {
  }

  registerForm:FormGroup = new FormGroup({
    'name':new FormControl(null , [Validators.required , Validators.minLength(8) , Validators.maxLength(20)]),
    'email':new FormControl(null , [Validators.email , Validators.required]),
    'phone': new FormControl(null, [Validators.required, Validators.pattern('^01\\d{9}$')])
  });


  submit(registerForm:any)
  {
    this.registerService.register(registerForm.value).subscribe(res=>{
      if (res.message === "success") {
        this.errors = [];
        this.registerForm.reset();
        this.router.navigate(['/payment']);
      }

    },(error)=>{
      this.errors = error.error.errors;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './app.component.product.html',
  styleUrls: ['./app.component.product.css']
})
export class AppComponentProduct implements OnInit {
  title:String = "Test Products";	
  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
	  
      fieldName: ['', Validators.required ],
      fiedType: ['', Validators.required ],
	  achive: ['', Validators.required ],
	  select: ['', Validators.required ]
    });
  }

  reset() {
    this.angForm.reset();
	}

  ngOnInit() {
  }
}

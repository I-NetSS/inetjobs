import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'searchJobs',
  templateUrl: './app.component.search.jobs.html',
  styleUrls: ['./app.component.search.jobs.css']
})
export class SearchJobs implements OnInit {
  title:String = "I-NET Search Jobs";	
  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({	  
      jobLocation: ['', Validators.required ],
      jobType : ['', Validators.required ],
	  jobRole : ['', Validators.required ],
	  distance : ['', Validators.required ]
    });
  }

  reset() {
    this.angForm.reset();
	}

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { AdminService, AdminResponseData } from './admin.service'
import { Observable} from 'rxjs'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isLoading = false;
  error = null

  constructor( 
    private adminService: AdminService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    if (!form.valid) { return }
    console.log("form on submit", form.value)
    const email = form.value.email
    const password = form.value.password
    let adminObservable: Observable<AdminResponseData>
    
    adminObservable = this.adminService.signIn(email, password)
    this.isLoading = true

    adminObservable.subscribe(responseData => {
      console.log("res data", responseData)
      this.isLoading = false
      this.router.navigate(['/admin/edit'])
    }, errorMessage => {
      console.log("error", errorMessage)
      this.isLoading = false
      this.error = errorMessage
    })
    form.reset()
  }


}

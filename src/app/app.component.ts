import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    username;
    formdata;
    ngOnInit() {
        this.formdata = new FormGroup({
            username: new FormControl("Freetuts.net", Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(20)
            ])),
            pwd: new FormControl("abcd1234", this.pwdLengthValidator)
        });
    }
    onClickSubmit(data) { this.username = data.username; }
    pwdLengthValidator(control){
      if(control.value.length < 6){
          return {pwd: true};
      }
  }
}

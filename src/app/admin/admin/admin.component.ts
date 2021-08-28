import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { addCustomCard } from 'src/app/redux/actions';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  title: string = '';
  description: string = '';
  img: string = '';
  video: string = '';

  constructor(private store: Store, private router: Router) { }

  onSubmit(form: NgForm) {
    this.title = form.value.title?.trim();
    this.description = form.value.description?.trim();
    this.img = form.value.img?.trim();
    this.video = form.value.video?.trim();
    let date: string = new Date().toISOString();

    if (this.title && this.description && this.img && this.video) {
      this.store.dispatch(addCustomCard({ title: this.title, description: this.description, img: this.img, video: this.video, date: date, id: uuidv4() }));
      form.resetForm();
      this.router.navigate(['/youtube']);
    } else {
      alert("Please, fill in all fields!");
    }
  }

}

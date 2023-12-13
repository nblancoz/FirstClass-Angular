import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  onSubmit() {
    console.log('form', this.contactForm.value);
    this.contactForm.reset();
  }
}

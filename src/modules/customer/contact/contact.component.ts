import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  public countries: any[] = [
    {
      id: 1,
      name: 'Vietnam',
      cities: ['Hanoi', 'Ho Chi Minh City', 'Da Nang'],
    },
    { id: 2, name: 'USA', cities: ['New York', 'Los Angeles', 'Chicago'] },
    { id: 3, name: 'Japan', cities: ['Tokyo', 'Osaka', 'Kyoto'] },
  ];

  public cities: any[] = [];

  public formContact!: FormGroup;

  ngOnInit(): void {
    this.formContact = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      country: new FormControl(''),
      city: new FormControl(''),
    });

    if (this.cities.length <= 0) {
      this.formContact.get('city')?.disable();
    }

    this.formContact
      .get('country')
      ?.valueChanges.subscribe((countryId: string) => {
        const selectedCountry = this.countries.find(
          (country) => country.id == countryId
        );
        this.formContact.get('city')?.enable();
        this.cities = selectedCountry ? selectedCountry.cities : [];

        this.formContact.get('city')?.setValue('');
      });
  }

  public onSubmit(): void {
    console.log(this.formContact.value);
    this.formContact.reset();
  }
}

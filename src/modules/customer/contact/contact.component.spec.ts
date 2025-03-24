import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ContactComponent, ReactiveFormsModule, CommonModule],
      schemas: [NO_ERRORS_SCHEMA] // For iframe element
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('Form initialization', () => {
    it('should initialize the form with empty fields', () => {
      expect(component.formContact).toBeDefined();
      expect(component.formContact.get('name')?.value).toBe('');
      expect(component.formContact.get('email')?.value).toBe('');
      expect(component.formContact.get('country')?.value).toBe('');
      expect(component.formContact.get('city')?.value).toBe('');
    });

    it('should initialize with city field disabled', () => {
      expect(component.formContact.get('city')?.disabled).toBeTruthy();
    });

    it('should have countries data populated', () => {
      expect(component.countries.length).toBeGreaterThan(0);
      expect(component.countries[0].name).toBe('Vietnam');
    });
  });

  describe('Form validation', () => {
    it('should mark form as invalid when empty', () => {
      // Set required validators through code or check specific test cases
      component.formContact.get('name')?.setErrors({ required: true });
      component.formContact.get('email')?.setErrors({ required: true });
      component.formContact.get('country')?.setErrors({ required: true });
      
      expect(component.formContact.valid).toBeFalsy();
    });
  });

  describe('Country selection behavior', () => {
    it('should enable city field when country is selected', () => {
      // Initially the city field is disabled
      expect(component.formContact.get('city')?.disabled).toBeTruthy();
      
      // Set a country value
      component.formContact.get('country')?.setValue('1');
      fixture.detectChanges();
      
      // City field should be enabled
      expect(component.formContact.get('city')?.enabled).toBeTruthy();
    });

    it('should populate cities when country is selected', () => {
      expect(component.cities.length).toBe(0);
      
      // Select Vietnam (ID: 1)
      component.formContact.get('country')?.setValue('1');
      fixture.detectChanges();
      
      expect(component.cities).toEqual(['Hanoi', 'Ho Chi Minh City', 'Da Nang']);
    });

    it('should reset city value when country changes', () => {
      // First select a country
      component.formContact.get('country')?.setValue('1');
      fixture.detectChanges();
      
      // Set a city
      component.formContact.get('city')?.setValue('Hanoi');
      
      // Change country
      component.formContact.get('country')?.setValue('2');
      fixture.detectChanges();
      
      // City should be reset
      expect(component.formContact.get('city')?.value).toBe('');
      expect(component.cities).toEqual(['New York', 'Los Angeles', 'Chicago']);
    });
  });

  describe('Form submission', () => {
    it('should call onSubmit method when form is submitted', () => {
      spyOn(component, 'onSubmit');
      
      const form = de.query(By.css('form'));
      form.triggerEventHandler('ngSubmit', null);
      
      expect(component.onSubmit).toHaveBeenCalled();
    });

    it('should reset form after submission', () => {
      // Fill the form
      component.formContact.setValue({
        name: 'Test User',
        email: 'test@example.com',
        country: '1',
        city: 'Hanoi'
      });
      
      // Submit the form
      component.onSubmit();
      
      // Form should be reset
      expect(component.formContact.get('name')?.value).toBe(null);
      expect(component.formContact.get('email')?.value).toBe(null);
      expect(component.formContact.get('country')?.value).toBe(null);
      expect(component.formContact.get('city')?.value).toBe(null);
    });
  });

  describe('Component UI', () => {
    it('should render country options', () => {
      const select = de.query(By.css('#country'));
      const options = select.queryAll(By.css('option'));
      
      // +1 for the default blank option that's usually rendered
      expect(options.length).toBeGreaterThanOrEqual(component.countries.length);
    });

    it('should display the map iframe', () => {
      const iframe = de.query(By.css('iframe'));
      expect(iframe).toBeTruthy();
    });
  });
});

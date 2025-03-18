import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { SupplierModel } from '../../../../models/supplier/supplier.model';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  FontAwesomeModule,
  IconDefinition,
} from '@fortawesome/angular-fontawesome';
import { faRotate, faSave } from '@fortawesome/free-solid-svg-icons';
import { ISupplierService } from '../../../../services/supplier/supplier-service.interface';
import { ServicesModule } from '../../../../services/services.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supplier-detail',
  imports: [
    ReactiveFormsModule,
    FontAwesomeModule,
    ServicesModule,
    CommonModule,
  ],
  templateUrl: './supplier-detail.component.html',
  styleUrl: './supplier-detail.component.css',
})
export class SupplierDetailComponent implements OnInit {
  //#region Font Awesome icons
  public faSave: IconDefinition = faSave;
  public faRotate: IconDefinition = faRotate;

  public form!: FormGroup;
  public name: string = '';

  @Input() public selectedItem!: SupplierModel | undefined | null;
  @Output() public onClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    @Inject('ISupplierService') private supplierService: ISupplierService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  public createForm() {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
      ]),
      address: new FormControl('', [Validators.maxLength(500)]),
      phoneNumber: new FormControl('', [Validators.maxLength(12)]),
      isActive: new FormControl(true),
    });

    this.updateForm();
  }
  private updateForm(): void {
    this.form.patchValue(this.selectedItem as any);
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const data: SupplierModel = this.form.value;

    // Call API
    if (this.selectedItem) {
      // Update
      // Assign id to data
      Object.assign(data, { id: this.selectedItem.id });

      this.supplierService
        .update(this.selectedItem.id, data)
        .subscribe((res) => {
          if (res) {
            console.log('Update success');
            // Search data again
            // Close detail
            this.onClose.emit();
          } else {
            console.log('Update failed');
          }
        });
    } else {
      // Create
      this.supplierService.create(data).subscribe((res) => {
        if (res) {
          console.log('Create success');
          // Search data again
          // Close detail
          this.onClose.emit();
        } else {
          console.log('Create failed');
        }
      });
    }
  }
}

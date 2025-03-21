import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { CategoryModel } from '../../../../models/category/category.model';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  FontAwesomeModule,
  IconDefinition,
} from '@fortawesome/angular-fontawesome';
import { faRotate, faSave } from '@fortawesome/free-solid-svg-icons';
import { ICategoryService } from '../../../../services/category/category-service.interface';
import { ServicesModule } from '../../../../services/services.module';
import { CommonModule } from '@angular/common';
import { CATEGORY_SERVICE } from '../../../../constants/injection.constant';

@Component({
  selector: 'app-category-detail',
  imports: [
    ReactiveFormsModule,
    FontAwesomeModule,
    ServicesModule,
    CommonModule,
  ],
  templateUrl: './category-detail.component.html',
  styleUrl: './category-detail.component.css',
})
export class CategoryDetailComponent implements OnInit {
  //#region Font Awesome icons
  public faSave: IconDefinition = faSave;
  public faRotate: IconDefinition = faRotate;

  public form!: FormGroup;

  @Input() public selectedItem!: CategoryModel | undefined | null;
  @Output() public onClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    @Inject(CATEGORY_SERVICE) private categoryService: ICategoryService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.updateForm();
  }

  public createForm() {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
      ]),
      description: new FormControl('', [Validators.maxLength(500)]),
    });
  }
  private updateForm(): void {
    this.form.patchValue(this.selectedItem as any);
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const data: CategoryModel = this.form.value;

    // Call API
    if (this.selectedItem) {
      // Update
      // Assign id to data
      Object.assign(data, { id: this.selectedItem.id });

      this.categoryService
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
      this.categoryService.create(data).subscribe((res) => {
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

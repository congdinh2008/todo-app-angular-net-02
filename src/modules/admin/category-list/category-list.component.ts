import { CommonModule } from '@angular/common';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { CategoryModel } from '../../../models/category/category.model';
import { ICategoryService } from '../../../services/category/category-service.interface';
import { CategoryService } from '../../../services/category/category.service.service';

@Component({
  selector: 'app-category-list',
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent implements OnInit {
  public categories: CategoryModel[] = [];
  private categoryService: CategoryService = inject(CategoryService);

  constructor() {}

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.categoryService.getAll().subscribe((data) => {
      this.categories = data;
    });
  }
}

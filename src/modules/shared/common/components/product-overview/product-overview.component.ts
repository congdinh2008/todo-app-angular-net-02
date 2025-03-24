import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ProductModel } from '../../../../../models/product/product.model';

@Component({
  selector: 'app-product-overview',
  imports: [],
  templateUrl: './product-overview.component.html',
  styleUrl: './product-overview.component.css',
})
export class ProductOverviewComponent implements OnChanges, OnInit {
  @Input() public item!: ProductModel | null;

  constructor() {
    console.log('ProductOverviewComponent constructor called');
    console.log(this.item);
    
  }

  ngOnInit(): void {
    console.log('ProductOverviewComponent ngOnInit called');
    console.log(this.item);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ProductOverviewComponent ngOnChanges called');
    console.log(this.item);
  }

  ngDoCheck(): void {
    console.log('ProductOverviewComponent ngDoCheck called');
  }

  ngViewInit(): void {
    console.log('ProductOverviewComponent ngViewInit called');
  }
  
  ngAfterViewInit(): void {
    console.log('ProductOverviewComponent ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    console.log('ProductOverviewComponent ngAfterViewChecked called');
  }
}

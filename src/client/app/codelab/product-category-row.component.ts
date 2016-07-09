import { Component, Input } from '@angular/core';
import { Category } from './model/category.model';
import { ProductRow } from './product-row.component';

@Component({
    selector: 'product-category-row',
    template: `
        <tr><th colspan="2">{{ category?.name }}</th></tr>
        <product-row [product]="product" *ngFor="let product of category?.products"></product-row>
    `,
    directives: [ProductRow]
})
export class ProductCategoryRow {
    @Input() category: Category;
}
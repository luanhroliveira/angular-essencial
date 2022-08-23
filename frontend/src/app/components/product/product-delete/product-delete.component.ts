import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../product.model";

@Component({
    selector: 'app-product-delete',
    templateUrl: './product-delete.component.html',
    styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

    product: Product = {
        name: '',
        price: 0
    }

    constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id')
        if (id != null) {
            this.productService.readById(id).subscribe(product => {
                this.product = product
            })
        }
    }

    deleteProduct(): void {
        const id = this.product.id
        if (id != null) {
            this.productService.delete(id.toString()).subscribe(() => {
                this.productService.showMessage(`Produto de id: ${id} deletado com sucesso!`)
                this.returnToProductsPage()
            })
        }
    }

    cancel(): void {
        this.returnToProductsPage()
    }

    returnToProductsPage(): void {
        this.router.navigate(['/products'])
    }
}

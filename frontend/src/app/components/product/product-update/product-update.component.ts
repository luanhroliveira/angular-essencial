import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-product-update',
    templateUrl: './product-update.component.html',
    styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

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

    updateProduct(): void {
        this.productService.update(this.product).subscribe(() => {
            this.productService.showMessage('Produto atualizado com sucesso!')
            this.returnToProductsPage()
        })
    }

    cancel(): void {
        this.returnToProductsPage()
    }

    returnToProductsPage(): void {
        this.router.navigate(['/products'])
    }
}

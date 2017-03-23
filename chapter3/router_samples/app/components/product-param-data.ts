import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'product',
    template: `
        <h1 class="product">Product Details for Product: {{productID}}</h1>
        <h2>Is prod environment? {{isProdEnviorment}}</h2>
    `,
    styles: ['.product { background: cyan }']
})

export class ProductDetailComponentParam {
    productID: string;
    isProdEnviorment: string;

    constructor(route: ActivatedRoute) {
        this.productID = route.snapshot.params['id'];
        this.isProdEnviorment = route.snapshot.data[0]['isProd'];

        console.log("this.isProdEnviorment = " + this.isProdEnviorment);
    }
}
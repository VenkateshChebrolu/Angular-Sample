import { Component, OnInit } from "@angular/core";
import {IProduct} from "./Iproduct";
import {productservice} from './product.service'

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls : ['./product-list.component.css' ]
})

export class productListComponent implements OnInit{
  
    pageTitle: string = "Product List";
    imageWidth: number = 100;
    imageMargin : number = 2;
    showImage : boolean = false;
    errormessage : string;
    //listitem : string = "cart";
    
    _listitem : string;
    get listfilter(): string{
        return this._listitem;
    }
    set listfilter(value:string){
        this._listitem = value;
        this.FilteredProducts = this._listitem ? this.performfilter(this._listitem) : this.Products;
    }
    
    FilteredProducts : IProduct[];
    Products : IProduct[] = [];

    toogleImage() : void {
        this.showImage = !this.showImage;
    }
       
    constructor(private product : productservice){
    }

    performfilter(Filtervalue:string):IProduct[] {
        Filtervalue = Filtervalue.toLocaleLowerCase();
        return this.Products.filter((product: IProduct) => product.ProductName.toLocaleLowerCase().indexOf(Filtervalue) !== -1);

    }

    ngOnInit():void {
        this.product.getproducts().subscribe(
         products => {
             this.Products = products,
             this.FilteredProducts =this.Products
         },
         error => this.errormessage = <any>error
        );
        
        console.log('NgOnit fired');
    }

    onRatingClicked(message: string):void{
        this.pageTitle = message;
    }
}
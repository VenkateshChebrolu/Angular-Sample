import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router){
    
  } 

  ngOnInit() {
    let  id = +this.route.snapshot.paramMap.get('id');
  }

  onBack():void{
    this.router.navigate(['/products']);
  }

}

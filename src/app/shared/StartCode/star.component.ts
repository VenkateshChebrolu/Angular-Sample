import {Component,OnChanges, Input, Output, EventEmitter, OnInit} from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl :'./star.component.html',
    styleUrls : ['./star.component.css']
})

export class startcomponent implements OnInit{
    @Input() rating : number;
    starwidth: number;
    @Output() ratingclicked : EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges():void{
        this.starwidth = this.rating * 75/5;
        //console.log('star called 1');
    }

    ngOnInit():void{
        //console.log('star called 2');
    }

    onClick():void{
        this.ratingclicked.emit(`The rating ${this.rating} was clicked`);
    }
}
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	zoom: number = 8;
	coordinates: number[] = [
	59.3923323,
	27.7815591,
	59.3814439,
	28.1729324,
	59.3273979,
	27.4200887,
	59.4032896,
	27.2880443
	];
	// lat: number = 59.3923323;
	// lng: number = 27.7815591;
	// lat2: number = 59.3814439;
	// lng2: number = 28.1729324;

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items-productes',
  templateUrl: './items-productes.component.html',
  styleUrls: ['./items-productes.component.css']
})
export class ItemsProductesComponent {

 @Input() mypro:any;
}

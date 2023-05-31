import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-intrandt',
  templateUrl: './intrandt.component.html',
  styleUrls: ['./intrandt.component.css']
})
export class IntrandtComponent {

  @Input() mytra:any;

}

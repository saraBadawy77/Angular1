import { Component } from '@angular/core';
import { Ibox } from 'src/app/model/ibox';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {

  boxlist: Ibox[] = [
    {
      p: " 20% OFF THE ALL ORDER",
      description: "Spring Collection ",
      img: " assets/img/d1.png"
    },
    {
      p: " 30% OFF THE ALL ORDER",
      description: "summer Collection ",
      img: " assets/img/d2.png"
    }]

}

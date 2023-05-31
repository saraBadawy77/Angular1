import { Iproductes } from './../../model/iproductes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productes',
  templateUrl: './productes.component.html',
  styleUrls: ['./productes.component.css']
})
export class ProductesComponent {

  prolist :Iproductes[]=[
{img:"assets/img/m1.webp",
title:"Red lipstick",
price:500,
description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
qu:0},

{img:"assets/img/p22.jpeg",
title:"Nail polish",
price:280,
description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
qu:20}
,
{img:"assets/img/p33.jpeg",
title:"Moist lips",
price:340,
description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
qu:1},

{img:"assets/img/p44.jpeg",
title:"Eyeshadow",
price:400,
description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
qu:12}


]}

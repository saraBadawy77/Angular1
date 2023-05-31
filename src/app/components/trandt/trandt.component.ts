import { Itrand } from './../../model/itrand';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trandt',
  templateUrl: './trandt.component.html',
  styleUrls: ['./trandt.component.css']
})
export class TrandtComponent {


  mytrand:Itrand []=[

    {img:"assets/img/t1.jpeg",
  description:"Some quick example text to build on the card title and make up the bulk of the card's content."
  }

,
  {img:"assets/img/t2.jpeg",
  description:"Some quick example text to build on the card title and make up the bulk of the card's content."
  }

,
  {img:"assets/img/t3.jpg",
  description:"Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  
  {img:"assets/img/t4.jpg",
  description:"Some quick example text to build on the card title and make up the bulk of the card's content."
  }, 
  
  {img:"assets/img/t6.jpg",
  description:"Some quick example text to build on the card title and make up the bulk of the card's content."
  }, 
  
  {img:"assets/img/t7.jpg",
  description:"Some quick example text to build on the card title and make up the bulk of the card's content."
  }, 
  {img:"assets/img/t5.jpg",
  description:"Some quick example text to build on the card title and make up the bulk of the card's content."
  },  
  
  {img:"assets/img/t3.jpg",
  description:"Some quick example text to build on the card title and make up the bulk of the card's content."
  }
  ]

}

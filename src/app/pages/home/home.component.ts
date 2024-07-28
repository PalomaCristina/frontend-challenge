import { Component, OnInit } from '@angular/core';
import { MercadoLibreService } from 'src/app/core/services/products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private MercadoLibreService: MercadoLibreService) {

  }
  ngOnInit(): void {
    this.MercadoLibreService.listar()
    .subscribe(
      response => {
        console.log(response);
      }
    )
  }
}

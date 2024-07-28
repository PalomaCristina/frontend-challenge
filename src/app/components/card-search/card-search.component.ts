import { Component, OnInit } from '@angular/core';
import { MercadoLibreService } from '../../core/services/products.service';
import { Promocao } from '../../core/types/type';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent implements OnInit {
  query: string = 'iphone'; 
  items: Promocao[] = [];

  constructor(private mercadoLibreService: MercadoLibreService) {}
  ngOnInit(): void {
    this.search(); 
  }
  search(): void {
    this.mercadoLibreService.listar(this.query).subscribe(response => {
      this.items = response;
    });
  }
}
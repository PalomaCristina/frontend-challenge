import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Promocao } from '../types/type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MercadoLibreService {

  private apiUrl: string = environment.apiUrl;

constructor (
  private HttpClient: HttpClient
){}


listar(query: string = 'iphone'): Observable<Promocao[]> {
  return this.HttpClient.get<any>(`${this.apiUrl}/sites/MLA/search?q=${query}`)
    .pipe(
      map(response => {
        return response.results.slice(0, 4).map((item: any) => this.transformItem(item));
      })
    );
}

private transformItem(item: any): Promocao {
  const priceAmount = this.formatCurrency(Math.floor(item.price * 100));

  // Remover todos os caracteres não numéricos exceto o ponto decimal
  const numericPriceAmount = priceAmount.replace(/[^0-9,-]+/g, '').replace(',', '.');
  const parsedPriceAmount = parseFloat(numericPriceAmount);
  const cashback = parsedPriceAmount * 0.10;
  
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: priceAmount,
      cashback: (cashback).toFixed(2)
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping
  };
}
private formatCurrency(value: number): string {
  const priceInReais = value / 100;

  const integerPart = Math.floor(priceInReais).toString().slice(0, 4);
  const decimalPart = priceInReais.toFixed(2).split('.')[1]; 

  const limitedPrice = parseFloat(`${integerPart}.${decimalPart}`);

  return limitedPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
}

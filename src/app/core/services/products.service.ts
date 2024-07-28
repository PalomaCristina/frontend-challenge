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
private extractCategories(response: any): string[] {
  return response.available_filters.find((filter: any) => filter.id === 'category').values.map((category: any) => category.name);
}

private transformItem(item: any): Promocao {
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: Math.floor(item.price),
      decimals: (item.price % 1).toFixed(2)
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping
  };
}
}

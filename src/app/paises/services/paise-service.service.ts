import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pais, PaisSmall } from '../interface/Pais';


@Injectable({
  providedIn: 'root'
})
export class PaiseServiceService {

  private _baseUrl: string = 'https://restcountries.com/v3.1/';
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  constructor(private http : HttpClient) { }

  get regiones() : string[]{
    return [...this._regiones];
  }

  getCountriesByRegion(region: string): Observable<Pais[]> {
    const url = `${this._baseUrl}region/${region}?fields=cca3,name`;
    return this.http.get<Pais[]>(url);
  }


  searchByCode(code: string): Observable<PaisSmall[] | null>{

    if(!code){
      return of(null)
    }

    const url = `${this._baseUrl}alpha?codes=${code}&fields=borders`;
    return this.http.get<PaisSmall[]>(url)
  }

}

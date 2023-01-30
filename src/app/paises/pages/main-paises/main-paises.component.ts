import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaiseServiceService } from '../../services/paise-service.service';
import { switchMap, tap } from 'rxjs';
import { Pais } from '../../interface/Pais';

@Component({
  selector: 'app-main-paises',
  templateUrl: './main-paises.component.html',
  styleUrls: ['./main-paises.component.css']
})
export class MainPaisesComponent implements OnInit{

  showSpinner: boolean = false;
  regiones: string[] = [];
  countries: Pais[] = [];
  borders: string[] = [];

  form: FormGroup = this.fb.group({
    continente:   ['', Validators.required],
    pais:         ['', Validators.required],
    frontera:     ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private paiseServiceService: PaiseServiceService
  ) { }


  ngOnInit(): void {
    this.regiones = this.paiseServiceService.regiones;

    this.form.get('continente')?.valueChanges
      .pipe(
        tap( (_) => {
          this.showSpinner = true;
          this.form.get('pais')?.reset('');
        }),
        switchMap( value =>
          this.paiseServiceService.getCountriesByRegion(value)
        )
      )
      .subscribe( resp => {
        this.countries = resp;
        this.showSpinner = false;
      })



   this.form.get('pais')?.valueChanges
      .pipe(
        tap( (_) => {
          this.showSpinner = true;
          this.form.get('frontera')?.reset('');
        }),
        switchMap( value =>
          this.paiseServiceService.searchByCode(value)
        )
      ).subscribe( resp => {

        if(resp?.length){
          const [ {borders} ] = resp;
          this.borders = borders;
        }
        this.showSpinner = false;
      })


  }

  guardar() {
    console.log(this.form.value);
  }


}

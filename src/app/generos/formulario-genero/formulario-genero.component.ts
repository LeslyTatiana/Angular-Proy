import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit{
  constructor(private formBuilder: FormBuilder){};
  form: FormGroup;
  @Output()
  submit:EventEmitter<generoCreacionDTO>= new EventEmitter<generoCreacionDTO>();
  @Input()
  modelo: generoCreacionDTO;

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      nombre: ['',{
        validators:[Validators.required,Validators.minLength(3), primeraLetraMayuscula()]
      }]
    });
    if(this.modelo!==undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
    this.submit.emit(this.form.value);
  }

  obtenerErrorCampoNombre(){
    var campo= this.form.get('nombre');
    if(campo.hasError('required'))
    {
      return 'El campo nombre es requerido';
    }
    if(campo.hasError('minlength')){
      return 'La longitud mínima es de 3 caracteres'
    }
    if(campo.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }
}

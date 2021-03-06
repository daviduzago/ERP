import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {Validators} from "@angular/forms";

import Swal from "sweetalert2";

@Component({
  selector: 'app-ausentismos',
  templateUrl: './ausentismos.component.html',
  styleUrls: ['./ausentismos.component.css']
})
export class AusentismosComponent implements OnInit {
  ausentismos = new FormGroup({
    solicitud : this.fb.group({
      numero: ['', Validators.required],
      fecha: ['', Validators.required],
      empleado: ['', Validators.required],
      vinculacion: ['', Validators.required],
      descripcion: ['', Validators.required],
    }),
    autorizacion :this.fb.group({
      fecha: ['', Validators.required],
      funcionario: ['', Validators.required],
      motivo: ['', Validators.required],
      remunerado: [false],
      diagnostico: ['', Validators.required],
      concepto: ['', Validators.required],
    }),
    rangoFechas :this.fb.group({
      inicial: ['', Validators.required],
      dias: ['', Validators.required],
      horaInicialHH: ['', Validators.required],
      horaInicialMM: ['', Validators.required],
      horasHH: ['', Validators.required],
      horasMM: ['', Validators.required],
      final: ['', Validators.required],
      diasReales: ['', Validators.required],
      horaFinalHH: ['', Validators.required],
      horaFinalMM: ['', Validators.required],
      horasRealHH: ['', Validators.required],
      horasRealMM: ['', Validators.required],
    }),
    afectacion : this.fb.group({
      sustitucionPatronal: [false],
      aplicacion: ['', Validators.required],
      docExterno1: ['', Validators.required],
      docExterno2: ['', Validators.required],
      docExternoFecha: ['', Validators.required],
      docAdmin1: ['', Validators.required],
      docAdmin2: ['', Validators.required],
      docAdminFecha: ['', Validators.required],
    })
  }, {updateOn: 'submit'})

  constructor( private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  validate(event: Event){
    let form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (!form.checkValidity() && this.ausentismos.invalid) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  }

  cerrar() {
    Swal.fire({
      title: 'Desea salir sin guardar los cambios?',
      showDenyButton: true,
      confirmButtonText: `Si`,
      denyButtonText: `No`,
    }).then((result) => {
      console.log("Funciona")
    });
  }

}

import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {

  listEmpleado: Empleado[] = [
  {num: 1, nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino', salario: 15000},
  {num: 2, nombre: 'María', apellido: 'García', sexo: 'Femenino', salario: 18000},
  {num: 3, nombre: 'Pedro', apellido: 'Rodríguez', sexo: 'Masculino', salario: 22000},
  {num: 4, nombre: 'Ana', apellido: 'López', sexo: 'Femenino', salario: 17000},
  {num: 5, nombre: 'Luis', apellido: 'González', sexo: 'Masculino', salario: 19000},
  {num: 6, nombre: 'Marta', apellido: 'Fernández', sexo: 'Femenino', salario: 21000},
  {num: 7, nombre: 'Carlos', apellido: 'Martínez', sexo: 'Masculino', salario: 16000},
  {num: 8, nombre: 'Sofía', apellido: 'Hernández', sexo: 'Femenino', salario: 20000},
  {num: 9, nombre: 'Jorge', apellido: 'Sánchez', sexo: 'Masculino', salario: 23000},
  {num: 10, nombre: 'Lucía', apellido: 'Díaz', sexo: 'Femenino', salario: 19000},
  {num: 11, nombre: 'Daniel', apellido: 'Moreno', sexo: 'Masculino', salario: 25000},
  {num: 12, nombre: 'Laura', apellido: 'Álvarez', sexo: 'Femenino', salario: 22000},
  {num: 13, nombre: 'Diego', apellido: 'Gómez', sexo: 'Masculino', salario: 20000},
  {num: 14, nombre: 'Cristina', apellido: 'Ortega', sexo: 'Femenino', salario: 18000},
  {num: 15, nombre: 'Rubén', apellido: 'Ramírez', sexo: 'Masculino', salario: 24000},
  ]
  radioButtonSeleccionado = 'Todos';
  constructor(){

  }
  onInit(): void {

  }
  obtenetTotalEmpleados(): number {
    return this.listEmpleado.length;
  }
  obtenerTotalFemenino(): number {
    return this.listEmpleado.filter(list => list.sexo === 'Femenino').length
  }
  obtenerTotalMasculino(): number {
    return this.listEmpleado.filter(list => list.sexo === 'Masculino').length
  }
  empleadoCountRadoButtonChange(radioButtonSelec: any): void { 
    this.radioButtonSeleccionado = radioButtonSelec;
  }
}

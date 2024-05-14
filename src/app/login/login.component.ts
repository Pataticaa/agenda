import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irAIniciarSesion(): void {
    // Aquí rediriges al usuario a la página de inicio de sesión
    this.router.navigate(['/iniciar-sesion']);
  }

  irACrearCuenta(): void {
    // Aquí rediriges al usuario a la página de creación de cuenta
    this.router.navigate(['/crear-cuenta']);
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {
  isLoginMode: boolean = true; // Estado para alternar entre Login e Cadastro
  loginData = { email: '', password: '' };
  registerData = { name: '', email: '', password: '', confirmPassword: '' };

  constructor() { }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode; // Alterna entre os modos
  }

  onLogin() {
    // Lógica de login
    console.log('Login:', this.loginData);
  }

  onRegister() {
    // Lógica de cadastro
    console.log('Cadastro:', this.registerData);
  }
  
  ngOnInit() {
  }

}

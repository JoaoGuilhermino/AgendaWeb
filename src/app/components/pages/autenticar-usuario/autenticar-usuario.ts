import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-autenticar-usuario',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './autenticar-usuario.html',
  styleUrl: './autenticar-usuario.css'
})
export class AutenticarUsuario {


  //injeções de dependência
  private http = inject(HttpClient);


  //Estrutura do formulário
  formAutenticacao = new FormGroup({
    email : new FormControl(''),
    senha : new FormControl('')
  });


  //Função para autenticar o usuário
  onSubmit() {
    this.http.post('http://localhost:8081/api/usuario/autenticar', this.formAutenticacao.value)
      .subscribe({
        next: (data) => { console.log(data); },
        error: (e) => { console.log(e.error); }
      });
  }


}





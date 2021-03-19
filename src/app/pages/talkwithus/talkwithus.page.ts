import { Component, OnInit } from '@angular/core';

// 1) Importa dependências
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';
import { AlertController } from '@ionic/angular';

// 6) Validação (filtro) personalizada
// Não permite campos somente com espaços
export function removeSpaces(control: AbstractControl) {
  if (control && control.value && !control.value.replace(/\s/g, '').length) {
    control.setValue('');
  }
  return null;
}

@Component({
  selector: 'app-talkwithus',
  templateUrl: './talkwithus.page.html',
  styleUrls: ['./talkwithus.page.scss'],
})
export class talkwithusPage implements OnInit {

  // 3) Criar atributos
  public contactForm: FormGroup; // Cria o formulário
  pipe = new DatePipe('en_US'); // Formatador de datas

  constructor(
// 2) Injeta dependencias
    public alert: AlertController,
    public form: FormBuilder,
    public firestore: AngularFirestore
  ) { }

  ngOnInit() {

    // 4) Cria os campos do formulário
    this.talkwithusFormCreate();

  }

  // 5) Cria os campos do formulário
  talkwithusFormCreate() {

    this.talkwithusForm = this.form.group({

      // Data do envio (date)
      date: [''],

      // Nome (name)
      name: [
        '',   // Valor inicial
        Validators.compose([  // Valida campo
          Validators.required,  // Campo obrigatório
          Validators.minLength(3),  // Deve ter pelo menos 3 caracteres
          removeSpaces // Remove espaços duplicados
        ])
      ],

      // E-mail (email)
      email: [
        '',   // Valor inicial
        Validators.compose([  // Valida campo
          Validators.required,  // Campo obrigatório
          Validators.email,  // Deve ser um e-mail válido
          removeSpaces // Remove espaços duplicados
        ])
      ],

      // Assunto (subject)
      subject: [
        '',   // Valor inicial
        Validators.compose([  // Valida campo
          Validators.required,  // Campo obrigatório
          Validators.minLength(5),  // Deve ter 5 ou mais caracteres
          removeSpaces // Remove espaços duplicados
        ])
      ],

      // Mensagem (message)
      message: [
        '',   // Valor inicial
        Validators.compose([  // Valida campo
          Validators.required,  // Campo obrigatório
          Validators.minLength(5),  // Deve ter 5 ou mais caracteres
          removeSpaces // Remove espaços duplicados
        ])
      ]
    });
  }

  // 7) Processa envio do formulário
  talkwithusSend() {

    // Gera e formata a data de envio
    this.talkwithusForm.controls.date.setValue(
      this.pipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss')
    );

    // Teste
    // console.log(this.talkwithusForm.value);

    // Salva no Firestore
    this.firestore.collection('talkwithuss').add(this.talkwithusForm.value)

      // Se salvar
      .then(
        () => {

          // Feedback
          this.feedback();
        }
      )

      // Se falhar
      .catch(
        (error) => {
          alert(`Oooops! Algo deu errado! ${error}`);
        }
      );
  }
// 5) Cria os campos do formulário
  contactFormCreate(){
    this.contactForm = this.form.group({
      date:[''],

      name:[
      '',Validators.compose([Validators.required,Validators.minLength(3),removeSpaces])
          ],
      
      email:[
      '',Validators.compose([Validators.required,Validators.email,removeSpaces])
      ],
      
      subject:[
        '',Validators.compose([Validators.required,Validators.minLength(5),removeSpaces])
      ],

      msg:[
        '',Validators.compose([Validators.required,Validators.minLength(5),removeSpaces])
      ],
    });
  }
  // 7) Processa envio do formulário
  contactSend() {

    // Gera e formata a data de envio
    this.contactForm.controls.date.setValue(
      this.pipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss')
    );

    // Teste
    console.log(this.contactForm.value);

    // Salva no Firestore
    this.firestore.collection('contacts').add(this.contactForm.value)

      // Se salvar
      .then(
        () => {

          // Feedback
          this.feedback();
        }
      )

      // Se falhar
      .catch(
        (error) => {
          alert(`Oooops! Algo deu errado! ${error}`);
        }
      );
  }

  // 8) Popup de feedback
  async feedback() {
    const alert = await this.alert.create({
      header: 'Dale!',
      message: 'Seu contato foi enviado para Tales.',
      buttons: [{
        text: 'OK',
        handler: () => {

          // Reset do formulario, mantendo nome e e-mail já usados
          this.contactForm.reset({
            date: '',
            name: this.contactForm.value.name.trim(),
            email: this.contactForm.value.email.trim(),
            subject: '',
            message: ''
          });
        }
      }]
    });

    await alert.present();
  }
    // Processa botões das redes sociais
    openSocial(name) {
      window.open(`https://${name}.com/`);
      return false;
    }
}

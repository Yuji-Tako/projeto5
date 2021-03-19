(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-talkwithus-talkwithus-module"],{

/***/ "/eZC":
/*!*****************************************************!*\
  !*** ./src/app/pages/talkwithus/talkwithus.page.ts ***!
  \*****************************************************/
/*! exports provided: removeSpaces, TalkwithusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSpaces", function() { return removeSpaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalkwithusPage", function() { return TalkwithusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_talkwithus_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./talkwithus.page.html */ "FJnB");
/* harmony import */ var _talkwithus_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./talkwithus.page.scss */ "9493");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




// 1) Importa dependencia




// 6) Validação personalizda
// Não permite campos somente com espaços
function removeSpaces(control) {
    if (control && control.value && !control.value.replace(/\s/g, '').length) {
        control.setValue('');
    }
    return null;
}
let TalkwithusPage = class TalkwithusPage {
    constructor(
    // 2) Injeta dependencias
    alert, form, firestore) {
        this.alert = alert;
        this.form = form;
        this.firestore = firestore;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en_US'); // Formatador de datas
    }
    ngOnInit() {
        // 4) Chama os campos do formulário
        this.contactFormCreate();
    }
    // 5) Cria os campos do formulário
    contactFormCreate() {
        this.contactForm = this.form.group({
            date: [''],
            name: [
                '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), removeSpaces])
            ],
            email: [
                '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, removeSpaces])
            ],
            subject: [
                '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), removeSpaces])
            ],
            msg: [
                '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), removeSpaces])
            ],
        });
    }
    // 7) Processa envio do formulário
    contactSend() {
        // Gera e formata a data de envio
        this.contactForm.controls.date.setValue(this.pipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss'));
        // Teste
        console.log(this.contactForm.value);
        // Salva no Firestore
        this.firestore.collection('contacts').add(this.contactForm.value)
            // Se salvar
            .then(() => {
            // Feedback
            this.feedback();
        })
            // Se falhar
            .catch((error) => {
            alert(`Oooops! Algo deu errado! ${error}`);
        });
    }
    // 8) Popup de feedback
    feedback() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
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
            yield alert.present();
        });
    }
    // Processa botões das redes sociais
    openSocial(name) {
        window.open(`https://${name}.com/`);
        return false;
    }
};
TalkwithusPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
];
TalkwithusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-talkwithus',
        template: _raw_loader_talkwithus_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_talkwithus_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TalkwithusPage);



/***/ }),

/***/ "9493":
/*!*******************************************************!*\
  !*** ./src/app/pages/talkwithus/talkwithus.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#footer {\n  position: fixed;\n  bottom: 0;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YWxrd2l0aHVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNKIiwiZmlsZSI6InRhbGt3aXRodXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59Il19 */");

/***/ }),

/***/ "FJnB":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/talkwithus/talkwithus.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Fale Conosco</ion-title>\r\n    <ion-img slot=\"end\" class=\"toplogo\" src=\"assets/logo_01.png\"></ion-img>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding-horizontal\">\r\n\r\n  <p>Preencha o formulário abaixo para entrar em contato com GoPnIK.</p>\r\n\r\n  <form [formGroup]=\"contactForm\" (ngSubmit)=\"contactSend()\">\r\n\r\n    <ion-list lines=\"full\" class=\"ion=no-padding\">\r\n\r\n      <ion-item>\r\n        <ion-label form=\"name\" position=\"floating\" color=\"primary\">\r\n          Nome:\r\n          <ion-text color=\"danger\" *ngIf=\"contactForm.controls.name.errors\">\r\n            <small *ngIf=\"contactForm.controls.name.errors.required\">* Obrigatório</small>\r\n            <small *ngIf=\"contactForm.controls.name.errors.minlength\">* Inválido</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input type=\"text\" name=\"name\" id=\"name\" formControlName=\"name\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label form=\"email\" position=\"floating\" color=\"primary\">E-mail:\r\n          <ion-text color=\"danger\" *ngIf=\"contactForm.controls.email.errors\">\r\n            <small *ngIf=\"contactForm.controls.email.errors.required\">* Obrigatório</small>\r\n            <small *ngIf=\"contactForm.controls.email.errors.email\">* Inválido</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input type=\"text\" name=\"email\" id=\"email\" formControlName=\"email\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label form=\"subject\" position=\"floating\" color=\"primary\">Assunto:\r\n          <ion-text color=\"danger\" *ngIf=\"contactForm.controls.subject.errors\">\r\n            <small *ngIf=\"contactForm.controls.subject.errors.required\">* Obrigatório</small>\r\n            <small *ngIf=\"contactForm.controls.subject.errors.minlength\">* Inválido</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input type=\"text\" name=\"subject\" id=\"subject\" formControlName=\"subject\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label form=\"msg\" position=\"floating\" color=\"primary\">Mensagem:\r\n          <ion-text color=\"danger\" *ngIf=\"contactForm.controls.msg.errors\">\r\n            <small *ngIf=\"contactForm.controls.msg.errors.required\">* Obrigatório</small>\r\n            <small *ngIf=\"contactForm.controls.msg.errors.minlength\">* Inválido</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-textarea type=\"text\" name=\"msg\" id=\"msg\" formControlName=\"msg\" autoGrow=\"true\"></ion-textarea>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n\r\n    <ion-button  type=\"submit\" expand=\"block\" [disabled]=\"contactForm.invalid\" class=\"ion-margin-vertical\">\r\n      Enviar\r\n    </ion-button>\r\n\r\n  </form>\r\n\r\n<div id=\"footer\">\r\n  <ion-grid>\r\n    <ion-row class=\"ion-text-center\">\r\n      <ion-col>\r\n        <ion-icon name=\"logo-facebook\" size=\"large\" (click)=\"openSocial('longdogechallenge')\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-icon name=\"logo-youtube\" size=\"large\" (click)=\"openSocial('smashthewalls')\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-icon name=\"logo-twitter\" size=\"large\" (click)=\"openSocial('mondrianandme')\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-icon name=\"logo-github\" size=\"large\" (click)=\"openSocial('rrrgggbbb')\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "Mhzo":
/*!*******************************************************!*\
  !*** ./src/app/pages/talkwithus/talkwithus.module.ts ***!
  \*******************************************************/
/*! exports provided: TalkwithusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalkwithusPageModule", function() { return TalkwithusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _talkwithus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./talkwithus-routing.module */ "O2AH");
/* harmony import */ var _talkwithus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./talkwithus.page */ "/eZC");







// 1) Importa módulo Reactive Forms

let TalkwithusPageModule = class TalkwithusPageModule {
};
TalkwithusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _talkwithus_routing_module__WEBPACK_IMPORTED_MODULE_5__["TalkwithusPageRoutingModule"],
            // 2) Importa ReactiveFormsModule
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_talkwithus_page__WEBPACK_IMPORTED_MODULE_6__["TalkwithusPage"]]
    })
], TalkwithusPageModule);



/***/ }),

/***/ "O2AH":
/*!***************************************************************!*\
  !*** ./src/app/pages/talkwithus/talkwithus-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TalkwithusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalkwithusPageRoutingModule", function() { return TalkwithusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _talkwithus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./talkwithus.page */ "/eZC");




const routes = [
    {
        path: '',
        component: _talkwithus_page__WEBPACK_IMPORTED_MODULE_3__["TalkwithusPage"]
    }
];
let TalkwithusPageRoutingModule = class TalkwithusPageRoutingModule {
};
TalkwithusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TalkwithusPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-talkwithus-talkwithus-module.js.map
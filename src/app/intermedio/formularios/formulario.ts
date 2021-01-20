import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class FormularioRegister {

    formulario: FormGroup;

    constructor( fb: FormBuilder) {

        this.formulario = fb.group({

            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

    }
}
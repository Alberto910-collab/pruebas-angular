import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';

describe('Formularios', () => {

    let componente: FormularioRegister;

    beforeEach( () => {
        componente = new FormularioRegister( new FormBuilder() );
    });

    it('Debe de crear un formulario con dos campos, email y password', () => {

        expect( componente.formulario.contains('email')).toBeTruthy();
        expect( componente.formulario.contains('password')).toBeTruthy();

    });

    it('El email debe de ser obligatorio', () => {

        const control = componente.formulario.get('email');
        control?.setValue('');
        expect( control?.valid ).toBeFalsy();

    });

    it('El email debe de ser válido', () => {

        const control = componente.formulario.get('email');
        control?.setValue('alberto@gmail.com');
        expect( control?.valid ).toBeTruthy();
        
    });

});
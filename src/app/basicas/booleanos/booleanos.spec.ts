import { usuarioIngresado } from './booleanos';

describe('Pruebas de booleanos', () => {

    it('Debe de regresar true', () => {
        
        const res = usuarioIngresado();
        expect( res ).toBeTruthy();

    });

});
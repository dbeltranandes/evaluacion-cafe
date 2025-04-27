import { Cafe } from './cafe';

describe('Cafe', () => {
  it('should create an instance', () => {
    const cafe = new Cafe(1, 'Nombre', 'Tipo', 'Región', 'Nota', 'Descripción', 'ImagenURL');
    expect(cafe).toBeTruthy();
  });
});
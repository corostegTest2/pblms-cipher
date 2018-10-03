global.window = global;
require('../src/cipher');
require('./cipher.spec.js');
const expect = require('expect')

describe('cipher', () => {

  describe('cipher.object', () => {

    it('debería ser un objeto', () => {
      expect(typeof cipher).toBe('object');
    });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',() =>{
      expect(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG")).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
     });
     it('debería retornar "ejemplo #1" para "lqltwsv #4" con offset 33',() =>{
      expect(cipher.decode(33,"lqltwsv #4")).toBe("ejemplo #1"); 
     }); 

  });

});

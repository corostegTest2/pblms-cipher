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

    describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado', () => {
      assert.equal(typeof cipher.createCipherWithOffset(33),'object');
      assert.property(cipher.createCipherWithOffset(33),'encode');
      assert.property(cipher.createCipherWithOffset(33),'decode');
    });

    it('debería retornar una función llamada (encode y decode) con offset fijado ', () => {
      assert.equal((cipher.createCipherWithOffset(33)).encode("abc"),cipher.encode(33,"abc"));
      assert.equal((cipher.createCipherWithOffset(33)).decode("abc"),cipher.decode(33,"abc"));
    });
    

  });
});
  
});

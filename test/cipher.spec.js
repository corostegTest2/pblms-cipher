gdescribe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

      it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',() =>{
        assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG" );
     });
     
     it('debería retornar "lqltwsv #4" para "ejemplo #1" con offset 33',() =>{
      assert.equal(cipher.encode(33,"ejemplo #1"),"lqltwsv #4"); 
     });
    
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',() =>{
        assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ" );
     });
     it('debería retornar "ejemplo #1" para "lqltwsv #4" con offset 33',() =>{
      assert.equal(cipher.decode(33,"lqltwsv #4"),"ejemplo #1"); 
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

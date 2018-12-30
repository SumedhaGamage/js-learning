describe('Protractor test welcome application',function() {
   it('should have Tour of Heroes link', function(){
       browser.get('http://localhost:4200/');
       var ele = element(by.linkText('Tour of Heroes'));
       ele.getText().then(a => {
           console.log('########',a);
           
       });

       expect(ele.getText()).toEqual('Tour of Heroes');
       
   })
})
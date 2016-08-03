function processor(){
  return new Promise(function(resolve, reject){
    resolve([meal:'breakfast', items:['pizza', 'cookies']]);
  })
}


module.exports.listMeals = processor;

const gameModel = require('../models/games');
module.exports = {
 getById: function(req, res, next) {
  console.log(req.body);
  gameModel.findById(req.params.gameId, function(err, gameInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "Game found!!!", data:{games: gameInfo}});
   }
  });
 },
getAll: function(req, res, next) {
  let gamesList = [];
gameModel.find({}, function(err, games){
   if (err){
    next(err);
   } else{
    for (let game of games) {
     gamesList.push({id: game._id, name: game.name, released_on: game.released_on});
    }
    res.json({status:"success", message: "Games list found!!!", data:{gmaes: gamesList}});
       
   }
});
 },
updateById: function(req, res, next) {
  gameModel.findByIdAndUpdate(req.params.gameId,{name:req.body.name}, function(err, gameInfo){
if(err)
    next(err);
   else {
    res.json({status:"success", message: "Game updated successfully!!!", data:null});
   }
  });
 },
deleteById: function(req, res, next) {
  gameModel.findByIdAndRemove(req.params.gameId, function(err, gameInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "Game deleted successfully!!!", data:null});
   }
  });
 },
create: function(req, res, next) {
  gameModel.create({ name: req.body.name, released_on: req.body.released_on }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "Game added successfully!!!", data: null});
      
    });
 },
}
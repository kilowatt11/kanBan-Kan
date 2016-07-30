;(function(){

  angular.module('kanBan')
  .service('EsService', function(){
      var lists = {

      }

      var i = 500;
      function assignId(){
          i++
          return i
      }

      this.getLists = function(){
          return lists
      }
  })

}());
;(function(){

  angular.module('kanBan')
  .component('listComponent', {
      templateUrl: 'components/list-component/list.html',
      controller: ListController,
      bindings: {
          listObj: '<'
      }
  })

  ListController.$inject = ['EsService'];

  function ListController(EsService){
var $ctrl = this;

$ctrl.removeTask = function(task){
    EsService.removeTask($ctrl.listObj, task);
}

$ctrl.addTask = function(task){
    EsService.createTask($ctrl.listObj.id, task);
    $ctrl.newTask = {};
}

  }

}());
;(function(){

  angular.module('kanBan')
  .component('taskForm', {
      templateUrl: 'components/task-form-component/task-form.html',
      controller: TaskFormController,
      bindings: {
          listObj: '<'
      }
  })

  TaskFormController.$inject = ['EsService'];

  function TaskFormController(EsService){
var $ctrl = this;



  }

}());
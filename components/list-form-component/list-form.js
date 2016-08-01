; (function () {

    angular.module('kanBan')
        .component('listForm', {
            templateUrl: 'components/list-form-component/list-form.html',
            controller: ListFormController,
            bindings: {
                listObj: '<'
            }
        })

    ListFormController.$inject = ['EsService'];

    function ListFormController(EsService) {
        var $ctrl = this;
        
        $ctrl.addList = function (list) {
            debugger;
            EsService.createList(list);
            $ctrl.newList = {};
        }
        $ctrl.what = function(){
            alert('some shit!')
        }



    }

} ());
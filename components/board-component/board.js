; (function () {


    angular.module('kanBan')
        .component('boardComponent', {
            templateUrl:'components/board-component/board.html',
            controller: BoardController
        })
        BoardController.$inject = ['EsService']

        function BoardController(EsService){
            var $ctrl = this;
            $ctrl.lists = EsService.getLists()
            $ctrl.addingList = false;

            $ctrl.removeList = function(list){
                EsService.removeList(list.id);
            }

            $ctrl.addList = function(list){
                EsService.createList(list);
                $ctrl.newList = {};
            }


            


        }


} ());
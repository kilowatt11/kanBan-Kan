; (function () {

    angular.module('kanBan')
        .service('EsService', function () {
            var lists = {
                501: {
                    id: 501,
                    name: 'To-Do',
                    cards: [{ name: 'whatever', stories: [{ name: 'login stuff', description: 'As a user I would....' }] }]
                }
            }

            var i = 500;
            function assignId() {
                i++
                return i
            }

            this.getLists = function () {
                return lists
            }

            this.createList = function (list) {
                list.id = assignId();
                list.tasks = [];
                lists[list.id] = list;
                console.log(lists)
            }

            this.removeList = function (listId) {
                if (!lists[listId]) {
                    console.error('No such Id. Try again')
                }
                delete lists[listId]
            }

            this.createTask = function (listId, task) {
                if (!lists[listId]) {
                    console.error('No such Id. Try again')
                }
                lists[listId].tasks.push(task);
            }

            this.removeTask = function (listId, task) {
                if (!lists[listId]) {
                    console.error('No such Id. Try again')
                }
                var i = lists[listId].tasks.indexOf(task);
                lists[listId].tasks.splice(i, 1)
            }

        })

} ());
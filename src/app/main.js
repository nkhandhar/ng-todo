(function () {
	'use strict';

	angular
		.module('app')
		.controller('MainController', MainController);

	MainController.$inject = [];

	function MainController() {

		var vm = angular.extend(this, {
			todos: [{
					title: 'Todo 1',
					description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
					isSelected: false
				},
				{
					title: 'Todo 2',
					description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry',
					isSelected: false
				},
				{
					title: 'Todo 3',
					description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry',
					isSelected: false
				}
			],
			todo: {
				title: '',
				description: '',
				isSelected: false
			},
			allSelected: false,
			onCreate: onCreate,
			onReset: onReset,
			onDelete: onDelete,
			onSelectAllTodos: onSelectAllTodos
		});

		function onCreate() {
			vm.todos.push({
				title: vm.todo.title,
				description: vm.todo.description
			});
			onReset();
		}

		function onReset() {
			vm.todo.title = '';
			vm.todo.description = '';
		}

		function onDelete(index) {
			if (angular.isDefined(index)) {
				vm.todos.splice(index, 1);
			} else {
				if (vm.allSelected) {
					vm.todos.length = 0;
					vm.allSelected = false;
				} else {
					for (var i = 0, len = vm.todos.length; i < len; i++) {
						if (vm.todos[i].isSelected) {
							vm.todos.splice(i, 1);
							i--;
							len = vm.todos.length;
						}
					}
				}
			}
		}

		function onSelectAllTodos() {
			if (vm.allSelected) {
				angular.forEach(vm.todos, function (value, index) {
					value.isSelected = true;
				});
			} else {
				angular.forEach(vm.todos, function (value, index) {
					value.isSelected = false;
				});
			}
		}
	}

})();

'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var MainCtrl,
    scope;

  // we don't need the real factory here. so, we will use a fake one.
  var mockService = {
    todosInStore: 'todo1' + '/n', //just two elements initially
    get: function() {
      return this.todosInStore;
    }
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope, localStorageService:mockService
    });
  }));

  it('test1', function () {
    expect(scope.todos.length).toBe(1);
  });

  it('it should add items to the list', function() {
    scope.todo = 'test 1';
    scope.addTodo();
  
    expect(scope.todos.length).toBe(2);
  });

  it('it should remove items from the list', function() {
    scope.removeTodo();
    expect(scope.todos.length).toBe(0);
  });
});

var app = angular.module('TaskManager', []); 

app.controller('taskController', function($scope) {
    $scope.today = new Date();
    $scope.saved = localStorage.getItem('taskItems');
    $scope.taskItem = [];
    localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));
    
    $scope.newTask = null;
    $scope.newTaskDate = null;
    $scope.addNew = function () {
        if ($scope.newTaskDate == null || $scope.newTaskDate == '') {
            $scope.taskItem.push({
                description: $scope.newTask,
                date: "No deadline",
                complete: false,
            }) 
        } else {
            $scope.taskItem.push({
                description: $scope.newTask,
                date: $scope.newTaskDate,
                complete: false,
            })
        };
        $scope.newTask = '';
        $scope.newTaskDate = '';
        localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));
    };
    $scope.deleteAllTask = function (){
        $scope.taskItem = [];
        localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));
    }
    $scope.deleteTask = function () {
        var completedTask = $scope.taskItem;
        $scope.taskItem = [];
        angular.forEach(completedTask, function (taskItem) {
            if (!taskItem.complete) {
                $scope.taskItem.push(taskItem);
            }
        });
        localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));
    };
    
    $scope.save = function () {
        localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));
    }
});
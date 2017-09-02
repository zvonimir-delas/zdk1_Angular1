var app = angular.module('myApp', ['LocalStorageModule']);

app.run(function(localStorageService){
    if(!localStorageService.get('studentsZD_App1'))
        localStorageService.set('studentsZD_App1', [{name: 'Marko', surname: 'Marković', sex: 'M', dateOfEntry: new Date(2010, 5, 15, 8, 50, 51)}, {name: 'Jelena', surname: 'Jelenić', sex: 'F', dateOfEntry: new Date(2017, 4, 12, 15, 40, 1)}]);  
});

app.controller('studentController', function($scope, localStorageService){
    $scope.name;
    $scope.surname;
    $scope.sex;
    $scope.dateOfEntry;
    $scope.allStudents = localStorageService.get('studentsZD_App1');

    $scope.submitNewStudent = function(){
       $scope.allStudents.push({name: $scope.name, surname: $scope.surname, sex: $scope.sex, dateOfEntry: new Date(Math.random()*new Date())});
       localStorageService.set('studentsZD_App1', $scope.allStudents);

       //thanks to two way data binding, this clears the HTML input
       $scope.name = null;
       $scope.surname = null;
       $scope.sex = null;
    }

    $scope.returnNumberOfStudents = function(){
        return $scope.allStudents.length;
    }

    $scope.getStudents = function(){
        //if null show everyone
        return !$scope.search ? $scope.allStudents : _.filter($scope.allStudents, function(s){return _.includes(s.name, $scope.search)});
    }
});
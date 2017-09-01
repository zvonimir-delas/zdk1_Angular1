var app = angular.module('myApp', ['LocalStorageModule']);

app.run(function(localStorageService){
    if(!localStorageService.get('students'))
        localStorageService.set('students', [{name: 'Marko', surname: 'Marković', sex: 'M', DateOfEntry: new Date(2017, 5, 15, 8, 50, 51)}, {name: 'Jelena', surname: 'Jelenić', sex: 'F', DateOfEntry: new Date(2017, 4, 12, 15, 40, 1)}]);
    var students = localStorageService.get('students');    
});

app.controller('studentController', function($scope, localStorageService){
    $scope.name;
    $scope.surname;
    $scope.sex;
    $scope.dateOfEntry;
    $scope.allStudents = localStorageService.get('students');

    $scope.submitNewStudent = function(){
       $scope.allStudents.push({name: $scope.name, surname: $scope.surname, sex: $scope.sex, dateOfEntry: new Date(Math.random()*new Date())});
       localStorageService.set('students', $scope.allStudents);

       //thanks to two way data binding, this clears the HTML input
       $scope.name = null;
       $scope.surname = null;
       $scope.sex = null;
    }
});

//localStorage.clear();
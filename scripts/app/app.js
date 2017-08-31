var app = angular.module('myApp', ['LocalStorageModule']);

app.run(function(localStorageService){
    if(!localStorageService.get('students'))
        localStorageService.set('students', [{name: 'Marko', surname: 'Marković', sex: 'M', DateOfEntry: new Date(2017, 5, 15, 8, 50, 51)}, {name: 'Jelena', surname: 'Jelenić', sex: 'F', DateOfEntry: new Date(2017, 4, 12, 15, 40, 1)}]);
    });
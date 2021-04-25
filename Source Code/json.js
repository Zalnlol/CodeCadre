var suggest = angular.module('myApp', []);
var result;
var display = document.getElementById('display');

suggest.controller('myData', function($scope) {
    display.addEventListener('click', function() {
        var age = $(".checkage:checked").val(); //giu gia tri age
        var bmi = $(".checkbmi:checked").val(); //giu gia tri bmi
    
        if (age && bmi) { // co ca 2
            result = age + bmi;
        } else { // ko
            return false;
        }
    });

    $scope.loadJson = function() { // dat su kien click
        switch(result) { // xoay tua gia tri
        case 'a1': // 3-5 tuoi va gay go
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa01","name":"Walking", "pic":"../image/Walking.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa02","name":"Running", "pic":"../image/Running.JPG","description":"Lorem ipsum.","cat":"phys activities"},
        
                {"id":"pa03","name":"Swimming", "pic":"../image/Swimming.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        }
    };
});
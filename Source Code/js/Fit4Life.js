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
        case 'a1': // 3-5 age & underweight
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa01","name":"Walking", "pic":"../image/Walking.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa02","name":"Running", "pic":"../image/Running.JPG","description":"Lorem ipsum.","cat":"phys activities"},
        
                {"id":"pa03","name":"Swimming", "pic":"../image/Swimming.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'a2': // 3-5 yrs & normal
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa11","name":"Jumping rope", "pic":"../image/Jumping_rope.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa02","name":"Running", "pic":"../image/Running.JPG","description":"Lorem ipsum.","cat":"phys activities"},
        
                {"id":"pa13","name":"Climbing", "pic":"../image/Climbing.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'a3': // 3-5 yrs & overweight
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa10","name":"Tug of war", "pic":"../image/Tug_of_war.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa02","name":"Running", "pic":"../image/Running.JPG","description":"Lorem ipsum.","cat":"phys activities"},
        
                {"id":"pa03","name":"Swimming", "pic":"../image/Swimming.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'a4': // 3-5 yrs & obsese
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa10","name":"Tug of war", "pic":"../image/Tug_of_war.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa02","name":"Running", "pic":"../image/Running.JPG","description":"Lorem ipsum.","cat":"phys activities"},
        
                {"id":"pa01","name":"Walking", "pic":"../image/Walking.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'b1': // 6-17 yrs & underweight
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa07","name":"Bicycle Riding", "pic":"../image/Bicycle_Riding.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa08","name":"Football", "pic":"../image/Football.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
        
                {"id":"pa06","name":"Martial-Art", "pic":"../image/Martial_Art.JPG","description":"Lorem ipsum", "cat":"phys activities"}
            ];
            
            break;
        case 'b2': // 6-17 yrs & normal
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa01","name":"Walking", "pic":"../image/Walking.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa02","name":"Running", "pic":"../image/Running.JPG","description":"Lorem ipsum.","cat":"phys activities"},
        
                {"id":"pa03","name":"Swimming", "pic":"../image/Swimming.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'b3': // 6-17 yrs & overweight
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa01","name":"Walking", "pic":"../image/Walking.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa02","name":"Running", "pic":"../image/Running.JPG","description":"Lorem ipsum.","cat":"phys activities"},
        
                {"id":"pa03","name":"Swimming", "pic":"../image/Swimming.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'b4': // 6-17 yrs & obese
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa01","name":"Walking", "pic":"../image/Walking.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa02","name":"Running", "pic":"../image/Running.JPG","description":"Lorem ipsum.","cat":"phys activities"},
        
                {"id":"pa03","name":"Swimming", "pic":"../image/Swimming.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'c1': // 3-5 tuoi va gay go
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa01","name":"Walking", "pic":"../image/Walking.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa02","name":"Running", "pic":"../image/Running.JPG","description":"Lorem ipsum.","cat":"phys activities"},
        
                {"id":"pa03","name":"Swimming", "pic":"../image/Swimming.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'c2': // 3-5 tuoi va gay go
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa01","name":"Walking", "pic":"../image/Walking.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa02","name":"Running", "pic":"../image/Running.JPG","description":"Lorem ipsum.","cat":"phys activities"},
        
                {"id":"pa03","name":"Swimming", "pic":"../image/Swimming.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'c3': // 3-5 tuoi va gay go
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa01","name":"Walking", "pic":"../image/Walking.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa02","name":"Running", "pic":"../image/Running.JPG","description":"Lorem ipsum.","cat":"phys activities"},
        
                {"id":"pa03","name":"Swimming", "pic":"../image/Swimming.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'c4': // 3-5 tuoi va gay go
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa01","name":"Walking", "pic":"../image/Walking.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa02","name":"Running", "pic":"../image/Running.JPG","description":"Lorem ipsum.","cat":"phys activities"},
        
                {"id":"pa03","name":"Swimming", "pic":"../image/Swimming.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'd1': // 3-5 tuoi va gay go
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa01","name":"Walking", "pic":"../image/Walking.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa02","name":"Running", "pic":"../image/Running.JPG","description":"Lorem ipsum.","cat":"phys activities"},
        
                {"id":"pa03","name":"Swimming", "pic":"../image/Swimming.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'd2': // 3-5 tuoi va gay go
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa01","name":"Walking", "pic":"../image/Walking.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa02","name":"Running", "pic":"../image/Running.JPG","description":"Lorem ipsum.","cat":"phys activities"},
        
                {"id":"pa03","name":"Swimming", "pic":"../image/Swimming.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'd3': // 3-5 tuoi va gay go
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa01","name":"Walking", "pic":"../image/Walking.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa02","name":"Running", "pic":"../image/Running.JPG","description":"Lorem ipsum.","cat":"phys activities"},
        
                {"id":"pa03","name":"Swimming", "pic":"../image/Swimming.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'd4': // 3-5 tuoi va gay go
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

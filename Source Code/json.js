var suggest = angular.module('myApp', []);
var result;
var display = document.getElementById('display');





suggest.controller('myData', function($scope) {

    document.getElementById('tuvan').innerHTML = 'gggjhh';

    $scope.id = [ // thu cong
        {"id":"pa01","name":"Walking", "pic":"image/Walking.jpg","description":"Lorem ipsum.", "cat":"phys activities"},
    
        {"id":"pa02","name":"Running", "pic":"image/Running.JPG","description":"Lorem ipsum.","cat":"phys activities"},

        {"id":"pa03","name":"Swimming", "pic":"image/Swimming.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
    ];
    
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

            document.getElementById('tuvan').innerHTML = 'gggjhh';

            $scope.id = [ // thu cong
                {"id":"pa01","name":"Walking", "pic":"image/Walking.jpg","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa02","name":"Running", "pic":"image/Running.JPG","description":"Lorem ipsum.","cat":"phys activities"},
        
                {"id":"pa03","name":"Swimming", "pic":"image/Swimming.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'a2': // 3-5 yrs & normal
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa11","name":"Jumping rope", "pic":"image/Jumping_rope.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa02","name":"Running", "pic":"image/Running.JPG","description":"Lorem ipsum.","cat":"phys activities"},
        
                {"id":"pa13","name":"Climbing", "pic":"image/Climbing.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'a3': // 3-5 yrs & overweight
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa10","name":"Tug of war", "pic":"image/Tug_of_war.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa02","name":"Running", "pic":"image/Running.JPG","description":"Lorem ipsum.","cat":"phys activities"},
        
                {"id":"pa13","name":"Climbing", "pic":"image/Climbing.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'a4': // 3-5 yrs & obsese
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa10","name":"Tug of war", "pic":"image/Tug_of_war.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa02","name":"Running", "pic":"image/Running.JPG","description":"Lorem ipsum.","cat":"phys activities"},
        
                {"id":"pa01","name":"Walking", "pic":"image/Walking.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'b1': // 6-17 yrs & underweight
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa07","name":"Bicycle Riding", "pic":"image/Bicycle_Riding.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa08","name":"Football", "pic":"image/Football.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
        
                {"id":"pa06","name":"Martial-Art", "pic":"image/Martial_Art.JPG","description":"Lorem ipsum", "cat":"phys activities"}
            ];
            
            break;
        case 'b2': // 6-17 yrs & normal
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa04","name":"Gymnastics", "pic":"image/Gymnastics.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa09","name":"Tennis", "pic":"image/Tennis.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
        
                {"id":"pa03","name":"Swimming", "pic":"image/Swimming.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'b3': // 6-17 yrs & overweight
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa01","name":"Walking", "pic":"image/Walking.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa05","name":"Hiking", "pic":"image/Hiking.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
        
                {"id":"pa15","name":"Weights", "pic":"image/Weight.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'b4': // 6-17 yrs & obese
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa07","name":"Bicycle Riding", "pic":"image/Bicycle_Riding.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa05","name":"Hiking", "pic":"image/Hiking.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
        
                {"id":"pa11","name":"Jumping rope", "pic":"image/Jumping_rope.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'c1': // 18 - 64 yrs & Underweight
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa08","name":"Football", "pic":"image/Football.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa06","name":"Martial-Art", "pic":"image/Martial_Art.JPG","description":"Lorem ipsum", "cat":"phys activities"},
        
                {"id":"pa04","name":"Gymnastics", "pic":"image/Gymnastics.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'c2': // 18 - 64 yrs & Normal
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa15","name":"Weights", "pic":"image/Weight.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa16","name":"Kayak", "pic":"image/Kayaking.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
        
                {"id":"pa14","name":"Yoga", "pic":"image/Yoga.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'c3': // 18 - 64 yrs & Overweight
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa05","name":"Hiking", "pic":"image/Hiking.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa02","name":"Running", "pic":"image/Running.JPG","description":"Lorem ipsum.","cat":"phys activities"},
        
                {"id":"pa03","name":"Swimming", "pic":"image/Swimming.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'c4': // 18 - 64 yrs & Obesity
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa05","name":"Hiking", "pic":"image/Hiking.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa02","name":"Running", "pic":"image/Running.JPG","description":"Lorem ipsum.","cat":"phys activities"},
        
                {"id":"pa17","name":"Golf", "pic":"image/Golf.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'd1': // 65+ & Underweight
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa18","name":"Tai Chi", "pic":"image/Tai_chi.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa14","name":"Yoga", "pic":"image/Yoga.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
        
                {"id":"pa17","name":"Golf", "pic":"image/Golf.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'd2': // 65+ & normal
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa09","name":"Tennis", "pic":"image/Tennis.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa14","name":"Yoga", "pic":"image/Yoga.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
        
                {"id":"pa17","name":"Golf", "pic":"image/Golf.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'd3': // 65+ & Overweight
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa01","name":"Walking", "pic":"image/Walking.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa14","name":"Yoga", "pic":"image/Yoga.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
        
                {"id":"pa17","name":"Golf", "pic":"image/Golf.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        case 'd4': // 65+ & Obesity
            console.log(result); // debug
            $scope.id = [ // thu cong
                {"id":"pa01","name":"Walking", "pic":"image/Walking.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
            
                {"id":"pa18","name":"Tai Chi", "pic":"image/Tai_chi.JPG","description":"Lorem ipsum.", "cat":"phys activities"},
        
                {"id":"pa17","name":"Golf", "pic":"image/Golf.JPG","description":"Lorem ipsum.", "cat":"phys activities"}
            ];
            
            break;
        }
    };
});
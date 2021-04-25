var age;
var bmi;

$("#ageandbmi input").on("change", function () {
    age = $("input[name=age]:checked", "#ageandbmi").val();
    $("#ageandbmi input").on("change", function () {
        bmi = $("input[name=bmi]:checked", "#ageandbmi").val();
        let result = age+bmi;
        switch (result) {
            case 'a1': 
                $('#json').html('');
                $.getJSON("data.json", function (data) {
                    $.each(data, function (i, v) { 
                        if (v.id.includes("pa")) {
                            $('#json').append('<p>' + v.id + '</p>');
                            console.log(v);
                        }
                    });
                });

                break;
            case 'a2': $('#json').html('My age: ' + age + 'and my bmi is: ' + bmi); break;
            case 'a3': $('#json').html('My age: ' + age + 'and my bmi is: ' + bmi); break;
            case 'a4': $('#json').html('My age: ' + age + 'and my bmi is: ' + bmi); break;

            case 'b1': 
                $('#json').html('');
                $.getJSON("data.json", function (data) {
                    $.each(data, function (i, v) { 
                        if (v.id.includes("fg")) {
                            $('#json').append('<p>' + v.id + '</p>');
                            console.log(v);
                        }
                    });
                });

                break;
            case 'b2': $('#json').html('My age: ' + age + 'and my bmi is: ' + bmi); break;
            case 'b3': $('#json').html('My age: ' + age + 'and my bmi is: ' + bmi); break;
            case 'b4': $('#json').html('My age: ' + age + 'and my bmi is: ' + bmi); break;

            case 'c1': 
                $('#json').html('');
                $.getJSON("data.json", function (data) {
                    $.each(data, function (i, v) { 
                        if (v.id.includes("patyp")) {
                            $('#json').append('<p>' + v.id + '</p>');
                            console.log(v);
                        }
                    });
                });

                break;
            case 'c2': $('#json').html('My age: ' + age + 'and my bmi is: ' + bmi); break;
            case 'c3': $('#json').html('My age: ' + age + 'and my bmi is: ' + bmi); break;
            case 'c4': $('#json').html('My age: ' + age + 'and my bmi is: ' + bmi); break;

            case 'd1': $('#json').html('My age: ' + age + 'and my bmi is: ' + bmi); break;
            case 'd2': $('#json').html('My age: ' + age + 'and my bmi is: ' + bmi); break;
            case 'd3': $('#json').html('My age: ' + age + 'and my bmi is: ' + bmi); break;
            case 'd4': $('#json').html('My age: ' + age + 'and my bmi is: ' + bmi); break;
        }
    });
});

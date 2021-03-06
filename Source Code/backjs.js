$(document).ready(function () {
    var data = [];

    $.getJSON("data.json", function (items) {
        // console.log(items);
        data = items;

        displayData(data);
    });

    $('#display').click(function (e) { 
        e.preventDefault();

        let age = $(".checkage:checked").val(); //giu gia tri age
        let height = $(".checkheight").val().replace(',', '.'); //giu gia tri height
        let weight = $(".checkweight").val().replace(',', '.'); //giu gia tri weight

        let result = weight/(height*height);

        if (!age){
            return false;
        }

        if (result <= 18.5) {
            var resultBmi = 'under';
        }

        else if (result > 18.5 && result <= 25 ) {
            var resultBmi = 'normal';
        }

        else if (result > 25 && result <= 29.9 ) {
            var resultBmi = 'over';
        }
        else {
            var resultBmi = 'obsese';
        }

        var key = age;

        console.log(key);

        let re = new RegExp(key);
        let subdata = data.filter(item => item.id.search(key) >= 0 && item.cat.search(resultBmi) >= 0);

        displayData(subdata);
    });
    
    // //lap trinh su kien search
    // $("#formSearch").submit(function (e) {
    //     e.preventDefault();

    //     var age = $(".checkage:checked").val(); //giu gia tri age
    //     var height = $(".checkheight").val().replace(',', '.'); //giu gia tri height
    //     var weight = $(".checkweight").val().replace(',', '.'); //giu gia tri weight

    //     let re = new RegExp(search, "Running");
    //     let subdata = data.filter(item => item.name.search(re) >= 0);

    //     displayImages(subdata);

    // })
});

function displayData(items) {
    let s = ``;
    let count = 0;

    $.each(items, function (k, v) {
        
        if (count == 3) { //limit 3
            return false;
        }

        count++;
        s +=    `<div class="items">
                    <img class="physical-img" src="${v.pic}" alt="">
                    <p>${v.name}</p>
                </div>`;
        });

    $(".result").html(s);
    
}
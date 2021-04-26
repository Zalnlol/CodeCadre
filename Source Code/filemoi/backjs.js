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

        if (result < 18) {
            var resultBmi = 'Tennis';
        }

        else if (result < 18) {
            var resultBmi = 'Tennis';
        }

        else if (result < 18) {
            var resultBmi = 'Tennis';
        }
        else {
            var resultBmi = 'Tennis';
        }

        var key = age;

        console.log(resultBmi);

        let re = new RegExp(key);
        let subdata = data.filter(item => item.id.search(re) >= 0 && item.cat.search(resultBmi) >= 0);

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

    $.each(items, function (k, v) {

        s +=    `<div class="items">
                    <img src="${v.pic}" alt="">
                    <p>${v.name}</p>
                </div>`;
        });

    $(".result").html(s);
}
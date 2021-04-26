$(document).ready(function () {
    var data = [];
    var age = 'nho';
    var result = 5;

    $.getJSON("data.json", function (items) {
        // console.log(items);
        data = items;

        if (result > 18.5 && result <= 25 ) {
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

    // $('#display').click(function (e) { 
    //     e.preventDefault();

    //     age = $(".checkage:checked").val(); //giu gia tri age
    //     height = $(".checkheight").val().replace(',', '.'); //giu gia tri height
    //     weight = $(".checkweight").val().replace(',', '.'); //giu gia tri weight

    //     let result = weight/(height*height);

    //     if (!age){
    //         return false;
    //     }

    //     if (result <= 18.5) {
    //         var resultBmi = 'under';
    //     }

    //     else if (result > 18.5 && result <= 25 ) {
    //         var resultBmi = 'normal';
    //     }

    //     else if (result > 25 && result <= 29.9 ) {
    //         var resultBmi = 'over';
    //     }
    //     else {
    //         var resultBmi = 'obsese';
    //     }

    //     var key = age;

    //     console.log(key);

    //     let re = new RegExp(key);
    //     let subdata = data.filter(item => item.id.search(key) >= 0 && item.cat.search(resultBmi) >= 0);

    //     displayData(subdata);
    // });
    
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
    let max = 4; //gioi han xuat ket qua
    let randomKey = Math.floor(Math.random() * items.length); //bat dau random
    let uniqueKey = new Set(); //tao set luu unique key

    uniqueKey.add(randomKey); //add key dau tien

    while (uniqueKey.size != max) { //
        randomKey = Math.floor(Math.random() * items.length); //random tiep

        uniqueKey.add(randomKey); //add vo, neu trung thi tu huy key
        console.log(uniqueKey.size);
    }

    let getValue = uniqueKey.values(); //lay gia tri trong set
    
    let key = []; //tao array

    while (key.length != max) {
        key.push(getValue.next().value); //day key tu set qua array
    }

    console.log(key);

    for (let i = 0; i < key.length; i++) { //xuat ket qua theo so luong key
        s +=    `<div class="items col-md-3">
                    <img class="physical-img" src="${items[key[i]].pic}" alt="">
                    <p>${items[key[i]].name}</p>
                </div>`;
    }

    // while (count != 3) {
    //     s +=    `<div class="items">
    //                 <img class="physical-img" src="${items[getValue.next().value].pic}" alt="">
    //                 <p>${items[getValue.next().value].name}</p>
    //             </div>`;

    //     count++;
    //     console.log(count);
    // }
    

    // $.each(items, function (k, v) {
        
    //     if (count == 3) { //limit 3
    //         return false;
    //     }

    //     count++;
    //     s +=    `<div class="items">
    //                 <img class="physical-img" src="${v.pic}" alt="">
    //                 <p>${v.name}</p>
    //             </div>`;
    // });

    $(".result").html(s);
    
}
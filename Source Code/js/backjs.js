var tuvan = document.getElementById('tuvan');
var linkYoutube = document.getElementById('suggestVideo');

$(document).ready(function () {
    var data = [];
    var video = [];
    var age = sessionStorage.getItem('ageID').toString();
    var result = sessionStorage.getItem('BMI');
    var resultBmi;

    console.log(result);

    $.getJSON("data.json", function (items) {
        // console.log(items);
        data = items;
        if (result < 18.5) {
            resultBmi = 'under';
        }

        else if (result >= 18.5 && result <= 25 ) {
            resultBmi = 'normal';
        }

        else if (result > 25 && result <= 29.9 ) {
            resultBmi = 'over';
        }
        else {
            resultBmi = 'obsese';
        }

        var key = age;

        console.log(key);

        let subdata = data.filter(item => item.id.search(key) >= 0 && item.cat.search(resultBmi) >= 0);

        support(result, age);

        displayData(subdata);
    });

    $.getJSON("videolist.json", function (items) {
        // console.log(items);
        video = items;

        console.log(video);

        let subVideo = video.filter(item => item.cat.search(resultBmi) >= 0);

        displayVideo(subVideo);
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
    //                 <img class="physical-img" src="${v.pic}" alt="">đ
    //                 <p>${v.name}</p>
    //             </div>`;
    // });

    $(".result").html(s);
    
}

function displayVideo(items) {
    let s = ``;
    let randomSrc = Math.floor(Math.random() * items.length); //bat dau random

    console.log(randomSrc);
    
    s += `<iframe src="${items[randomSrc].src}" frameborder="0" style=" height: 100%; top: 0;left: 0;right: 0;bottom: 0; position: absolute; width: 100%;"></iframe>`

    $("#suggestVideo").html(s);
}

function support(result, age) {
    if (result < 18.5) { //gay
        switch (age) {
            case '1': //tre
                tuvan.innerHTML = 'Children with low BMI level should add extra calorie to their daily consumption and participate in moderate - intensity activity like bicycle riding, swimming & gymnastics'; //tre gay nen lam gi do

                break;
            case '2': //nglon
                tuvan.innerHTML = 'Adults who are more physically active are better able to perform everyday tasks without undue fatigue. Increased amounts of moderate-tovigorous physical activity are associated with improved cardiorespiratory and muscular ftness, including a healthier body weight and body composition'; //nguoi lon gay nen lam gi do

                break;
            case '3': //gia
                tuvan.innerHTML = 'Older adult with low BMI level may participate in Yoga, Tai Chi for muscle strengthening or certain aerobic activities like dancing, hiking and golf. '; //gia gay nen lam gi do

                break;
        }
    }

    else if (result > 18.5 && result <= 25 ) { //binh thuong
        switch (age) {
            case '1': //tre
                tuvan.innerHTML = 'It is important to provide young people opportunities and encouragement to participate in physical activities that are appropriate for their age, that are enjoyable, and that offer variety. Children and adolescents ages 6 through 17 years should do 60 minutes (1 hour) or more of moderate-to-vigorous physical activity daily.';

                break;
            case '2': //nglon
                tuvan.innerHTML = 'Adults who are physically active are healthier, feel better, and are less likely to develop many chronic diseases, such as cardiovascular disease, type 2 diabetes, and several types of cancer than are adults who are inactive.';

                break;
            case '3': //gia
                tuvan.innerHTML = 'Older adult with normal BMI level may participate in Yoga, Tai Chi for muscle strengthening or certain aerobic activities like basketball, hiking and golf.';

                break;
        }
    }

    else if (result > 25 && result <= 29.9 ) { //thua can
        switch (age) {
            case '1': //tre
                tuvan.innerHTML = 'It is important to provide young people opportunities and encouragement to participate in physical activities that are appropriate for their age, that are enjoyable, and that offer variety. Children and adolescents ages 6 through 17 years should do 60 minutes (1 hour) or more of moderate-to-vigorous physical activity daily.';

                break;
            case '2': //nglon
                tuvan.innerHTML = 'Adults who are more physically active are better able to perform everyday tasks without undue fatigue. Increased amounts of moderate-tovigorous physical activity are associated with improved cardiorespiratory and muscular ftness, including a healthier body weight and body composition';

                break;
            case '3': //gia
                tuvan.innerHTML = 'Older adult with high BMI level may participate in Yoga, Tai Chi for muscle strengthening or certain aerobic activities like jogging, hiking and golf.';

                break;
        }
    }
    else { //beo phi
        switch (age) {
            case '1': //tre
                tuvan.innerHTML = 'It is important to provide young people opportunities and encouragement to participate in physical activities that are appropriate for their age, that are enjoyable, and that offer variety. Children and adolescents ages 6 through 17 years should do 60 minutes (1 hour) or more of moderate-to-vigorous physical activity daily.';

                break;
            case '2': //nglon
                tuvan.innerHTML = 'Adults who are physically active are healthier, feel better, and are less likely to develop many chronic diseases, such as cardiovascular disease, type 2 diabetes, and several types of cancer than are adults who are inactive. ';

                break;
            case '3': //gia
                tuvan.innerHTML = 'Older Adults should move more and sit less throughout the day. Some physical activity is better than none. Adults who sit less and do any amount of moderate-to-vigorous physical activity gain some health benefts.';

                break;
        }
    }
}
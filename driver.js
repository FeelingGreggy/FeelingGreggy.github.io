// This is a comment

function createRainbowEffect(elementId) {
    var rainbowColors = [
        'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'lime'
    ];

    const TARGET = document.getElementById("mainHeader");
    const TARGET2 = document.getElementById("driverHeader");
    const target3 = document.getElementById("messageDriver");
    const target4 = document.getElementById("playlistHeader");


    var text = TARGET.innerText;
    var text2 = TARGET2.innerText;
    var text3 = target3.innerText;
    var text4 = target4.innerText;

    let rainbowText = '';
    let rainbowText2 = '';
    let rainbowText3 ='';
    let rainbowText4 = '';

    for (var i = 0; i < text.length; i++) {
        var color = rainbowColors[i % rainbowColors.length];
        rainbowText += '<span style="color:' + color + '">' + text[i] + '</span>';
    }


    for (var i = 0; i < text2.length; i++) {
        var color = rainbowColors[i % rainbowColors.length];
        rainbowText2 += '<span style="color:' + color + '">' + text2[i] + '</span>';
    }

    for (var i = 0; i < text3.length; i++) {
        var color = rainbowColors[i % rainbowColors.length];
        rainbowText3 += '<span style="color:' + color + '">' + text3[i] + '</span>';
    }

    for (var i = 0; i < text4.length; i++) {
        var color = rainbowColors[i % rainbowColors.length];
        rainbowText4 += '<span style="color:' + color + '">' + text4[i] + '</span>';
    }

    TARGET.innerHTML = rainbowText;
    TARGET2.innerHTML = rainbowText2;
    target3.innerHTML = rainbowText3;
    target4.innerHTML = rainbowText4;


}

// EVOKE THE RAINBOW, KIDDO!!!!

createRainbowEffect('rainbowText');


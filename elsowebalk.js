let imagesData = [
    {
        photo: 'images/photo01.png',
        title: 'Lonely Oak Tree',
        description: 'Hogyan tudnak a fák a klimaváltozáshoz alkalmazkodni? A fák alkalmazkodhatnak a szélsőségekhez például úgy, hogy növekedésük lassul az adott évben, vagy úgy, hogy az adott populációban csak a megfelelő alkalmazkodóképességgel rendelkező egyedek élnek túl, illetve örökítik tovább génjeiket, vagy úgy, hogy az érzékenyebb fajok az adott élőhelyen kihalnak.'
    },
    {
        photo: 'images/photo02.png',
        title: 'Drótjaim',
        description: 'Dróthorgolással és korál ásványkövekkel készítettem ezt a karkötőt és fülbevalóját.'
    },
    {
        photo: 'images/photo03.png',
        title: 'Perseidák',
        description: 'A babona szerint ha valamit kívánunk a jelenség megfigyelésekor, akkor az beteljesedik. Ha egy hullócsillag kiemelkedő fényességgel jár, tűzgömb névvel illetjük (hangrobbanás esetén: bolida), és a zuhanás után esetleg megtalálható kőzetanyagot meteoritnak nevezzük.'
    },
    {
        photo: 'images/photo04.jpg',
        title: 'Ásványköveim',
        description: 'Rózsakvarc kabosonokat, fülbevalókat és karkötőket készítettem.'
    },
    {
        photo: 'images/photo05.jpg',
        title: 'Szingularitás',
        description: 'Az a lehetséges jövőbeli esemény, amikor az emberfeletti intelligencia megjelenése miatt a technológiai fejlődés és a társadalmi változások felgyorsulnak, olyan módon és sebességgel változtatva meg a környezetet, amit a szingularitás előtt élők képtelenek felfogni vagy megbízhatóan megjósolni.'
    },
    {
        photo: 'images/photo06.jpg',
        title: 'Pipellők',
        description: 'Pont ilyennek álmodtam. Horgolt mézsárga topánkát horgoltam mára.'
    },
    {
        photo: 'images/photo07.jpg',
        title: 'Nagy utazás',
        description: 'Mikor láthatjuk újra Posseidon hullámait?'
    },
    {
        photo: 'images/photo08.jpg',
        title: 'Nala és Lizi',
        description: 'Két szeretetgombóc a mindennapokban.'
    }
];

let setActtiveThumb = () => {
    $("img[data-index]").each(function () {
        $(this).removeClass("active");
    });
    $(`img[data-index=${currentPhoto}]`).addClass("active");
}

let loadPhoto = (photoNumber) => {
    let imageDataElem = imagesData[photoNumber];
    $('#photo').attr('src', imageDataElem.photo);
    $("#photo-title").text(imageDataElem.title);
    $("#photo-description").text(imageDataElem.description);
    setActtiveThumb();
};

let currentPhoto = 0;

loadPhoto(currentPhoto);

$('#right-arrow').click(() => {
    if (currentPhoto < 7) {
        currentPhoto++;
    } else {
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
});

$('#left-arrow').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--;
    } else {
        currentPhoto = 7;
    }
    loadPhoto(currentPhoto);
});

let photocontainer = $("#photocontainer");

imagesData.forEach((item, index) => {
    let newDiv = $("<div class='other_photo_container'></div>");
    newDiv.append(`<span class='tooltiptext'>${item.title}</span>`);
    let firstElementClass = index == 0 ? " active" : "";
    newDiv.append(`<img data-index='${index}' class='otherphoto${firstElementClass}' src='${item.photo}' alt='${item.title}'>`);
    photocontainer.append(newDiv);
});

$('.otherphoto').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    currentPhoto = parseInt(indexClicked);
    loadPhoto(currentPhoto);
});

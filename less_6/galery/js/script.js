function init() {
    images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
    }
    n = 0;
    a = images.length;
    document.getElementById('next').onclick = function () {
        if (n === a) {
            n = 0;
        }
        n++;
        chaneBigPicPictureNextPrev();
    };

    document.getElementById('prev').onclick = function () {
        if (n <= 1) {
            n = a+1;
        }
        n--;
        chaneBigPicPictureNextPrev();
    }

}


function changeBigPicture(eventObj) {
    var appDiv = document.getElementById("big_picture");
    appDiv.innerHTML = "";
    var eventElement = eventObj.target;
    var imageNameParts = eventElement.id.split("_");
    n = +imageNameParts[1];
    var src = "img/gallery/big/" + imageNameParts[1] + ".jpg";
    var imageDomElement = document.createElement("img");
    imageDomElement.src = src;
    imageDomElement.onload = function () {
        appDiv.appendChild(imageDomElement);
    };
    imageDomElement.onerror = function () {
        appDiv.innerText = 'No image';
    }
}

function chaneBigPicPictureNextPrev() {
    var appDiv = document.getElementById("big_picture");
    appDiv.innerHTML = "";
    var imageNameParts = images[n-1].id.split("_");
    var src = "img/gallery/big/" + imageNameParts[1] + ".jpg";
    var imageDomElement = document.createElement("img");
    imageDomElement.src = src;
    imageDomElement.onload = function () {
        appDiv.appendChild(imageDomElement);
    };
    imageDomElement.onerror = function () {
        appDiv.innerText = 'No image';
    };

}
window.onload = init;

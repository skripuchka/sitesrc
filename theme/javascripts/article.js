var imgs = [];
var $currentImg;

$(function () {
    var images = $('#galleryContainer .item img').map(function(){
        return $(this).attr('src');
    });

    imgs = images.toArray();
});

function showPreview(img) {
    $currentImg = img;

    $('#wrapper').css('overflow', 'hidden');
    $($('#overlayGallery #previewList .item img')[0]).attr('src', $currentImg);
    $('#overlayGallery').show();
}

function nextImg() {
    var idx = imgs.indexOf($currentImg);

    if (idx == imgs.length - 1) {
        closePreview();
    } else {
        showPreview(imgs[++idx]);
    }
}

function prevImg(img) {
    var idx = imgs.indexOf($currentImg);

    if (idx == 0) {
        closePreview();
    } else {
        showPreview(imgs[--idx]);
    }
}

function closePreview() {
    $('#wrapper').css('overflow', 'auto');
    $('#overlayGallery').hide();
}
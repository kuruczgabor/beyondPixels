export const fetchPhotos = () => (
    $.ajax({
        method: 'GET',
        url: '/api/photos'
    })
);

export const fetchPhoto = photoId => (
    $.ajax({
        method: 'GET',
        url: `/api/photos/${photoId}`
    })
);

export const createPhoto = formData => {
    // debugger
    return $.ajax({
        method: 'POST',
        url: '/api/photos',
        data: formData,
        contentType: false,
        processData: false
    });
};
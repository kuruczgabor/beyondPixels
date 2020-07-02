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

export const deletePhoto = photoId => {
    return $.ajax({
        method: 'DELETE',
        url: `api/photos/${photoId}`
    })
}

export const updatePhoto = formData => {
    // debugger
    return $.ajax({
        method: 'PATCH',
        url: `api/photos/${formData.get('id')}`,
        data: formData,
        contentType: false,
        processData: false
    })
}
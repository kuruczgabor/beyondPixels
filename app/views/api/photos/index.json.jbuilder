@photos.each do |photo|
    json.set! photo.id do
        json.extract! photo, :id, :author_id, :title, :description
        json.author photo.author.username
        json.image_url url_for(photo.photo_file)
    end
end

@photos.each do |photo|
    json.set! photo.id do 
        json.extract! photo, :id, :title, :description, :author_id, :created_at, :updated_at
        json.photoUrl url_for(photo.photo_file)
    end
end

json.array! @photos do |post|
    json.extract! photo, :id, :title, :description, :author_id
    json.photoUrl url_for(photo.photo_file)
end

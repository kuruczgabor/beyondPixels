json.extract! photo, :id, :title, :description, :author_id
json.photoUrl url_for(photo.photo_file)

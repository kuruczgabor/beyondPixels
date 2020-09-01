json.extract! photo, :id, :title, :description, :author_id, :created_at, :updated_at
json.photoUrl url_for(photo.photo_file)

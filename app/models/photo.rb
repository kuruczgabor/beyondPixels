class Photo < ApplicationRecord

    validates :title, :author_id, presence: true

    has_one_attached :photo_file

end

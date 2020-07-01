class Photo < ApplicationRecord

    validates :title, presence: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_one_attached :photo_file

end

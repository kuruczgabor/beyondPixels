class Photo < ApplicationRecord

    validates :title, presence: true
    # validates :ensure_photo_file

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_one_attached :photo_file

    # def ensure_photo_file
    #     debugger
    #     if !self.photo_file.attached?
    #         debugger
    #         errors[:photo_file] << 'must be attached'
    #     end
    # end

end

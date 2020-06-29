class Api::PhotosController < ApplicationController

    def show
        @photo = Photo.find(params[:id])
        render :show
    end

    def index
        @photos = Photo.all
        render :index
    end

    def create
        @photo = Photo.new(photo_params)
        if @photo.save
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def photo_params
        params.require(:photo).permit(:title, :description, :author_id, :photo_file)
    end

end

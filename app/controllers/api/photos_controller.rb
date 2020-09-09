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
        if photo_params[:photo_file] != 'null'
            @photo = Photo.new(photo_params)
            if @photo.save
                render :show
            else
                render @photo.errors.full_messages, status: 422
            end
        else
            render json: ["Please choose a file"], status: 422
        end

    end

    def destroy
        @photo = Photo.find(params[:id])
        if @photo
            @photo.destroy
            render :show
        else
            render ["Photo not found"]
        end
    end

    def update
        @photo = Photo.find(params[:id])
        if @photo.update(params.require(:photo).permit(:title, :description)) 
            render :show
        else
            render json: @photo.errors.full_messages, status: 422
        end
        
    end

    private

    def photo_params
        params.require(:photo).permit(:title, :description, :author_id, :photo_file)
    end

end

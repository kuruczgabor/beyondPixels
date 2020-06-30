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
        # debugger
        @photo = Photo.new(photo_params)
        # debugger
        if @photo.save
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = Photo.find(params[:id])
        if @post
            @post.destroy
            render :show
        else
            render ["Photo not found"]
        end
    end

    def update
        @post = Photo.find(params[:photo][:id])
        render :show if @post.update(photo_params) 
    end

    private

    def photo_params
        params.require(:photo).permit(:title, :description, :author_id, :photo_file)
    end

end

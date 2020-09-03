class Api::FollowingsController < ApplicationController

    def index
        @followings = Following.all
        render :index
    end

    def create
        @follow = Following.new(following_params)
        if @following.save

        else
            render json: @follow.errors.full_messages, status: 422
        end
    end

    private

    def following_params
        params.require(:following).permit(:follower_id, :followee_id)
    end

end
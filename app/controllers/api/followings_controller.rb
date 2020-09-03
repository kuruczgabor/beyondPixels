class Api::FollowingsController < ApplicationController

    def index
        @followings = Following.all
        render :index
    end

    def create
        debugger
        @following = Following.new(following_params)
        debugger
        if @following.save
            render :show
        else
            render json: @follow.errors.full_messages, status: 422
        end
    end

    private

    def following_params
        debugger
        params.require(:following).permit(:follower_id, :followee_id)
    end

end
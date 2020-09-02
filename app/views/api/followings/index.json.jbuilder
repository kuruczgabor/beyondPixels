json.followings do 
  @followings.each do |following|
    json.set! following.id do 
      json.extract! following, :id, :follower_id, :followee_id
      json.follower_username follow.follower.username
      json.followee_username follow.followee.username
    end
  end
end
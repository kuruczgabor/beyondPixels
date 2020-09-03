json.followings do 
  @followings.each do |following|
    json.set! following.id do 
      json.extract! following, :id, :follower_id, :followee_id
      json.follower_username following.follower.username
      json.followee_username following.followee.username
    end
  end
end
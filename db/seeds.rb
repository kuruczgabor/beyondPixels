# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
Following.delete_all
Photo.delete_all

user1 = User.create!(username: 'demouser', password: 'password');
user2 = User.create!(username: 'markzuckerberg', password: 'password');
user3 = User.create!(username: 'jeffbezos', password: 'password');
user4 = User.create!(username: 'sundarpichai', password: 'password');
user5 = User.create!(username: 'satyanadella', password: 'password');
user6 = User.create!(username: 'jackdorsey', password: 'password');
user7 = User.create!(username: 'marcbenioff', password: 'password');
user8 = User.create!(username: 'timcook', password: 'password');
user9 = User.create!(username: 'billgates', password: 'password');
user10 = User.create!(username: 'elonmusk', password: 'password');

follow1 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow2 = Following.create!(follower_id: user1.id, followee_id: user3.id);
follow3 = Following.create!(follower_id: user1.id, followee_id: user4.id);
follow4 = Following.create!(follower_id: user1.id, followee_id: user6.id);
follow5 = Following.create!(follower_id: user1.id, followee_id: user7.id);
follow6 = Following.create!(follower_id: user1.id, followee_id: user10.id);

follow7 = Following.create!(follower_id: user2.id, followee_id: user1.id);
follow8 = Following.create!(follower_id: user2.id, followee_id: user3.id);
follow9 = Following.create!(follower_id: user2.id, followee_id: user5.id);
follow10 = Following.create!(follower_id: user2.id, followee_id: user8.id);
follow11 = Following.create!(follower_id: user2.id, followee_id: user9.id);
follow12 = Following.create!(follower_id: user2.id, followee_id: user10.id);

follow13 = Following.create!(follower_id: user3.id, followee_id: user1.id);
follow14 = Following.create!(follower_id: user3.id, followee_id: user2.id);
follow15 = Following.create!(follower_id: user3.id, followee_id: user6.id);
follow16 = Following.create!(follower_id: user3.id, followee_id: user7.id);
follow17 = Following.create!(follower_id: user3.id, followee_id: user8.id);

follow18 = Following.create!(follower_id: user4.id, followee_id: user2.id);
follow19 = Following.create!(follower_id: user4.id, followee_id: user8.id);
follow20 = Following.create!(follower_id: user4.id, followee_id: user9.id);
follow21 = Following.create!(follower_id: user4.id, followee_id: user10.id);

follow22 = Following.create!(follower_id: user5.id, followee_id: user1.id);
follow23 = Following.create!(follower_id: user5.id, followee_id: user2.id);
follow24 = Following.create!(follower_id: user5.id, followee_id: user3.id);
follow25 = Following.create!(follower_id: user5.id, followee_id: user4.id);
follow26 = Following.create!(follower_id: user5.id, followee_id: user6.id);
follow27 = Following.create!(follower_id: user5.id, followee_id: user7.id);

follow28 = Following.create!(follower_id: user6.id, followee_id: user4.id);
follow29 = Following.create!(follower_id: user6.id, followee_id: user5.id);
follow30 = Following.create!(follower_id: user6.id, followee_id: user8.id);
follow31 = Following.create!(follower_id: user6.id, followee_id: user9.id);

follow32 = Following.create!(follower_id: user7.id, followee_id: user1.id);
follow33 = Following.create!(follower_id: user7.id, followee_id: user2.id);
follow34 = Following.create!(follower_id: user7.id, followee_id: user3.id);
follow35 = Following.create!(follower_id: user7.id, followee_id: user6.id);
follow36 = Following.create!(follower_id: user7.id, followee_id: user8.id);

follow37 = Following.create!(follower_id: user8.id, followee_id: user1.id);
follow38 = Following.create!(follower_id: user8.id, followee_id: user2.id);
follow39 = Following.create!(follower_id: user8.id, followee_id: user4.id);
follow40 = Following.create!(follower_id: user8.id, followee_id: user5.id);
follow41 = Following.create!(follower_id: user8.id, followee_id: user9.id);

follow42 = Following.create!(follower_id: user9.id, followee_id: user3.id);
follow43 = Following.create!(follower_id: user9.id, followee_id: user4.id);
follow44 = Following.create!(follower_id: user9.id, followee_id: user5.id);
follow45 = Following.create!(follower_id: user9.id, followee_id: user6.id);
follow46 = Following.create!(follower_id: user9.id, followee_id: user8.id);

follow47 = Following.create!(follower_id: user10.id, followee_id: user1.id);
follow48 = Following.create!(follower_id: user10.id, followee_id: user2.id);
follow49 = Following.create!(follower_id: user10.id, followee_id: user7.id);
follow50 = Following.create!(follower_id: user10.id, followee_id: user8.id);

photo1 = Photo.new(title:'Dark Forest' , description:'Lake view before sunset' , author_id: user2.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/andrew-sit-Trrypz3imi4-unsplash.jpg')
photo1.photo_file.attach(io: file, filename: 'darkforest.jpg')
photo1.save!

photo2 = Photo.new(title:'Half Dome' , description:'A wonderful night in Yosemite' , author_id: user1.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/awar-meman-Ujt8Ti-5OQ0-unsplash.jpg')
photo2.photo_file.attach(io: file, filename: 'halfdome.jpg')
photo2.save!

photo3 = Photo.new(title:'Waves' , description:'Exciting shapes of the beach' , author_id: user2.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/chris-stenger-kOzIeh8Kvyw-unsplash.jpg')
photo3.photo_file.attach(io: file, filename: 'waves.jpg')
photo3.save!

photo4 = Photo.new(title:'A Night in the Park' , description:'My first long exposure shot' , author_id: user2.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/everardo-sanchez-DVepzdHCIso-unsplash.jpg')
photo4.photo_file.attach(io: file, filename: 'night_in_the_park.jpg')
photo4.save!

photo5 = Photo.new(title:'Sunset of Hawaii' , description:'The view before our dinner' , author_id: user3.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/hilda-trinidad-ZqwSxukMhac-unsplash.jpg')
photo5.photo_file.attach(io: file, filename: 'hawaii_sunset.jpg')
photo5.save!

photo6 = Photo.new(title:'Full Moon' , description:'In the middle of a scary night' , author_id: user3.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/ig-botto-ph-bXA5jupKkOg-unsplash.jpg')
photo6.photo_file.attach(io: file, filename: 'moon.jpg')
photo6.save!

photo7 = Photo.new(title:'Foggy Morning' , description:'A lake in Norway' , author_id: user3.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/kevin-mueller-f0l4dyQt4Gk-unsplash.jpg')
photo7.photo_file.attach(io: file, filename: 'foggy_morning.jpg')
photo7.save!

photo8 = Photo.new(title:'Jellyfish in Monterey' , description:'They look like aliens' , author_id: user1.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/leon-bublitz-lbxgUNA5Zjc-unsplash.jpg')
photo8.photo_file.attach(io: file, filename: 'jellyfish.jpg')
photo8.save!

photo9 = Photo.new(title:'Afternoon in Norway' , description:'It was a cloudy day' , author_id: user4.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/livia-buhler-hZ-r4rYYCZI-unsplash.jpg')
photo9.photo_file.attach(io: file, filename: 'norway.jpg')
photo9.save!

photo10 = Photo.new(title:'Sunset in the Woods' , description:'It was an amazing weekend with my family' , author_id: user4.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/liviu-emanuel-_0yPY4w9eBg-unsplash.jpg')
photo10.photo_file.attach(io: file, filename: 'sunset.jpg')
photo10.save!

photo11 = Photo.new(title:'Details of the Forest' , description:'Green is an amazing color' , author_id: user4.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/mehdi-babousan-_yrwt_2FxRA-unsplash.jpg')
photo11.photo_file.attach(io: file, filename: 'details.jpg')
photo11.save!

photo12 = Photo.new(title:'The Cliffs' , description:'A beautiful place for hiking' , author_id: user5.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/mitchell-orr-vy2cHJvaBHk-unsplash.jpg')
photo12.photo_file.attach(io: file, filename: 'cliffs.jpg')
photo12.save!

photo13 = Photo.new(title:'Lonely Morning' , description:'A fisherman of the bay' , author_id: user5.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/muhammad-ma-ruf-6vztoOlqBno-unsplash.jpg')
photo13.photo_file.attach(io: file, filename: 'morning.jpg')
photo13.save!

photo14 = Photo.new(title:'The Peak' , description:'It was a stormy day' , author_id: user10.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/nathan-thomassin-6AE-QTW3wqM-unsplash.jpg')
photo14.photo_file.attach(io: file, filename: 'peak.jpg')
photo14.save!

photo15 = Photo.new(title:'Desert View' , description:'The shapes of the desert are outstanding' , author_id: user1.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/nathan-thomassin-E6xV-UxrKSg-unsplash.jpg')
photo15.photo_file.attach(io: file, filename: 'desert.jpg')
photo15.save!

photo16 = Photo.new(title:'Snowy Montain' , description:'Its summit is the highest point in the county' , author_id: user5.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/nathan-thomassin-PTLof___Ig4-unsplash.jpg')
photo16.photo_file.attach(io: file, filename: 'snowy.jpg')
photo16.save!

photo17 = Photo.new(title:'The Montains' , description:'The view of a foggy morning' , author_id: user5.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/nathan-thomassin-pGT8GQEdpsg-unsplash.jpg')
photo17.photo_file.attach(io: file, filename: 'montains.jpg')
photo17.save!

photo18 = Photo.new(title:'The Forest' , description:'My new drone is amazing' , author_id: user1.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/olena-sergienko-MPKFmy_Xc_A-unsplash.jpg')
photo18.photo_file.attach(io: file, filename: 'forest.jpg')
photo18.save!

photo19 = Photo.new(title:'Snowy Peaks' , description:'The beginnnin of a wonderful day' , author_id: user1.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/peter-luo-wuxsafx2quc-unsplash.jpg')
photo19.photo_file.attach(io: file, filename: 'snowy_peaks.jpg')
photo19.save!

photo20 = Photo.new(title:'The Rocks and the Sea' , description:'A beautiful combination of colors' , author_id: user9.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/philippe-gauthier-yrhdBWLUxoQ-unsplash.jpg')
photo20.photo_file.attach(io: file, filename: 'rocks.jpg')
photo20.save!

photo21 = Photo.new(title:'The Adventurer' , description:'A nice day with a friend' , author_id: user9.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/photo-1508921912186-1d1a45ebb3c1.jpeg')
photo21.photo_file.attach(io: file, filename: 'adventurer.jpeg')
photo21.save!

photo22 = Photo.new(title:'The Road' , description:'On the way home' , author_id: user8.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/photo-1531804055935-76f44d7c3621.jpeg')
photo22.photo_file.attach(io: file, filename: 'road.jpeg')
photo22.save!

photo23 = Photo.new(title:'The Book' , description:'The best place for reading' , author_id: user1.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/photo-1541963463532-d68292c34b19.jpeg')
photo23.photo_file.attach(io: file, filename: 'book.jpeg')
photo23.save!

photo24 = Photo.new(title:'Sunset in the Montains' , description:'My friend showed me this amazing place' , author_id: user8.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/photo-1555445091-5a8b655e8a4a.jpeg')
photo24.photo_file.attach(io: file, filename: 'sunset.jpeg')
photo24.save!

photo25 = Photo.new(title:'Wild Waves' , description:'The first destination of our road trip' , author_id: user8.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/road-trip-with-raj-w9RUG6yTp4A-unsplash.jpg')
photo25.photo_file.attach(io: file, filename: 'wild_waves.jpg')
photo25.save!

photo26 = Photo.new(title:'Zion' , description:'My favorite national park' , author_id: user1.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/saira-DHHk81ERZVw-unsplash.jpg')
photo26.photo_file.attach(io: file, filename: 'zion.jpg')
photo26.save!

photo27 = Photo.new(title:'Gold and Blue' , description:'A sunny afternoon' , author_id: user5.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/saira-qIlMyQp5uLI-unsplash.jpg')
photo27.photo_file.attach(io: file, filename: 'gold.jpg')
photo27.save!

photo28 = Photo.new(title:'Singapore Botanic Garden' , description:'My favorite city' , author_id: user6.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/sam-lf6LVilktbA-unsplash.jpg')
photo28.photo_file.attach(io: file, filename: 'singapore.jpg')
photo28.save!

photo29 = Photo.new(title:'Cricket on the Leave' , description:'I enjoy macro photography' , author_id: user6.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/samuel-toh-rNzZ8cGEbjI-unsplash.jpg')
photo29.photo_file.attach(io: file, filename: 'cricket.jpg')
photo29.save!

photo30 = Photo.new(title:'The Reflection' , description:'The sky was beautiful' , author_id: user6.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/serjan-midili-ciR9wz52ov4-unsplash.jpg')
photo30.photo_file.attach(io: file, filename: 'reflection.jpg')
photo30.save!

photo31 = Photo.new(title:'Night under the Stars' , description:'I love these kind of photos' , author_id: user7.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/smit-shah-I-U97OozkGs-unsplash.jpg')
photo31.photo_file.attach(io: file, filename: 'under_stars.jpg')
photo31.save!

photo32 = Photo.new(title:'Purple Sky' , description:'The sky after a wonderful sunset' , author_id: user7.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/waldemar-brandt-2hAEHCt25eM-unsplash.jpg')
photo32.photo_file.attach(io: file, filename: 'purple.jpg')
photo32.save!

photo33 = Photo.new(title:'The Last Tree of the Desert' , description:'It was extremely hot' , author_id: user5.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/wolfgang-hasselmann-dTGEhEmn3rU-unsplash.jpg')
photo33.photo_file.attach(io: file, filename: 'tree.jpg')
photo33.save!

photo34 = Photo.new(title:'The Trees' , description:'The view on the beginnning of the roadtrip' , author_id: user10.id)
file = open('https://beyondpixels-seeds.s3-us-west-1.amazonaws.com/yassine-amraoui-sWIoiOx1XTo-unsplash.jpg')
photo34.photo_file.attach(io: file, filename: 'trees.jpg')
photo34.save!


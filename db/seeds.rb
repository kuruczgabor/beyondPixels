# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
Photo.delete_all

user1 = User.create!(username: 'demouser', password: 'password');
user2 = User.create!(username: 'demouser', password: 'password');
user3 = User.create!(username: 'demouser', password: 'password');
user4 = User.create!(username: 'demouser', password: 'password');
user5 = User.create!(username: 'demouser', password: 'password');
user6 = User.create!(username: 'demouser', password: 'password');
user7 = User.create!(username: 'demouser', password: 'password');
user8 = User.create!(username: 'demouser', password: 'password');
user9 = User.create!(username: 'demouser', password: 'password');
user10 = User.create!(username: 'demouser', password: 'password');

follow1 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow2 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow3 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow4 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow5 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow6 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow7 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow8 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow9 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow10 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow11 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow12 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow13 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow14 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow15 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow16 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow17 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow18 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow19 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow20 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow21 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow22 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow23 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow24 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow25 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow26 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow27 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow28 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow29 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow30 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow31 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow32 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow33 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow34 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow35 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow36 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow37 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow38 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow39 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow40 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow41 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow42 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow43 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow44 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow45 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow46 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow47 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow48 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow49 = Following.create!(follower_id: user1.id, followee_id: user2.id);
follow50 = Following.create!(follower_id: user1.id, followee_id: user2.id);

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!

photo1 = Photo.new(title:'...' , description:'...' , author_id: user1.id)
file = open('...')
photo1.photo.attach(io: file, filename: '....jpg')
photo1.save!


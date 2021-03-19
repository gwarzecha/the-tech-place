const User = require('./User');
const Post = require('./Post');

// creates associations between user and posts
User.hasMany(Post, {
  foreignKey: 'user_id'
});

// defines the relationship of the Post model to the User; post can belong to 1 user, not many
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Post };
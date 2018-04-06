hexo.extend.helper.register('thumbnail', function (post) {
    return post.thumbnail || post.banner || '';
});

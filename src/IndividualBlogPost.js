import React from 'react';
import PropTypes from 'prop-types';
import allPosts from './posts';
import Post from './Post';

function IndividualBlogPost(props) {
  const thePost = allPosts.find(post => post.slug === props.match.params.blogSlug);

  return (
    <div className="page-container">
      <Post post={thePost} />
    </div>
  );
}

IndividualBlogPost.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ blogSlug: PropTypes.string }) }).isRequired,
};

export default IndividualBlogPost;

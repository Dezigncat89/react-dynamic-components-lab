import React, { Component } from 'react'
import BlogPost from "./src/BlogPost"
import App from "./src/App

class Comment extends React.Component {
  render() {
    return (
      <div className ="comment">
        {this.props.commentText}
      </div>
    )
  }
}

export default Comment



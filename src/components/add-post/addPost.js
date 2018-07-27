import React, { Component } from 'react';
import { Input, Button } from 'antd';
import SimpleMDE from 'simplemde';

import './addPost.css';
import 'simplemde/dist/simplemde.min.css'

export default class AddPost extends Component {
  componentDidMount() {
    new SimpleMDE({ element: document.getElementById("editor") })
  }
  render() {
    return (
      <div className="add-post">
        <div className="post-title item">
          <label>
            文章标题:<Input placeholder="请输入文章标题" />
          </label>
        </div>
        <div className="post-title item">
          <label>
            文章描述:<Input placeholder="请输入文章标题" />
          </label>
        </div>
        <div >
          <div>文章内容:</div>
          <textarea id="editor" cols="30" rows="10"></textarea>
        </div>
        <Button type="primary">提交</Button>
      </div>
    )
  }
}

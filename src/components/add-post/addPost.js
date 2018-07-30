import React, { Component } from 'react';
import { Input, Button, Select } from 'antd';
import SimpleMDE from 'simplemde';

import './addPost.css';
import 'simplemde/dist/simplemde.min.css'

const Option = Select.Option;

export default class AddPost extends Component {
  componentDidMount() {
    this.editor = new SimpleMDE({ element: document.getElementById("editor") })
  }
  handleSubmit() {
    console.log(this.editor.markdown(this.editor.value()))
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
        <div className="post-title item">
          <label>
            文章类型: 
            <Select defaultValue="前端技术" style={{width: 100}}>
              <Option value="前端技术">前端技术</Option>
              <Option value="生活趣事">生活趣事</Option>
            </Select>
          </label>
        </div>
        <div >
          <div>文章内容:</div>
          <textarea id="editor" cols="30" rows="10"></textarea>
        </div>
        <Button type="primary" onClick={this.handleSubmit.bind(this)}>提交</Button>
      </div>
    )
  }
}

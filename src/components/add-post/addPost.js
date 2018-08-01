import React, { Component } from 'react';
import { Input, Button, Select, Upload, Icon, Row, Col } from 'antd';
import SimpleMDE from 'simplemde';

import './addPost.css';
import 'simplemde/dist/simplemde.min.css'

const Option = Select.Option;

export default class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
      title: '',
      descript:'',
      content:'',
      type: '前端技术',
      image: ''
    };
    this.handleTitleChange=this.handleTitleChange.bind(this);
    this.handleDescChange=this.handleDescChange.bind(this);
    this.handleTypeChange=this.handleTypeChange.bind(this);
  }
  componentDidMount() {
    this.editor = new SimpleMDE({ element: document.getElementById("editor") });
    const _this = this;
    //获取markdown的html格式内容
    this.editor.codemirror.on("change", function(){
      _this.setState({
        content: _this.editor.markdown(_this.editor.value())
      });
    });
  }
  handleSubmit() {
    console.log(this.state);
  }
  upLoadImg(e) {
    console.log(e.fileList);
    this.setState({
      fileList: e.fileList,
      image: e.fileList[0]?e.fileList[0].name:''
    });
  }
  handleRemoveImg(e) {
    this.setState({
      image: ''
    });
  }
  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }
  handleDescChange(e) {
    this.setState({
      descript: e.target.value
    });
  }
  handleTypeChange(val) {
    this.setState({
      type: val
    });
  }
  render() {
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="add-post">
        <div className="post-title item">
          <label>
            文章标题:<Input placeholder="请输入文章标题" onChange={this.handleTitleChange} />
          </label>
        </div>
        <div className="post-title item">
          <label>
            文章描述:<Input placeholder="请输入文章标题" onChange={this.handleDescChange} />
          </label>
        </div>
        <div className="post-title item">
          <label>
            文章类型: <br />
            <Select defaultValue={this.state.type} style={{ width: 100 }} onChange={this.handleTypeChange} >
              <Option value="前端技术">前端技术</Option>
              <Option value="生活趣事">生活趣事</Option>
            </Select>
          </label>
        </div>
        <Row>
          <Col span={10}>
            <span>添加标题图片：</span>
            <Upload
              action="/upload"
              name="imageFile"
              listType="picture-card"
              fileList={this.state.fileList}
              onChange={this.upLoadImg.bind(this)}
              onRemove={this.handleRemoveImg.bind(this)}
            >
              {this.state.fileList.length >= 1 ? null : uploadButton}
            </Upload>
          </Col>
        </Row>
        <div >
          <div>文章内容:</div>
          <textarea id="editor" cols="30" rows="10"></textarea>
        </div>
        <Button type="primary" onClick={this.handleSubmit.bind(this)}>提交</Button>
      </div>
    )
  }
}

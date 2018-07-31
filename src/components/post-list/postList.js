import React, { Component } from 'react'
import { Table, Icon, Divider, Row, Col } from 'antd';

export default class PostList extends Component {
  render() {
    const columns = [{
      title: '标题',
      dataIndex: 'title',
      key: 'title'
    }, {
      title: '时间',
      dataIndex: 'date',
      key: 'date',
    }, {
      title: '文章描述',
      dataIndex: 'descript',
      key: 'descript',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => {
        // console.log(text);
        console.log(record);
        return (
          <span>
            <a href="javascript:;">删除</a>
            <Divider type="vertical" />
            <a href="javascript:;" className="ant-dropdown-link">
              修改
            </a>
          </span>
        )
      },
    }];

    const data = [{
      key: '1',
      title: 'John Brown',
      date: 32,
      descript: 'New York No. 1 Lake Park',
      id: 123
    }, {
      key: '2',
      title: 'Jim Green',
      date: 42,
      descript: 'London No. 1 Lake Park',
    }, {
      key: '3',
      title: 'Joe Black',
      date: 32,
      descript: 'Sidney No. 1 Lake Park',
    }];
    return (
      <div>
        <Row>
          <Col span={24}>
            <Table pagination={{"defaultPageSize":1}} bordered columns={columns} dataSource={data} />
          </Col>
        </Row>
      </div>
    )
  }
}

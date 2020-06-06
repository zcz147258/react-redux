import React, { Component } from "react";
import { Card, Button, Table,Tag,Tooltip,Modal,Row, Col  } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
//导入 api
import { GetArticle } from '../../api'
//映射表头

const mapTableTitle = {
  id:'编号',
  //title author amount createAt  images
  title:'标题',
  author:'作者',
  amount: '浏览次数',
  createAt:'创建时间',
  images:'图片'
}
class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource:[],
      total:10,
      columns:[],
      isLoading:false
    };
  }
  edit = (record)=>{
    console.log(record)
    // Modal.confirm({
    //   title:'标题',
    //   content:`删除【${record.title}】? 此操作不可逆，谨慎操作!`,
    // })
    //打开一个编辑表单页面

  }
  GetArticleTopics = ()=>{
    this.setState({isLoading:true})
    GetArticle().then((res)=>{
      var first = res.result[0]
      var keys = Object.keys(first)
      var columns = keys.map((item)=>{
        if(item === 'amount'){
          return {
            title: mapTableTitle[item],
            dataIndex: item,
            key: item,
            render:(text,record,index)=>{
               return (
                <Tooltip title={record.amount >=100? '阅读数超过1000':'阅读数低于1000'}>
                <Tag color={record.amount >=100? 'red':'green'}>{record.amount}</Tag>
                </Tooltip>
               )
            }
          }
        }
        return {
          title: mapTableTitle[item],
          dataIndex: item,
          key: item
        }
      })
      columns.push({
        title:'操作',
        dataIndex:'action',
        key:'action',
        render:(text,record,index)=>{
            return (
              <ButtonGroup>
                <Button size="small" type="primary" onClick={()=>this.edit(record)}>修改</Button>
                <Button size="small" type="danger">删除</Button>
              </ButtonGroup>
            )
        }
      })
      //设置请求
      this.setState({
        dataSource: res.result,
        columns:columns
      })
    }).catch((err)=>{console.log(err)}).finally(()=>{
        this.setState({isLoading:false},()=>{
          console.log(this.state.isLoading)
        })
    });
  }
  //生命周期函数调用
  componentDidMount(){
    this.GetArticleTopics();
  }
  render() {
    return (
      <div>
        <Card
          title="文章信息"
          extra={<Button type="primary">导出excel</Button>}
        >
          <Table
          loading={this.state.isLoading}
          rowKey={record => record.id}
           dataSource={this.state.dataSource}
           columns={this.state.columns}
           pagination={
               {
                    total:this.state.total,
                    pageSize:4
               }
           }
           />;
        </Card>
      </div>
    );
  }
}

export default Article;

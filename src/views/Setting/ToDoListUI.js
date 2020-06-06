import React, { Component } from "react";
import { Input, Button, List } from "antd";
class ToDoListUI extends Component {
  render() {
    return (
      <div>
        <div>
          <Input
            size="large"
            // placeholder={this.state.inputValue}
            style={{ width: "300px" }}
            value={this.props.inputValue}
            onChange={(e) => this.props.changeInputValue(e)}
          />
          <Button
            size="large"
            type="primary"
            onClick={() => {
              this.props.ClickBtn();
            }}
            style={{ marginLeft: "20px" }}
          >
            增加
          </Button>
        </div>
        <div>
          <List
            bordered
            style={{ width: "300px" }}
            dataSource={this.props.list}
            renderItem={(item, index) => (
              <List.Item
                onClick={() => {
                  this.props.DelItem(index);
                }}
              >
                {item.list}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default ToDoListUI;

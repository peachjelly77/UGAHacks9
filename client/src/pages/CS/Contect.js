import React from 'react'
import { Form, Row, Col } from "antd"
import { useNavigate } from "react-router-dom";
import Button from "../button"


function Contect() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center h-screen items-center bg-secondary">
      <div className="card p-3">
        <h1 className="text-xl mb-1">Thank you for your opinion.</h1>
        <hr />
        <Form layout="vertical" className="mt-1">
          <Row
            gutter={16}>
            <Col span={11}>
              <Form.Item label="First Name" name="title">
                <input type="text" />
              </Form.Item>
            </Col>
  
            <Col span={11}>
              <Form.Item label="Last Name" name="title">
                <input type="text" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Option" name="option">
                <select name="" id="">
                  <option value="">Select Option</option>
                  <option value="Suggestions">Suggestions</option>
                  <option value="fund raising">fund raising</option>
                  <option value="Complaints">Complaints</option>
                  <option value="Ask">Ask</option>
                </select>
              </Form.Item>
            </Col>

            <Col span={23}>
              <Form.Item label="Opinion" name="opinion">
                <textarea type="text" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Email" name="title">
                <input type="text" />
              </Form.Item>
            </Col>


          </Row>

          <div className="flex flex-col mt-2 gap-1">
            <Button fullWidth title="Submit" type="submit" onClick={() => navigate(`/`)} />
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Contect;
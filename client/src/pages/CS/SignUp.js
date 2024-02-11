import React from 'react'
import { Form, Row, Col } from "antd"
import { useNavigate } from "react-router-dom";
import Button from "../button"


function SignUp() {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center h-screen items-center bg-primary">
            <div className="card p-3">
                <h1 className="text-xl mb-1">Join our event</h1>
                <hr />
                <Form layout="vertical" className="mt-1">
                    <Row gutter={16}>
                        <Col span={20}>
                            <Form.Item label="Date of participation" name="schedule">
                                <input type="date" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="First Name"
                                name="firstName"
                                rules={[{ required: true, message: "Enter your First Name" }]}
                            >
                                <input type="text" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Last Name"
                                name="lastName"
                                rules={[{ required: true, message: "Enter your Last Name" }]}
                            >
                                <input type="text" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: "Enter your Email" }]}
                            >
                                <input type="email" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Phone Number"
                                name="phoneNumber"
                                rules={[{ required: true, message: "Enter your Phone Number" }]}
                            >
                                <input type="tel" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <div className="flex flex-col mt-2 gap-1">
                        <Button fullWidth title="REGISTER" type="submit" onClick={() => navigate(`/`)} />
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default SignUp;
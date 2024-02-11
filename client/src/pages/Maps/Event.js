import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import icon from '../../images/leafIcon.png'
import v1 from '../../images/v1.png'
import v2 from '../../images/v2.png'
import v3 from '../../images/v3.png'
import v4 from '../../images/v4.png'
import p1 from '../../images/p1.png'
import { Row, Col } from "antd";


function Event() {
    const navigate = useNavigate();
    const [showText, setShowText] = useState(false);
    return (
        <div>
            <div className='layout p-1'>
                <div className='header flex justify-between'>
                    <div>
                        <img src={icon} alt="" height={70} onClick={() => { navigate("/") }} />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div>
                <div className="flex items-center justify-center">
                    <div style={{ marginRight: '50px' }}>
                        {/* Circular frame for the image */}
                        <div style={{ width: '400px', height: '400px', borderRadius: '50%', overflow: 'hidden', border: '1px solid', position: 'relative' }}
                            onMouseEnter={() => setShowText(true)}
                            onMouseLeave={() => setShowText(false)}>
                            <img src={p1} alt="" height={20} onClick={() => { navigate("/event/signup") }} style={{ width: '100%', height: 'auto', cursor: 'pointer' }} />
                            {showText && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                        padding: '5px 10px',
                                        borderRadius: '5px'
                                    }}
                                >
                                    Click and sign up
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <p style={{ fontWeight: 'bold' }}>
                            I pledge to safeguard our planet! (Environmental activities for families)
                        </p>
                        <p>
                            As our planet weeps under the weight of global warming, even the smallest act of picking up recyclable trash can make a monumental difference. Let's unite as Earth Guardians and bring smiles back to our precious Earth.
                        </p>
                        <p className='text-sm cursor-pointer underline' onClick={() => { navigate("/event/map") }}>
                            {"Park near Me"}
                        </p>
                    </div>
                </div>

                <div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1 className='text-md uppercase'>
                        {"Volunteer near me"}
                    </h1>
                    <Row gutter={[16, 16]} className="mt-2">
                        <Col span={6}>
                            <div className='card flex flex-col gap-1 cursor-pointer '
                                onClick={() => navigate(`/event/signup`)}
                            >
                                <img src={v1} alt="" height={200} />
                                <div className='flex justify-center gap-1 p-2'>
                                    <h1 className="text-sm">
                                        {"Connections Academy"}
                                    </h1>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className='card flex flex-col gap-1 cursor-pointer'
                                onClick={() => navigate(`/event/signup`)}
                            >
                                <img src={v2} alt="" height={200} />
                                <div className='flex justify-center gap-1 p-2'>
                                    <h1 className="text-sm">
                                        {"Animal Rescue"}
                                    </h1>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className='card flex flex-col gap-1 cursor-pointer'
                                onClick={() => navigate(`/event/signup`)}
                            >
                                <img src={v3} alt="" height={200} />
                                <div className='flex justify-center gap-1 p-2'>
                                    <h1 className="text-sm">
                                        {"Taking care of neighborhood"}
                                    </h1>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className='card flex flex-col gap-1 cursor-pointer'
                                onClick={() => navigate(`/event/signup`)}
                            >
                                <img src={v4} alt="" height={200} />
                                <div className='flex justify-center gap-1 p-2'>
                                    <h1 className="text-sm">
                                        {"Charity Bazaar"}
                                    </h1>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Event
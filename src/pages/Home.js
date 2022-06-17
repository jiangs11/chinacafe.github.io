import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { MdLocationOn, MdEmail } from "react-icons/md";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
    const iconSize = 30;
    const styles = {
        iconStyle: {
            marginRight: 10,
        },
    };

    return (
        <div style={{ marginLeft: 50, marginRight: 50 }}>
            <Row xl={2} lg={2} md={2} sm={1} xs={1} style={{}}>
                <Col
                    className="d-flex"
                    xl={4}
                    lg={4}
                    md={4}
                    style={{
                        flexDirection: "column",
                        backgroundColor: "white",
                    }}
                >
                    <Image
                        src={"https://via.placeholder.com/150"}
                        roundedCircle
                        style={{ width: "60%" }}
                    />
                    <h1 className="myname">China Cafe</h1>
                    <p>
                        <MdLocationOn
                            size={iconSize}
                            style={styles.iconStyle}
                        />
                        Franklinville, New Jersey
                    </p>
                    <p>
                        <MdEmail size={iconSize} style={styles.iconStyle} />
                        jiangsteven99@gmail
                    </p>
                </Col>
                <Col xl={8} lg={8} md={8} style={{ backgroundColor: "white" }}>
                    <p style={{ fontSize: 30 }}>UNDER DEVELOPMENT!!</p>
                </Col>
            </Row>
        </div>
    );
}

export default Home;

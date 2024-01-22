import React from "react";
import style from "./index.module.scss"
import { Col, Row } from "antd";

function Slide() {
  return (
    <>
      <section id={style.slide}>
        <div className={style.container}>
          <Row className={style.slideContent}>
            <Col className={style.slideText} xs={24} md={12} lg={12}>
              <h1>Select your new perfect style</h1>
              <p>lorem lorem lorem lorem lorem lorem lorem lorem</p>
              <button>Shop Now</button>

            </Col>

            <Col className={style.slideText} xs={24} md={12} lg={12}>
              <div className={style["img-wrapper"]}>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png.webp" />

                
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default Slide;


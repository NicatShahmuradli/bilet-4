import React from "react";
import style from "./index.module.scss"
import { Row, Col } from 'antd';

function NewArrival() {
  return (
    <>
      <section id={style.arrival}>
        <div className={style.container}>
          <Row className={style.arrivalContent}>
            <Col className={style.arrivalCol} xs={24} md={12} lg={8}>
              <div className={style.arrivalText}>
              <div className={style["img-wrapper"]}>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png" />
              </div>
              <h1>lorem lorem lorem</h1>
              <p>56$</p>
                
              </div>
            </Col>
            <Col className={style.arrivalCol} xs={24} md={12} lg={8}>
              <div className={style.arrivalText}>
              <div className={style["img-wrapper"]}>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png" />
              </div>
              <h1>lorem lorem lorem</h1>
              <p>56$</p>
                
              </div>
            </Col>
            <Col className={style.arrivalCol} xs={24} md={12} lg={8}>
              <div className={style.arrivalText}>
              <div className={style["img-wrapper"]}>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png" />
              </div>
              <h1>lorem lorem lorem</h1>
              <p>56$</p>
                
              </div>
            </Col>


          </Row>
        </div>
      </section>
    </>
  );
}

export default NewArrival;

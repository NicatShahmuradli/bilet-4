import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import { Row, Col } from "antd";
import { getAllProducts } from "../../services/api/product";
import { Link } from "react-router-dom";

function PopularItems() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadData() {
      const products = await getAllProducts();

      setProducts(products.data);
    }

    loadData();
  }, [setProducts]);
  return (
    <>
      <section id={style.items}>
        <div className={style.container}>
          <Row className={style["product-row"]}>
            <Col xs={24} md={24} xl={24}>
              <div className={style["product-head"]}>
                <h1>Popular Items</h1>
                <p>
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida.
                </p>
              </div>
            </Col>

            {products.map((product) => {
              return (
                <Col key={product._id} xs={24} md={12} xl={8}>
                  <div className={style.productCard}>
                    <div className={style.imgWrapper}>
                      <img src={product?.productImg} />
                    </div>
                    <h1>{product?.productName} </h1>
                    <p>$ {product?.price} </p>
                    <Link to={`/products/${product._id}`}> Go detail</Link>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </section>
    </>
  );
}

export default PopularItems;

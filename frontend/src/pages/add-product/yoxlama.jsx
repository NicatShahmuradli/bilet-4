// import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
// import { Button, Table } from "antd";
// import {
//   createNewProduct,
//   deleteProductById,
//   getAllProducts,
// } from "../../services/api/product.js";
// import TextField from "@mui/material/TextField";
// import { useFormik } from "formik";
// import { productSchema } from "../../validation/productSchema.js";

// const onChange = (pagination, filters, sorter, extra) => {
//   console.log("params", pagination, filters, sorter, extra);
// };

// function AddProduct() {
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchedResult, setSearchedResult] = useState([]);

//   useEffect(() => {
//     async function loadData() {
//       const products = await getAllProducts();

//       setProducts(products.data);
//     }
//     loadData();
//   }, [setProducts]);

//   const {
//     values,
//     errors,
//     touched,
//     handleChange,
//     handleBlur,
//     handleSubmit,
//     isSubmitting,
//     resetForm,
//   } = useFormik({
//     initialValues: {
//       productImg: "",
//       productName: "",
//       price: 0,
//     },

//     onSubmit: async (values) => {
//       try {
//         const res = await createNewProduct(values);

//         if (products) {
//           setProducts([...products, res.data.data]);

//           resetForm();
//         } else {
//           setProducts(res.data.data);
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     },

//     validationSchema: productSchema,
//   });


//   const handleSearch = (e) =>{
//     setSearchQuery(e.target.value)

//     const searchValue =  e.target.value.trim().toLowerCase();
//     const searchedResult = products.filter((item)=> item.productName.toLowerCase().trim().includes(searchValue));
//     setSearchedResult(searchedResult)
//   }

//   useEffect(()=>{
//     if (searchedResult.length === products.length) {
//       setSearchedResult([])
//     }
//   }, [searchQuery])

//   const columns = [
//     {
//       title: "Image",
//       dataIndex: "productImg",
//       render: (productImg) => (
//         <img
//           src={productImg}
//           alt="Product Image"
//           style={{ maxWidth: "150px", maxHeight: "100px" }}
//         />
//       ),
//     },
//     {
//       title: "Name",
//       dataIndex: "productName",
//     },
//     {
//       title: "price",
//       dataIndex: "price",
//     },
//     {
//       title: "Delete",
//       dataIndex: "delete",
//       render: (_, record) => (
//         <Button
//           type="primary"
//           danger
//           onClick={async () => {
//             try {
//               await deleteProductById(record._id);
//               const updateProducts = products.filter(
//                 (product) => product._id != record._id
//               );
//               setProducts([...updateProducts]);
//             } catch (err) {
//               console.error(err);
//             }
//           }}
//         >
//           Delete
//         </Button>
//       ),
//     },
//   ];
//   return (
//     <>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>Add Page</title>
//         <link
//           rel="icon"
//           type="x-icon"
//           href="data:image/png;base64,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"
//         />
//       </Helmet>

//       <form onSubmit={handleSubmit}>
//         <TextField
//           name="productImg"
//           type="text"
//           label="Image"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.productImg}
//         />
//         {errors.productName && touched.productName && (
//           <p>{errors.productName}</p>
//         )}
//         <TextField
//           name="productName"
//           type="text"
//           label="Name"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.productName}
//         />
//         {errors.productName && touched.productName && (
//           <p>{errors.productName}</p>
//         )}
//         <TextField
//           name="price"
//           type="number"
//           label="Price"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.price}
//         />
//         {errors.price && touched.price && (
//           <p>{errors.price}</p>
//         )}
//         <Button
//           disabled={Object.keys(errors).length > 0 || isSubmitting}
//           htmlType="submit"
//           type="primary"
//         >
//           Add
//         </Button>
//       </form>

//       <TextField
//         id="standard-search"
//         label="Search Product Name"
//         type="search"
//         variant="standard"
//         value={searchQuery}
//         onChange={handleSearch}
//         style={{ margin: "30px, 0" }}
//       />

//       <Table
//         rowKey={(x) => x._id}
//         columns={columns}
//         dataSource={searchedResult.length > 0 ? searchedResult : products}
//         onChange={onChange}
//       />
//     </>
//   );
// }

// export default AddProduct;

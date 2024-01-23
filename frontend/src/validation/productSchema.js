import * as Yup from "yup";

export const productSchema = Yup.object({
  productImg: Yup.string()
    .trim()
    .min(2, "Too Short!")
    .max(200, "Too Long!")
    .required("Required"),
  productName: Yup.string()
    .trim()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number().positive("Positive number").required("Required"),
});

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import { Card } from "primereact/card";
import styles from "./productDetail.module.css";
import { Button } from "primereact/button";

import { useDispatch, useSelector } from "react-redux";
import "./productspage.css";
import { GET_PRODUCT_DETAILS_ACTION } from "../redux/actions/adminAction";
import { ADDTOCART_ACTION } from "../redux/actions/cartAction";
import { CARTITEMS_ACTION } from "../redux/actions/cartAction";

const ProductDetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { productId } = params;
  const productDetails = useSelector((state) => state.admin.productDetails);
  const LOADER = useSelector((state) => state.product.productDetailsLoading);

  useEffect(() => {
    dispatch(GET_PRODUCT_DETAILS_ACTION(productId));
  }, []);

  const addBookToCart = (product) => {
    dispatch(ADDTOCART_ACTION(product))
      .then((response) => {
        dispatch(GET_PRODUCT_DETAILS_ACTION(productId));
        dispatch(CARTITEMS_ACTION());
      })
      .catch((err) => console.log(err));
  };

  const header = (
    <div className={styles.imageContainer}>
      <img alt={productDetails.name} src={productDetails.mainPicture} />
    </div>
  );
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      {!productDetails.addtocart && (
        <Button
          label="Add to Cart"
          icon="pi pi-check-circle"
          onClick={() => {
            addBookToCart(productDetails);
          }}
        />
      )}
    </div>
  );
  return (
    <>
      <MyNavbar />
      <div className={styles.outerContainer}>
        <div className="card flex justify-content-center">
          {!LOADER && (
            <Card
              title={productDetails.name}
              subTitle={`Category: ${productDetails.category}`}
              header={header}
              footer={footer}
              className="md:w-25rem"
            >
              <p className="m-0">
                <div className={styles.cardPrice}>
                  Price: ${productDetails.price}
                </div>
                <div className={styles.additionalInfo}>
                  {productDetails.description}
                </div>
              </p>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;


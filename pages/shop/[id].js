import { Fragment, useEffect, useState } from "react";
import Banner from "../../src/components/Banner/Banner";
import { Container } from "react-bootstrap";
import ShopList from "../../src/components/ShopList";
import { products } from "../../src/utils/products";
import { useRouter } from "next/router";
import ProductDetails from "../../src/components/ProductDetails/ProductDetails";
import ProductReviews from "../../src/components/ProductReviews/ProductReviews";
import useWindowScrollToTop from "../../src/hooks/useWindowScrollToTop";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (id) {
      const product = products.filter((item) => parseInt(item.id) === parseInt(id))[0];
      setSelectedProduct(product);
      if (product) {
        setRelatedProducts(
          products.filter(
            (item) =>
              item.category === product.category &&
              item.id !== product.id
          )
        );
      }
    }
  }, [id]);

  useWindowScrollToTop();

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <Banner title={selectedProduct?.productName} />
      <ProductDetails selectedProduct={selectedProduct} />
      <ProductReviews selectedProduct={selectedProduct} />
      <section className="related-products">
        <Container>
          <h3>You might also like</h3>
        </Container>
        <ShopList productItems={relatedProducts} />
      </section>
    </Fragment>
  );
}


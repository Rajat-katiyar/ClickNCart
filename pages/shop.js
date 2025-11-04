import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../src/components/FilterSelect";
import SearchBar from "../src/components/SeachBar/SearchBar";
import { Fragment, useState } from "react";
import { products } from "../src/utils/products";
import ShopList from "../src/components/ShopList";
import Banner from "../src/components/Banner/Banner";
import useWindowScrollToTop from "../src/hooks/useWindowScrollToTop";

export default function Shop() {
  const [filterList, setFilterList] = useState(
    products.filter((item) => item.category === "sofa")
  );
  useWindowScrollToTop();

  return (
    <Fragment>
      <Banner title="product" />
      <section className="filter-bar">
        <Container className="filter-bar-contianer">
          <Row className="justify-content-center">
            <Col md={4}>
              <FilterSelect setFilterList={setFilterList} />
            </Col>
            <Col md={8}>
              <SearchBar setFilterList={setFilterList} />
            </Col>
          </Row>
        </Container>
        <Container>
          <ShopList productItems={filterList} />
        </Container>
      </section>
    </Fragment>
  );
}


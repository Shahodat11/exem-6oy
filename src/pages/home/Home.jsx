import React from "react";
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Cards from '../../components/cards/Cards'
import Card from '../../components/card/Card'
import Products from "../../components/products/Products";
import FooterTop from "../../components/footerTop/FooterTop";
import { useFetch } from "../../hooks/useFetch";
import FooterBody from "../../components/footerBody/FooterBody";
import FooterBottom from "../../components/footerBottom/FooterBottom";

function Home() {


  let apiUrl = `/products?limit=10 `;
  const { data, loading } = useFetch(apiUrl);
  return (
    <section className="home">
      <Navbar/>
      <Header/>
      <Banner/>
      <Cards/>
      <Card/>
      <Products   data={data?.data} loading={loading}/>
      <FooterTop/>
      <FooterBody/>
      <FooterBottom/>
    </section>
  );
}

export default Home;
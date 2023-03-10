import Head from "next/head";
import Layout from "../components/custom/Layout";
import "semantic-ui-css/semantic.min.css";
import FormExampleFieldControl from "../components/custom/Form";
import About from "../components/custom/About";
import Home from "../components/custom/Home";
import ServiceContent from "../components/custom/ServiceContent";
import Gallery from "../components/custom/Gallery";
import Approach from "../components/custom/Approach";

export default function MainHome() {
  return (
    <div>
      <Head>
        <title>Tak Fabrications</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Home />
        <About />
        <Approach />
        {/* <ServiceContent /> */}
        <Gallery />
        <FormExampleFieldControl />
      </Layout>
    </div>
  )
}

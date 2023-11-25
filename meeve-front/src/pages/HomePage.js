
import CarteComponent from "../components/MapComponent/CarteComponent";
import Layout from "../components/Layout/Layout";

export default function HomePage(){

    return (
        <Layout style={{ zIndex: 1000 }}>
                <CarteComponent/>
        </Layout>
    );

}
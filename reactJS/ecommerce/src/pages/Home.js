import { Container } from "react-bootstrap";
import Products from "./Products";

const Home = (props) => {
    return (
        <>
        <Container className="m-5">
            <h1 className="text-center">Welcome to Home Page</h1>
            <p>Please Login to see prodcuts</p>
        </Container>
        </>
    );
};

export default Home;
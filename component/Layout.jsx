import Navigation from "./Nav/Navigation";
import Footer from "./Footer/Footer";

export default function Layout({ children }) {
    return (
    <div>
        <Navigation/>
        {children}
        <Footer/>
    </div>
    );
}
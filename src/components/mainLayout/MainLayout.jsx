import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function MainLayout({ childern }) {
    return (
        <>
            {/* <div className="flex flex-col min-h-screen"> */}
                <Header />
                <main>
                    {childern}
                </main>
                <Footer />
            {/* </div> */}
        </>
    )
}
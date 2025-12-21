import Header from "@/components/Main/Header";
import Footer from "@/components/Main/Footer";
import Baner from "@/components/home/Banner/Baner";




export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Baner />
        </main>
        <Footer />
      </div>
    );
}
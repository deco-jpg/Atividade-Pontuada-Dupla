import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function QuemSomos() {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container">

          <h1 className="title">Quem Somos</h1>

          <p>
            O Hospital VidaPlus atua há mais de 15 anos oferecendo
            atendimento médico de excelência para toda a população.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default QuemSomos;
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="container hero-content">

          <div className="hero-text">

            <h1>
              Sua saúde em primeiro lugar
            </h1>

            <p>
              Atendimento humanizado, tecnologia moderna
              e profissionais altamente qualificados.
            </p>

            <button>
              Agendar Consulta
            </button>

          </div>

          <div className="hero-image">
            🏥
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
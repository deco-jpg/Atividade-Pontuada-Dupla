import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Servicos() {
  const servicos = [
    "Clínica Geral",
    "Cardiologia",
    "Pediatria",
    "Dermatologia",
    "Ortopedia",
    "Exames Laboratoriais"
  ];

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container">

          <h1 className="title">Serviços</h1>

          <div className="cards">

            {servicos.map((item,index)=>(
              <div className="card" key={index}>
                <h3>{item}</h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Servicos;
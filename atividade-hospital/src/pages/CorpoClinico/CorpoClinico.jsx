import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function CorpoClinico() {

  const medicos = [
    ["Dra. Ana Silva","Cardiologista"],
    ["Dr. Rafael Costa","Pediatra"],
    ["Dra. Juliana Rocha","Dermatologista"],
    ["Dr. Felipe Santos","Ortopedista"]
  ];

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container">

          <h1 className="title">Corpo Clínico</h1>

          <div className="cards">

            {medicos.map((m,index)=>(
              <div className="card" key={index}>
                <h3>{m[0]}</h3>
                <p>{m[1]}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default CorpoClinico;
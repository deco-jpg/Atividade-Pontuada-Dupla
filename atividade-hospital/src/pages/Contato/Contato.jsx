import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Contato() {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container">

          <h1 className="title">Contato</h1>

          <p>Telefone: (71) 3333-4444</p>
          <p>Email: contato@vidaplus.com</p>

          <br />

          <form>

            <input
              type="text"
              placeholder="Nome"
            />

            <br /><br />

            <input
              type="email"
              placeholder="Email"
            />

            <br /><br />

            <textarea
              placeholder="Mensagem"
            />

            <br /><br />

            <button>Enviar</button>

          </form>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contato;
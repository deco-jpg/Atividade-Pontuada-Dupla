import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Blog() {

  const posts = [
    "Importância dos exames preventivos",
    "Como manter hábitos saudáveis",
    "Dicas para fortalecer a imunidade"
  ];

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container">

          <h1 className="title">Blog e Novidades</h1>

          <div className="cards">

            {posts.map((post,index)=>(
              <div className="card" key={index}>
                <h3>{post}</h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Blog;
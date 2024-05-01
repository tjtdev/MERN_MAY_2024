import './App.css';
import Article from "./components/Article";

function App() {


  const articles = [
    { title: "cool", size: 22 },
    { title: "Cooler", size: 18 },
    { title: "Super", size: 28 },
    { title: "Sensei", size: 16 },
  ];

  return (
    <fieldset>
      <legend>App.jsx</legend>
      {
        articles.map((elem, idx) => {
          return <Article
            title={elem.title}
            size={elem.size}
            key={idx}
          />;
        })
      }
      {/* <Article title={"Cool"} size={22} />
      <Article title={"Cooler"} size={18} />
      <Article title={"Super"} size={28} />
      <Article title={"Super"} size={16} /> */}
    </fieldset>
  );
}

export default App;

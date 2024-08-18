import Header from "./components/Header/Header";
import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

function App() {
  function handleSelect(selectedButton) {
    console.log(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              btnlabel="Components"
              onSelect={() => handleSelect("components")}
            />
            <TabButton btnlabel="JSX" onSelect={() => handleSelect("jsx")} />
            <TabButton
              btnlabel="Props"
              onSelect={() => handleSelect("props")}
            />
            <TabButton
              btnlabel="State"
              onSelect={() => handleSelect("state")}
            />
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;

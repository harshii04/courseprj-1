import { useState } from "react";
import Header from "./components/Header/Header";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConcept from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

function App() {
  const [selectedTopics, setSelectedTopics] = useState("");

  function handleSelect(selectedButton) {
    setSelectedTopics(selectedButton);
    console.log(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItems) => (
              <CoreConcept key={conceptItems.title} {...conceptItems} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopics === "components"}
              btnlabel="Components"
              onSelect={() => handleSelect("components")}
            />
            <TabButton
              isSelected={selectedTopics === "jsx"}
              btnlabel="JSX"
              onSelect={() => handleSelect("jsx")}
            />
            <TabButton
              isSelected={selectedTopics === "props"}
              btnlabel="Props"
              onSelect={() => handleSelect("props")}
            />
            <TabButton
              isSelected={selectedTopics === "state"}
              btnlabel="State"
              onSelect={() => handleSelect("state")}
            />
          </menu>
          {!selectedTopics ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopics].title}</h3>
              <p>{EXAMPLES[selectedTopics].description}</p>
              <prev>
                <code>{EXAMPLES[selectedTopics].code}</code>
              </prev>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;

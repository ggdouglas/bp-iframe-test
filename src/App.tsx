import { FocusStyleManager } from "@blueprintjs/core";
import { TOP_100_FILMS } from "./films";
import { FilterPicker } from "./FilterPicker";

FocusStyleManager.onlyShowFocusOnTabs();

const App = () => {
  const films = TOP_100_FILMS.map((film) => film.title);

  return (
    <div className="app">
      <FilterPicker
        items={films}
        label="Select a film..."
        onToggle={() => {}}
        selected={[]}
        menuProps={{}}
      />
    </div>
  );
};

export default App;

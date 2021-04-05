import { useState } from "react";
import PropTypes from "prop-types";

import "./App.css";

const ACTIVE_CLASS_NAME = "toggle-container__item--active";

const ToggleButton = (props) => {
  const { selected, setSelected } = props;

  const toggleSelected = (evt) => {
    const classNames = evt.target.className.split(" ");
    if (!classNames.includes(ACTIVE_CLASS_NAME)) setSelected(!selected);
  };

  return (
    <div className="toggle-container" onClick={toggleSelected}>
      <div
        className={`toggle-container__item toggle-container__item--first ${
          selected ? "toggle-container__item--active" : ""
        } `}
      >
        YES
      </div>
      <div
        className={`toggle-container__item toggle-container__item--second ${
          selected ? "" : "toggle-container__item--active"
        }`}
      >
        NO
      </div>
    </div>
  );
};

function App() {
  const [selected, setSelected] = useState(false);

  return (
    <div className="App">
      <ToggleButton
        selected={selected}
        setSelected={() => setSelected(!selected)}
      />
    </div>
  );
}

ToggleButton.propTypes = {
  selected: PropTypes.bool,
  setSelected: PropTypes.func,
};

export default App;

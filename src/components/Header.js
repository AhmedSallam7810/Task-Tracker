import Button from "./Button";

const Header = ({ showAddSec, showAdd }) => {
  return (
    <header className="header">
      <h1>task tracker</h1>
      <Button
        click={showAddSec}
        showAdd={showAdd}
        text={showAdd ? "Close" : "Add"}
        color={showAdd ? "red" : "green"}
      />
    </header>
  );
};

export default Header;

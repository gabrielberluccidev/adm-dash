import { ButtonRoot, Button } from "../components/ui/button";

const ButtonFixture = () => {
  return (
    <ButtonRoot>
      <Button onClick={() => alert("po")}>oi</Button>
    </ButtonRoot>
  );
};

export default ButtonFixture;

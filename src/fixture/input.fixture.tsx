import { InputRoot, Input, InputIcon } from "../components/ui/input";
import { Search } from "lucide-react";

const InputFixture = () => {
  return (
    <InputRoot>
      <InputIcon icon={Search} />
      <Input placeholder="Search orders, products..." />
    </InputRoot>
  );
};

export default InputFixture;

import {
  AvatarRoot,
  AvatarUserWrapper,
  AvatarName,
  AvatarRole,
  AvatarImage,
} from "../components/ui/avatar";

const AvatarFixture = () => {
  return (
    <AvatarRoot>
      <AvatarUserWrapper>
        <AvatarName>Gabriel</AvatarName>
        <AvatarRole>Developer</AvatarRole>
      </AvatarUserWrapper>

      <AvatarImage
        src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
        alt="no image founded here"
      />
    </AvatarRoot>
  );
};

export default AvatarFixture;

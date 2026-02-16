import { HeaderContent, HeaderRoot } from '@components/layout/header';
import {
  AvatarImage,
  AvatarName,
  AvatarRole,
  AvatarRoot,
  AvatarUserWrapper,
} from '@components/ui/avatar';
import { InputRoot, Input, InputIcon } from '@components/ui/input';
import { Search, Bell } from 'lucide-react';

const HeaderFixture = () => {
  return (
    <HeaderRoot>
      <HeaderContent>
        <InputRoot>
          <InputIcon icon={Search} />
          <Input placeholder="Search orders, products..." />
        </InputRoot>

        <Bell></Bell>

        <AvatarRoot>
          <AvatarUserWrapper>
            <AvatarName>Gabriel Berlucci</AvatarName>
            <AvatarRole>Developer</AvatarRole>
          </AvatarUserWrapper>
          <AvatarImage
            src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
            alt="no image founded here"
          />
        </AvatarRoot>
      </HeaderContent>
    </HeaderRoot>
  );
};

export default HeaderFixture;

import {
  SideBarContent,
  SideBarHeaderRoot,
  SideBarLabel,
  SideBarRoot,
  SideBarSubTitle,
  SideBarTitle,
} from '@components/layout/sidebar';
import { Button, ButtonRoot } from '@components/ui/button';
import {
  LayoutDashboard,
  ShoppingCart,
  PackageSearch,
  UserSearch,
  ChartBarIncreasing,
  CircleDollarSign,
  Settings,
} from 'lucide-react';

const SideBarFixture = () => {
  return (
    <SideBarRoot>
      <SideBarHeaderRoot>
        <SideBarTitle>ShopAdmin</SideBarTitle>
        <SideBarSubTitle>Enterprise Suite</SideBarSubTitle>
      </SideBarHeaderRoot>
      <SideBarLabel>MAIN MENU</SideBarLabel>
      <SideBarContent>
        <ButtonRoot>
          <LayoutDashboard />
          <Button>Dashboard</Button>
        </ButtonRoot>
      </SideBarContent>
      <SideBarContent>
        <ButtonRoot>
          <PackageSearch />
          <Button>Products</Button>
        </ButtonRoot>
      </SideBarContent>
      <SideBarContent>
        <ButtonRoot>
          <ShoppingCart />
          <Button>Orders</Button>
        </ButtonRoot>
      </SideBarContent>
      <SideBarContent>
        <ButtonRoot>
          <UserSearch />
          <Button>Customers</Button>
        </ButtonRoot>
      </SideBarContent>
      <SideBarLabel>INSIGHTS</SideBarLabel>
      <SideBarContent>
        <ButtonRoot>
          <ChartBarIncreasing />
          <Button>Analytics</Button>
        </ButtonRoot>
      </SideBarContent>
      <SideBarContent>
        <ButtonRoot>
          <CircleDollarSign />
          <Button>Marketing</Button>
        </ButtonRoot>
      </SideBarContent>

      <SideBarLabel>MANAGEMENT</SideBarLabel>
      <SideBarContent>
        <ButtonRoot>
          <Settings />
          <Button>Analytics</Button>
        </ButtonRoot>
      </SideBarContent>
    </SideBarRoot>
  );
};

export default SideBarFixture;

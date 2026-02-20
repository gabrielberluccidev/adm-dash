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
  TableBody,
  TableContent,
  TableData,
  TableHead,
  TableHeader,
  TableHeaderWrapper,
  TableRoot,
  TableRow,
  TableSubTitle,
  TableTitle,
  TableTitleWrapper,
} from '@components/ui/table';
import {
  Bell,
  ChartBarIncreasing,
  CircleDollarSign,
  Funnel,
  LayoutDashboard,
  PackageSearch,
  Plus,
  Search,
  Settings,
  ShoppingCart,
  TrendingUp,
  UserSearch,
  Wallet,
} from 'lucide-react';

import { HeaderContent, HeaderRoot } from '@components/layout/header';
import {
  AvatarImage,
  AvatarName,
  AvatarRole,
  AvatarRoot,
  AvatarUserWrapper,
} from '@components/ui/avatar';
import { InputRoot, Input, InputIcon } from '@components/ui/input';
import {
  CardComparison,
  CardDescription,
  CardIcon,
  CardRoot,
  CardValue,
  CardWrapper,
} from '@components/ui/card';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Homepage = () => {
  interface Data {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
  }

  const [data, setData] = useState<Data[] | null>(null);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Erro ao buscar os dados:', error));
  }, []);

  // const mockApiData = [
  //   {
  //     id: 0,
  //     title: 'NIKE AIR JORDAN 2012',
  //     price: 3000,
  //     category: 'TENIS',
  //     image: 'http://example.com',
  //   },
  //   {
  //     id: 1,
  //     title: 'string',
  //     price: 0.1,
  //     description: 'string',
  //     category: 'string',
  //     image: 'http://example.com',
  //   },
  //   {
  //     id: 2,
  //     title: 'string',
  //     price: 0.1,
  //     description: 'string',
  //     category: 'string',
  //     image: 'http://example.com',
  //   },
  //   {
  //     id: 3,
  //     title: 'string',
  //     price: 0.1,
  //     description: 'string',
  //     category: 'string',
  //     image: 'http://example.com',
  //   },
  // ];
  return (
    <div className="grid grid-cols-6 min-h-screen">
      <div className="col-span-1">
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
      </div>

      <main className="col-span-5 flex flex-col">
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

        <div className="bg-[#0F111A] p-12 h-full">
          <div className="flex items-center justify-around">
            <CardRoot>
              <CardWrapper>
                <CardIcon variant="emerald" icon={Wallet} />
                <CardComparison variant="profit" icon={TrendingUp}>
                  2.5%
                </CardComparison>
              </CardWrapper>

              <CardDescription>Total Revenue</CardDescription>
              <CardValue>$128,430.20</CardValue>
            </CardRoot>

            <CardRoot>
              <CardWrapper>
                <CardIcon variant="emerald" icon={Wallet} />
                <CardComparison variant="profit" icon={TrendingUp}>
                  2.5%
                </CardComparison>
              </CardWrapper>

              <CardDescription>Total Revenue</CardDescription>
              <CardValue>$128,430.20</CardValue>
            </CardRoot>

            <CardRoot>
              <CardWrapper>
                <CardIcon variant="emerald" icon={Wallet} />
                <CardComparison variant="profit" icon={TrendingUp}>
                  2.5%
                </CardComparison>
              </CardWrapper>

              <CardDescription>Total Revenue</CardDescription>
              <CardValue>$128,430.20</CardValue>
            </CardRoot>

            <CardRoot>
              <CardWrapper>
                <CardIcon variant="emerald" icon={Wallet} />
                <CardComparison variant="profit" icon={TrendingUp}>
                  2.5%
                </CardComparison>
              </CardWrapper>

              <CardDescription>Total Revenue</CardDescription>
              <CardValue>$128,430.20</CardValue>
            </CardRoot>
          </div>
          <div className="p-7">
            <TableRoot>
              <TableHeaderWrapper>
                <TableTitleWrapper>
                  <TableTitle>Product Management</TableTitle>
                  <TableSubTitle>View and manage your inventory</TableSubTitle>
                </TableTitleWrapper>

                <div className="flex p-4 gap-2">
                  <ButtonRoot variant="filter">
                    <Funnel />
                    <Button>Filter Items</Button>
                  </ButtonRoot>

                  <ButtonRoot variant="add">
                    <Plus />
                    <Button>Add Product</Button>
                  </ButtonRoot>
                </div>
              </TableHeaderWrapper>

              <TableContent>
                <TableHeader>
                  <TableRow>
                    <TableHead scope="col">PRODUCT</TableHead>
                    <TableHead scope="col">PRICE</TableHead>
                    <TableHead scope="col">CATEGORY</TableHead>
                    <TableHead scope="col">STOCK STATUS</TableHead>
                    {/* <TableHead scope="col">ACTIONS</TableHead> */}
                  </TableRow>
                </TableHeader>

                {data?.map((product) => {
                  return (
                    <TableBody key={product.id}>
                      <TableRow>
                        <TableData variant="productName">
                          {product.title}
                        </TableData>
                        <TableData variant="productName">
                          {product.price}
                        </TableData>
                        <TableData variant="category">
                          {product.category}
                        </TableData>
                        <TableData variant="inStock">In Stock</TableData>
                      </TableRow>
                    </TableBody>
                  );
                })}
              </TableContent>
            </TableRoot>
          </div>
        </div>
      </main>
    </div>
  );
};

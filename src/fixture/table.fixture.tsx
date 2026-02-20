import { Button, ButtonRoot } from '@components/ui/button';
import {
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableHeaderWrapper,
  TableRoot,
  TableRow,
  TableSubTitle,
  TableTitle,
  TableTitleWrapper,
  TableContent,
} from '@components/ui/table';
import { Funnel, Plus } from 'lucide-react';
import axios from 'axios';
import { useState } from 'react';

const TableFixture = () => {
  interface Data {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
  }

  const [data, setData] = useState<Data[] | null>(null);

  const mockApiData = [
    {
      id: 0,
      title: 'NIKE AIR JORDAN 2012',
      price: 3000,
      category: 'TENIS',
      image: 'http://example.com',
    },
    {
      id: 1,
      title: 'string',
      price: 0.1,
      description: 'string',
      category: 'string',
      image: 'http://example.com',
    },
  ];

  const api = () => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => setData(response.data));
  };

  console.log(data);

  return (
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
            <TableHead scope="col">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>

        {mockApiData.map((product) => {
          return (
            <TableBody key={product.id}>
              <TableRow>
                <TableData variant="productName">{product.title}</TableData>
                <TableData variant="productName">{product.price}</TableData>
                <TableData variant="category">{product.category}</TableData>
                <TableData variant="inStock">In Stock</TableData>
              </TableRow>
            </TableBody>
          );
        })}
      </TableContent>
      <ButtonRoot>
        <Button onClick={() => api()}>MOCK</Button>
      </ButtonRoot>
    </TableRoot>
  );
};

export default TableFixture;

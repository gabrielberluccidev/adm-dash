import {
  CardRoot,
  CardValue,
  CardDescription,
  CardIcon,
  CardComparison,
  CardWrapper,
} from '@components/ui/card';
import { TrendingUp, Wallet } from 'lucide-react';

const CardFixture = () => {
  return (
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
  );
};

export default CardFixture;

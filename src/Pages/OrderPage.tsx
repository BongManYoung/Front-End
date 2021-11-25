import PageLayout from "Components/Common/PageLayout";
import OrderHeader from "Components/Order/OrderHeader";
import Order from "Components/Order/Order";

const OrderPage: React.FC = () => {
  return (
    <>
      <PageLayout>
        <OrderHeader />
        <Order />
      </PageLayout>
    </>
  );
};

export default OrderPage;

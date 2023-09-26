import React from 'react';
import Payment from '../../../src/bricks/payment';

import initMercadoPago from '../../../src/mercadoPago/initMercadoPago';

initMercadoPago('TEST-d198443d-7e9f-4e5f-a770-e5b23ae627cb', { locale: 'es-MX' });

const App = () => {
  const initialization = {
    amount: 1000,
    preferenceId: '',
    items: {
      totalItemsAmount: 1000,
      itemsList: [
        {
          units: 1,
          value: 1000,
          name: 'Product A',
        },
      ],
    },
  };

  const customization = {
    enableReviewStep: true,
    paymentMethods: {
      atm: 'all',
      ticket: 'all',
      bankTransfer: ['pix'],
      debitCard: 'all',
      mercadoPago: 'all',
    },
  };

  const onSubmit = async () => console.log('Calling onSubmit');

  return (
    <Payment
      initialization={initialization}
      customization={customization}
      onSubmit={onSubmit}
    />
  );
};

export default App;

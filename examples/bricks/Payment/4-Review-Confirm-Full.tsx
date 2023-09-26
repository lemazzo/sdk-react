import React from 'react';
import Payment from '../../../src/bricks/payment';

import initMercadoPago from '../../../src/mercadoPago/initMercadoPago';

initMercadoPago('TEST-d198443d-7e9f-4e5f-a770-e5b23ae627cb', { locale: 'es-MX' });

const App = () => {
  const initialization = {
    amount: 76.98, // result of = totalItemsAmount - costs (shipping) + totalDiscountsAmount
    preferenceId: '1283129650-38f60f5f-08b3-48d3-928b-43689cd41240',
    items: {
      totalItemsAmount: 81.98, //sum of all items in the list = (5 x 10.00) + (1 x 15.99) + (1 x 15.99)
      itemsList: [
        {
          units: 5,
          value: 10,
          name: 'Product A',
          description: 'A description',
          imageURL: 'https://http2.mlstatic.com/frontend-assets/mp-acq-home-landing/logo-mercadopago.jpg',
        },
        {
          units: 1,
          value: 15.99,
          name: 'Product B',
          description: 'B description',
          imageURL: '<IMAGE_URL>',
        },
        {
          units: 1,
          value: 15.99,
          name: 'Product C',
        },
      ],
    },
    billing: {
      firstName: '<FIRST_NAME>',
      lastName: '<LAST_NAME>',
      taxRegime: '<TAX_REGIME>',
      taxIdentificationNumber: '<TAX_IDENTIFICATION_NUMBER>',
      identification: {
        type: '<TYPE>',
        number: '<NUMBER>',
      },
      billingAddress: {
        streetName: '<STREET_NAME>',
        streetNumber: '<STREET_NUMBER>',
        neighborhood: '<NEIGHBORHOOD>',
        city: '<CITY>',
        federalUnit: '<FEDERAL_UNIT>',
        zipCode: '<ZIP_CODE>',
      },
    },
    shipping: {
      costs: 10,
      shippingMode: 'Express',
      description: '1 day',
      receiverAddress: {
        streetName: '<STREET_NAME>',
        streetNumber: '<STREET_NUMBER>',
        neighborhood: '<NEIGHBORHOOD>',
        city: '<CITY>',
        federalUnit: '<FEDERAL_UNIT>',
        zipCode: '<ZIP_CODE>',
      },
    },
    discounts: {
      totalDiscountsAmount: 15, //sum of all discounts in the list = 10 + 5
      discountsList: [
        {
          name: 'BLACKFRIDAY15',
          value: 10,
        },
        {
          name: 'WELCOME5',
          value: 5,
        },
      ],
    },
    payer: {
      email: '<EMAIL>',
    },
  };

  const customization = {
    enableReviewStep: true,
    reviewCardsOrder: ['payment_method', 'shipping', 'billing'],
    paymentMethods: {
      atm: 'all',
      bankTransfer: ['pix'],
      creditCard: 'all',
      debitCard: 'all',
      mercadoPago: 'all',
    },
  };

  const onSubmit = async () => console.log('Calling onSubmit');

  const onClickEditShippingData = () => console.log('Calling onClickEditShippingData...');

  const onClickEditBillingData = () => console.log('Calling onClicktEditBillingData...');

  const onRenderNextStep = (currentStep: string) => console.log('Calling onRenderNextStep...', currentStep);

  const onRenderPreviousStep = (currentStep: string) => console.log('Calling onRenderNextStep...', currentStep);

  return (
    <Payment
      initialization={initialization}
      customization={customization}
      onSubmit={onSubmit}
      onClickEditShippingData={onClickEditShippingData}
      onClickEditBillingData={onClickEditBillingData}
      onRenderNextStep={onRenderNextStep}
      onRenderPreviousStep={onRenderPreviousStep}
    />
  );
};

export default App;

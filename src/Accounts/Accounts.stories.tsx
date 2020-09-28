import * as React from 'react';
import { LoginGate } from '../Auth/LoginGate';
import Accounts from './Accounts';

export default {
  title: 'Accounts',
  component: [Accounts],
};

const host = process.env.ENDPOINT_URL;

export const AccountsStory = () => {
  const metadata = [
    {
      key: 'myChoice',
      label: 'My Choice',
      type: 'SingleChoice',
      options: ['A', 'B', 'C'],
      default: 'B',
    },
    {
      key: 'myBoolean',
      label: 'My Boolean',
      type: 'Boolean',
      default: true,
    },
    {
      key: 'myText',
      label: 'My Text',
      type: 'Text',
      default: 'description',
    },
    {
      key: 'myOptions',
      label: 'My Options',
      type: 'MultiChoice',
      options: ['A', 'B', 'C'],
      default: ['A', 'C'],
    },
    {
      key: 'MultiText',
      label: 'Multi Text',
      type: 'MultiText',
      default: 'Multi Text',
    },
  ] as Metadata[];

  return (
    <LoginGate host={host} showRememberMe={true} textFieldVariant={'outlined'}>
      {({ token }) => <Accounts host={host} metadata={metadata} token={token.accessToken.token} />}
    </LoginGate>
  );
};

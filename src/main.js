import App from 'fusion-react';
import Styletron from 'fusion-plugin-styletron-react';

import root from './components/Root.tsx';

export default () => {
  const app = new App(root);
  app.register(Styletron);
  return app;
};

import * as React from 'react';
import * as CSS from 'csstype';

import { styled } from 'fusion-plugin-styletron-react';

const { useCallback } = React;

interface Props {
  as?: string;
  style?: CSS.Properties;
}

const InlineStyletronComponent: React.FunctionComponent<Props> = ({
  as = 'div',
  style = {},
  ...props
}: Props): JSX.Element => {
  const C = useCallback(styled(as, style || {}), [as, style]);
  return <C {...props} />;
};

export default InlineStyletronComponent;

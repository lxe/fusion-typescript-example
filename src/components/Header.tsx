import * as React from 'react';

import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';

import { StyledLink as Link } from 'baseui/link';
import { Button } from 'baseui/button';
import InlineStyletronComponent from 'src/utils/InlineStyletronComponent';

function Header(): JSX.Element {
  return (
    <HeaderNavigation>
      <NavigationList align={ALIGN.left}>
        <NavigationItem>Title</NavigationItem>
      </NavigationList>
      <NavigationList align={ALIGN.center} />
      <NavigationList align={ALIGN.right}>
        <NavigationItem>
          <Link href="#">Tab Link One</Link>
        </NavigationItem>
        <NavigationItem>
          <Link href="#">Tab Link Two</Link>
        </NavigationItem>
        <NavigationItem>
          <Link href="#">Tab Link Three</Link>
        </NavigationItem>
      </NavigationList>
      <InlineStyletronComponent style={{ marginRight: '10px' }}>
        <NavigationList align={ALIGN.right}>
          <NavigationItem>
            <Button>Get started</Button>
          </NavigationItem>
        </NavigationList>
      </InlineStyletronComponent>
    </HeaderNavigation>
  );
}

export default Header;

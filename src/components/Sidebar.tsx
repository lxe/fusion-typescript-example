import * as React from 'react';

import { Navigation } from 'baseui/side-navigation';

const { useState } = React;

const nav = [
  {
    title: 'Colors',
    itemId: '#level1.1',
    subnav: [
      {
        title: 'Primary',
        itemId: '#level1.1.1',
      },
      {
        title: 'Shades',
        itemId: '#level1.1.2',
        subnav: [
          {
            title: 'Dark',
            itemId: '#level1.1.2.1',
          },
          {
            title: 'Light',
            itemId: '#level1.1.2.2',
          },
        ],
      },
    ],
  },
  {
    title: 'Sizing',
    itemId: '#level1.2',
  },
  {
    title: 'Typography',
    itemId: '#level1.3',
  },
];

function Sidebar(): JSX.Element {
  const [location, setLocation] = useState('#level1.1.1');
  return (
    <Navigation
      items={nav}
      activeItemId={location}
      onChange={({ item }) => setLocation(item.itemId)}
    />
  );
}

export default Sidebar;

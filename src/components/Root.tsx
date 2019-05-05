import * as React from 'react';

import { Button } from 'baseui/button';

import S from 'src/utils/InlineStyletronComponent';
import CSSReset from 'src/utils/CSSReset';

import Sidebar from 'src/components/Sidebar';
import Header from './Header';

const root = (
  <S>
    <CSSReset />
    <S
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />

      <S
        style={{
          flex: 1,
          width: '100vw',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <S style={{ width: '400px' }}>
          <Sidebar />
        </S>

        <S style={{ flex: 1 }}>
          <S style={{ margin: '10px' }}>
            <Button>Hello</Button>
          </S>
        </S>
      </S>
    </S>
  </S>
);

export default root;

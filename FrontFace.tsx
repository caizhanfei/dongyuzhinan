import { Column, HorizontalText, Page } from './StyledComponents';
import * as React from 'react';

export const FrontFace = () => {
  return (
    <Page>
      <Column>
        <div>
          <span>あ</span>
        </div>
        <div>
          <span>い</span>
        </div>
        <div>
          <span>う</span>
        </div>
        <div>
          <span>え</span>
        </div>
        <div>
          <HorizontalText>zu</HorizontalText>
        </div>
        <div>
          <span>お</span>
        </div>
      </Column>
    </Page>
  );
};

import * as React from 'react';
import { FrontFace } from './FrontFace';
import { Column } from './StyledComponents';

export default function App() {
  return (
    <React.Fragment>
      <FrontFace />
      <div>
        <Column>
          <span>あ</span>いうえ<span>zu</span>お
        </Column>
      </div>
    </React.Fragment>
  );
}

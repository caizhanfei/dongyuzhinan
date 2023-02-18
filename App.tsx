import * as React from 'react';
import './style.css';
import { Button } from 'antd';
import Column from './Column';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Button type="primary">Button</Button>
      <Column>あぁいぃうぅえぇおぉ</Column>
    </div>
  );
}

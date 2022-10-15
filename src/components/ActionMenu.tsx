import * as React from 'react';
import Button from './Button';

interface ActionMenuProps {
  actions: {
    title: string,
    handler: () => void;
  }[],
}

const ActionMenu: React.FunctionComponent<ActionMenuProps> = (props) => {
  const { actions } = props;
  return (
    <ul>
      {actions.map(action => {
        return <li><Button title={action.title} onClickHandler={action.handler} /></li>
      })}
    </ul>
  );
};

export default ActionMenu;

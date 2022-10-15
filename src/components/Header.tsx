import * as React from 'react';

interface HeaderProps {
  appTitle: string;
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const { appTitle } = props;

  return <div className="header">
    <div className="app-title">{appTitle}</div>
    <div className="actions"></div>
  </div>;
};

export default Header;

import { ReactNode, Children, FC } from 'react';

interface ShowProps {
  children: ReactNode;
}

export const Show: FC<ShowProps> & {
  When: FC<{ isTrue: boolean; children: ReactNode }>;
  Else: FC<{ render: ReactNode; children: ReactNode }>;
} = (props) => {
  let when: ReactNode | null = null;
  let otherwise: ReactNode | null = null;

  Children.forEach(props.children, (child) => {
    const children = child as React.ReactElement;

    if (children.props.isTrue === undefined) {
      otherwise = children;
    } else if (!when && children.props.isTrue === true) {
      when = children;
    }
  });

  return when || otherwise;
};

Show.When = ({ isTrue, children }) => isTrue && children;

Show.Else = ({ render, children }) => render || children;

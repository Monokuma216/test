import React from 'react';

interface iTableRow {
  children: React.ReactNode;
}

export default function (props: iTableRow) {
  return (
    <td>{props.children}</td>
  );
}

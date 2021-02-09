import React from 'react';

import './namesTable.sass';

export interface NameList{
  id: number | string,
  name: string
}

export default function NamesTable(props: { list: NameList[] }) {
  return (
    <table id='NamesTable'>
      <colgroup>
        <col span={1} id='TableCol1'/>
        <col span={1} id='TableCol2'/>
      </colgroup>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map(item => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}

import React from 'react';

import './namesTable.sass';

export interface NameList{
  id: number | string,
  name: string
}

export default function NamesTable(props: { list: NameList[], size: number, total: number}) {
  const list = props.list.slice(0, props.size);
  const pages = props.total / props.size + ((props.total % props.size) > 0 ? 1 : 0);

  return (
    <>
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
          {list.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div id='StepMenu'>
        <button className='stepButton' type='button'>
          {'<'}
        </button>
        <button className='stepPageNumber' type='button'>
          1
        </button>
        <button className='stepPageNumber' type='button'>
          {pages / 2 - ((pages & 1) === 0 ? 0 : 0.5 )}
        </button>
        <button className='stepPageNumber' type='button'>
          {pages}
        </button>
        <button className='stepButton' type='button'>
          {'>'}
        </button>
      </div>
    </>
  )
}

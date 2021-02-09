import React from 'react';

import './index.sass';

export interface NameList{
  id: number | string,
  name: string
}

export default function NamesTable(props: { list: NameList[], size: number, total: number}) {
  return (
    <>
      <table>
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
          {
          <tr>
            <td></td>
            <td></td>
          </tr>
          }
        </tbody>
      </table>
      <div>
        <button>

        </button>
        <div>
          <button>

          </button>
          <button>

          </button>
          <button>

          </button>
          <button>

          </button>
          <button>
            
          </button>
        </div>
        <button>

        </button>
      </div>
    </>
  )
}

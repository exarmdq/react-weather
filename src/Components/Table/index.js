import React from 'react'

export default function Table ({ claseTable, values }) {
  return <>
  { values
    ? <table className={`table ${claseTable}`}>
  <tbody>
    {values.map(({ item, value }) =>
      <tr key={item}><td>{item}</td><td>{value}</td></tr>
    )
    }
    </tbody>
  </table>
    : ''
  }
  </>
}

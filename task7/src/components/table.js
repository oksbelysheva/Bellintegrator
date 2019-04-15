import React from 'react';

const Table = ({headerName, renderTableBody}) =>{
  const header = headerName.map((item) => {
    return (<th scope="col">{item}</th>)
  });

  return(
    <table className="table">
      <thead>
      <tr>
        {header}
      </tr>
      </thead>
      <tbody>
      {renderTableBody()}
      </tbody>
    </table>
  );
};

export default Table;
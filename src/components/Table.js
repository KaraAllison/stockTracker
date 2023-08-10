import '../App.css';

const Table = ({ stock }) => {
    return (
        <div>
        <h2 className='header'>Your Stock Tracker</h2>
        <table>
            
         <thead>
            
          <tr>
            <th>Name of Company</th>
            <th>Stock Ticker</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
            {stock.map((data, id) => {
              return (
                <tr key={id}>
                  <td>{data.name}</td>
                  <td>{data.ticker}</td>
                  <td>{data.price}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
    );
  };
  
  export default Table;
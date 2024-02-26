
const ServerError = () => {
  return (
    <div className='ServerError'>
      <h1>Internal Server Error</h1>
      <p>There was an error while trying to get the server status, try refreshing or forcing a restart of the server</p>
    </div>
  );
}

export default ServerError;
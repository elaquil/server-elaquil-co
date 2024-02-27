import Section from './Section';

interface ServerErrorProps{
  refreshServerInfo: Function;
}

const ServerError = (
  {refreshServerInfo} : ServerErrorProps
) => {
  setTimeout(() => {
    refreshServerInfo();
  }, 5000);
  return (
    <>
      <div className='ServerError'>
        <Section id="" title="Internal Server Error" />
      </div>
      <p>There was an error while trying to determine the server status</p>
      <p><i>If you just started the server, it's probably just waiting for the services to go live, refresh in a few seconds</i></p>
      <p>If not, try refreshing anyway, if this error persits force a restart of the server</p>
    </>

  );
}

export default ServerError;
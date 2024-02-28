import Section from './Section';

interface ServerPendingProps{
  refreshServerInfo: Function;
  infoState: string;
}

const ServerPending = ({refreshServerInfo, infoState}: ServerPendingProps) => {
  setTimeout(() => {
    if(infoState == "Pending")
      refreshServerInfo();
  }, 5000);

  return (
    <>
      <div>
        <Section id={''} title={'Server is Launching'} />      
      </div>
      <p>The server is starting up, please wait a moment and then refresh. If you encounter an error on refresh, give it another refresh in a few seconds</p>
    </>
  );
}

export default ServerPending;
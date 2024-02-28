import Section from './Section';

interface ServerPendingProps{
  refreshServerInfo: Function;
  infoState: string;
}

const ServerStopping = ({refreshServerInfo, infoState} : ServerPendingProps) => {
  setTimeout(() => {
    if(infoState == "Stopping")
      refreshServerInfo();
  }, 5000);
  
  return (
    <>
      <div>
        <Section id={''} title={'Server is Shutting Down'} />      
      </div>
      <p>The server has been idle for too long, it's currently shutting down, if you would like to start it again, refresh and wait for it to go offline completely,</p>
    </>
  );
}

export default ServerStopping;
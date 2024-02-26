import { useEffect, useState } from 'react';
import Loading from './Loading';
import ServerOffline from './ServerOffline';
import ServerOnline from './ServerOnline';
import ServerPending from './ServerPending';
import ServerStopping from './ServerStopping';
import ServerError from './ServerError';

interface ServerInfo {
  statusCode?: number;
  body?: string;
  state?:{
    Code?: number;
    Name?: string;
  }
  serverInfo?: {
    "Online players"?: [];
    "Player count"?: number;
  }
  error?: {
    errno?: number;
    code?: string;
    syscall?: string;
    address?: string;
    port?: number;
  }
}

const ServerInfoContainer = () => {
  const [pollServer, setPollServer] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [serverInfo, setServerInfo] = useState<ServerInfo>({});
  const [infoState, setInfoState] = useState("");
  
  useEffect(() => {
    console.log('fetching server info');
    setIsLoading(true);
    fetch(import.meta.env.VITE_SERVER_INFO_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setServerInfo(data);
        if(data.error){
          setInfoState("Error");
        }
        else if(data.state?.Code == 0){
          setInfoState("Pending")
        }
        else if(data.state?.Code == 16){
          setInfoState("Running")
        }
        else if(data.state?.Code == 64){
          setInfoState("Stopping")
        }
        else if(data.state?.Code == 80){
          setInfoState("Stopped")
        }
        else{
          setInfoState("Error")
        }
        setIsLoading(false);
      });
  }, [pollServer]);



  return (
    <div className='ServerInfoContainer'>
      {!isLoading && <button onClick={() => setPollServer(pollServer + 1)}>Refresh</button>}
      {(() => {
        if(isLoading){
          return <Loading />
        }
        else switch(infoState){
          case "Error":
            return <ServerError />
          case "Pending":
            return <ServerPending />
          case "Running":
            return <ServerOnline serverInfo={serverInfo} />
          case "Stopping":
            return <ServerStopping />
          case "Stopped":
            return <ServerOffline />
          default:
            return <ServerError />
        }
      })()}
    </div>
  );
}

export default ServerInfoContainer;
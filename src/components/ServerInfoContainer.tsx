import { useEffect, useState } from 'react';
import './ServerInfoContainer.css';
import Loading from './Loading';
import ServerOffline from './ServerOffline';
import ServerOnline from './ServerOnline';
import ServerPending from './ServerPending';
import ServerStopping from './ServerStopping';
import ServerError from './ServerError';
import TickerButton from './TickerButton';
import ClientError from './ClientError';

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
    ip: string;
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
  const [serverStarting, setServerStarting] = useState(false);
  
  useEffect(() => {
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
      }).catch((error) => {
        console.error('Error:', error);
        setInfoState("Client Error");
        setIsLoading(false);
      }
    );
  }, [pollServer]);

  const refreshServerInfo = () => {
    setPollServer(pollServer + 1);
  }

  const startServer = () => {
    console.log('starting server');
    setServerStarting(true);
    fetch(import.meta.env.VITE_SERVER_START_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTimeout(() => {
        setServerStarting(false);
        setPollServer(pollServer + 1); }, 10000);
      }).catch((error) => {
        console.error('Error:', error);
        setServerStarting(false);
        setPollServer(pollServer + 1);
      }
    );
  }

  return (
    <div className='ServerInfoContainer centered'>
      {!isLoading && 
        <div className='RefreshButtonWrapper'>
          <span className='IndicatorWrapper'>
            <div className={infoState == "Running" ? "Indicator Live" : "Indicator"}></div>
          </span>
          <TickerButton buttonText="Refresh?" onClick={isLoading? ()=>{} : refreshServerInfo} />
        </div>
      }
      {(() => {
        if(isLoading){
          return <Loading />
        }
        else switch(infoState){
          case "Error":
            return <ServerError refreshServerInfo={refreshServerInfo} />
          case "Pending":
            return <ServerPending refreshServerInfo={refreshServerInfo} />
          case "Running":
            return <ServerOnline serverInfo={serverInfo} />
          case "Stopping":
            return <ServerStopping refreshServerInfo={refreshServerInfo}/>
          case "Stopped":
            return <ServerOffline startUpFunction={serverStarting ? () => { } :
              startServer} buttonText={serverStarting ? 'Starting...' : 'Start it up?'} />
          case "Client Error":
            return <ClientError />
          default:
            return <ServerError refreshServerInfo={refreshServerInfo} />
        }
      })()}
    </div>
  );
}

export default ServerInfoContainer;
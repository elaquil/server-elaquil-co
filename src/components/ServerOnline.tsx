import './ServerOnline.css'
import Section from './Section';
import IPContainer from './IPContainer';

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

const ServerOnline = (
  {serverInfo} : {serverInfo: ServerInfo}
) => {
  return (
    <>
      <div>
        <Section id={''} title={'WE ARE LIVE!'} />      
      </div>
      <IPContainer publicIp={serverInfo.serverInfo?.ip} />
      <h2>Player Count: {serverInfo.serverInfo?.['Player count']}</h2>
      {/* https://mc-heads.net/head/cosmomojo/25/nohelm */}
      {serverInfo.serverInfo?.['Player count'] != 0 && 
        <h2>Online Players:</h2>
      }
      <div className='OnlinePlayersContainer'>
      {serverInfo.serverInfo?.['Online players']?.map((player: string) => {
        return (
          <span className='PlayerContainer'>
            <img className={"PlayerHead"} src={`https://mc-heads.net/head/${player}/100/nohelm`} alt={player} />
            <p className='Inline'>{player}</p>
          </span>
        )
        })}
        </div>
    </>
  );
}

export default ServerOnline;
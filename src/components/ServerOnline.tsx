
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

const ServerOnline = (
  {serverInfo} : {serverInfo: ServerInfo}
) => {
  return (
    <div>
      <h1>Server is online!</h1>
      <p>{serverInfo.serverInfo?.['Online players']}</p>
    </div>
  );
}

export default ServerOnline;
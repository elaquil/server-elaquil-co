import { MouseEventHandler } from 'react';
import Section from './Section';
import TickerButton from './TickerButton';

interface ServerOfflineProps {
  startUpFunction: MouseEventHandler<HTMLAnchorElement>;
  buttonText: string;
}

const ServerOffline = (
  {startUpFunction, buttonText} : ServerOfflineProps
) => {
  return (
    <>
      <div>
        <Section id={''} title={'Server is Offline'} />
      </div>
      <div className="margin1">
        <TickerButton buttonText={buttonText} onClick={startUpFunction} />
      </div>
    </>
  );
}

export default ServerOffline;
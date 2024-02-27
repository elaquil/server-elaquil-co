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
      <TickerButton buttonText={buttonText} onClick={startUpFunction} />
    </>
  );
}

export default ServerOffline;
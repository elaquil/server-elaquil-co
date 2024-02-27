import './Loading.scss';

const Loading = () => {
  return (
    <div className='loadingContainer'>
      <div className="cube">
        <div className="sides">
          <div className="top"></div>
          <div className="right"></div>
          <div className="bottom"></div>
          <div className="left"></div>
          <div className="front"></div>
          <div className="back"></div>
        </div>
      </div>
    </div>

  );
}

export default Loading;
import Section from './Section';

const ClientError = () => {
  return (

    <>
      <div>
        <Section id={''} title={'Client Request Error'} />
      </div>
      <p>Unable to reach the server, have you lost internet connection? You could be blocking CORS requests, try fixing that and refreshing.</p>
    </>
  );
}

export default ClientError;
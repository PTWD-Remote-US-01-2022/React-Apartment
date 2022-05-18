import { useParams } from 'react-router-dom';

const ApartmentDetails = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};
export default ApartmentDetails;

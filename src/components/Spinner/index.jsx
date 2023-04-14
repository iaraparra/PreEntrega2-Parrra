//import Spinner from 'react-bootstrap/Spinner';
import { FiLoader } from 'react-icons/fi';

function Spinner() {
  return (
    <>
    {/* <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner> */}
    <FiLoader size={30} />
    </>
  );
}

export default Spinner;
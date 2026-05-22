import { BarLoader } from 'react-spinners';

const override = {
  margin: '0 auto 50px auto',
  display: 'block',
};
const Spinner = ({ color = 'blue', size = '150' }) => {
  return (
    <div>
      <BarLoader
        color={color}
        size={size}
        cssOverride={override}
        aria-label="Loading..."
      />
    </div>
  );
};

export default Spinner;

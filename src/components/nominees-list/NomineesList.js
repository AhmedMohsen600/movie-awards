import NomineeCard from '../nominee-card/NomineeCard';
import './styles/nomine-list.css';

const NomineesList = ({ nominees }) => {
  return (
    <div className='nominees-list'>
      {nominees.map((nominee) => (
        <NomineeCard key={nominee.id} nominee={nominee} />
      ))}
    </div>
  );
};

export default NomineesList;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../components/login-form/Login';
import ResultsModal from '../components/modal/ResultsModal';
// import { fetchBallotData } from '../../services/api';
import NomineesList from '../components/nominees-list/NomineesList';
import { openModal } from '../slices/modalSlice';
import { setBallotData } from '../slices/nomineSlice';
import { fetchBallotData } from '../services/data';

const NomineesPage = () => {
  const dispatch = useDispatch();
  const { categories, nominees } = useSelector((state) => state.nominees);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleShowResults = () => dispatch(openModal());

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBallotData();
      dispatch(setBallotData(data));
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      {isLoggedIn ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <h2>Nominees Page</h2>
          {categories.map((category) => (
            <div key={category}>
              <h3>{category}</h3>
              <NomineesList nominees={nominees[category]} />
            </div>
          ))}
          <button onClick={handleShowResults}>Show Results</button>
          <ResultsModal />
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default NomineesPage;

import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../slices/modalSlice';
import './styles/modal.css';

const ResultsModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const selectedNominees = useSelector(
    (state) => state.nominees.selectedNominees
  );

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className='modal-content'>
        <span className='close-btn' onClick={handleClose}>
          &times;
        </span>
        <h2>Results</h2>
        {selectedNominees.length > 0 ? (
          <div className='selected-nominees'>
            <p>You have selected the following nominees:</p>
            <ul>
              {selectedNominees.map((nominee) => (
                <li key={nominee.id}>{nominee.name}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No nominees selected.</p>
        )}
      </div>
    </div>
  );
};

export default ResultsModal;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNominee } from '../../slices/nomineSlice';
import './styles/nominee.css';

const NomineeCard = ({ nominee }) => {
  const { id, name, image } = nominee;
  const dispatch = useDispatch();
  const selectedNominees = useSelector(
    (state) => state.nominees.selectedNominees
  );

  const handleNomineeSelect = () => dispatch(selectNominee({ id, name }));

  const isNomineeSelected = selectedNominees.some(
    (selectedNominee) => selectedNominee.id === id
  );

  return (
    <div className={`nominee-card ${isNomineeSelected ? 'selected' : ''}`}>
      <p>{name}</p>
      <img alt={name} src={image} />
      <button onClick={handleNomineeSelect}>Select</button>
    </div>
  );
};

export default NomineeCard;

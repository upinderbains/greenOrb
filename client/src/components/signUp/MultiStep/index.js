import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Name from './Name';
import Modal from 'react-modal';
import Bio from './Bio';
import { useDispatch } from 'react-redux';
import { createProfile } from '../../../actions/profile';

const MainForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    bio: ''
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSave = () => {
    dispatch(createProfile(formData));
    history.push('/home');
  };

  return (
    <>
      <Modal closeTimeoutMS={200} isOpen={true}>
        {(function() {
          switch (step) {
            case 1:
              return (
                <Name
                  nextStep={nextStep}
                  values={formData}
                  onChange={onChange}
                />
              );
            case 2:
              return (
                <Bio
                  nextStep={nextStep}
                  values={formData}
                  prevStep={prevStep}
                  onChange={onChange}
                />
              );
            case 3:
              onSave();
              return null;
            default:
              return null;
          }
        })()}
      </Modal>
    </>
  );
};

export default MainForm;

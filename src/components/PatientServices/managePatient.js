import React from 'react';
import { NavLink } from 'react-router-dom';
import './managePatient.css';
import admitPatient from '../../images/admitPatient.jpg';
import view from '../../images/view.jpg';
import payment from '../../images/payment.jpg';
import { ManagePatientContainer,  ManagePatientH1,  ManagePatientWrapper, ManagePatientCard,  ManagePatientIcon,  ManagePatientH2 } from './managePatientElement'


function  ManagePatient() {
    return (
        <div className="managePatient">
            <h3 className="patientManagement">PATIENT MANAGEMENT</h3>

            <ManagePatientContainer id='managePatient'>
                <ManagePatientH1>Select task to continue</ManagePatientH1><br></br>
                <ManagePatientWrapper>
                    <ManagePatientCard>
                        <ManagePatientH2>ADD PATIENT DETAILS</ManagePatientH2>
                        <ManagePatientIcon src={admitPatient} />
                        <h4><NavLink to='/admitPatient'>Continue</NavLink></h4>

                    </ManagePatientCard>
                    <ManagePatientCard>
                        <ManagePatientH2>VIEW PATIENT DETAILS</ManagePatientH2>
                        <ManagePatientIcon src={view} />
                        <h4><NavLink to='/patientList'>Continue</NavLink></h4>

                    </ManagePatientCard>
                    <ManagePatientCard>
                        <ManagePatientH2>CALCULATE PATIENT CHARGE</ManagePatientH2>
                        <ManagePatientIcon src={payment} />
                        <h4><NavLink to='/chargeCalculate'>Continue</NavLink></h4>

                    </ManagePatientCard>
                 
                </ManagePatientWrapper>
            </ManagePatientContainer>


        </div>
    );
}

export default ManagePatient;
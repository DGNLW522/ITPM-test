import React from 'react';
import { NavLink } from 'react-router-dom';
import './manageLab.css';
import addLab from '../../images/addLab.jpg';
import viewLab from '../../images/viewLab.png';
import calcLab from '../../images/calcLab.jpg';

import { ManageLabContainer, ManageLabH1, ManageLabWrapper, ManageLabCard, ManageLabIcon, ManageLabH2 } from './manageLabElements'


function ManageLab() {
    return (
        <div className="manageLab">
            <h3 className="manageLabtital">HOSPITAL LAB MANAGEMENT </h3>

            <ManageLabContainer id='manageLab'>
                <ManageLabH1>Select task to continue</ManageLabH1><br/>
                <ManageLabWrapper>
                    <ManageLabCard>
                        <ManageLabH2><b>ADD PATIENT DETAILS and LAB DETAILS</b></ManageLabH2>
                        <ManageLabIcon src={addLab} />
                        <h4><NavLink to='/addLab'>Continue</NavLink></h4>

                    </ManageLabCard>
                    <ManageLabCard>
                        <ManageLabH2><b>VIEW PATIENT</b></ManageLabH2>
                        <ManageLabIcon src={viewLab} />
                        <h4><NavLink to='/labView'>Continue</NavLink></h4>

                    </ManageLabCard>
                    <ManageLabCard>
                        <ManageLabH2><b>CALULATE PATIENT COST</b></ManageLabH2>
                        <ManageLabIcon src={calcLab} />
                        <h4><NavLink to='/calCost'>Continue</NavLink></h4>

                    </ManageLabCard>
                </ManageLabWrapper>
            </ManageLabContainer>


        </div>
    );
}

export default ManageLab;
import React from 'react';
import { NavLink } from 'react-router-dom';
import './manageChannel.css';
import viewapp from '../../images/viewapp.jpg';
import Addap from '../../images/Addap.jpg'
import { ManageChannelContainer, ManageChannelH1, ManageChannelWrapper, ManageChannelCard, ManageChannelIcon, ManageChannelH2 } from './manageChannelElement'


function ManageChannel() {
    return (
        <div className="manageChannel">
            <h3 className="mangApp">CHANNELING SERVICES MANAGEMENT</h3>

            <ManageChannelContainer id='manageChannel'>
                <ManageChannelH1>Select task to continue</ManageChannelH1>
                <ManageChannelWrapper>
                    <ManageChannelCard>
                        <ManageChannelH2>ADD NEW APPOINTMENT</ManageChannelH2>
                        <ManageChannelIcon src={Addap} />
                        <h5><NavLink to='/addChannel'>Continue</NavLink></h5>

                    </ManageChannelCard>
                    <ManageChannelCard>
                        <ManageChannelH2>VIEW CHANNEL</ManageChannelH2>
                        <ManageChannelIcon src={viewapp} />
                        <h5><NavLink to='/viewChannel'>Continue</NavLink></h5>

                    </ManageChannelCard>
                    
                    
                </ManageChannelWrapper>
            </ManageChannelContainer>


        </div>
    );
}

export default ManageChannel;
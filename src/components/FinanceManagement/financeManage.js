import React from 'react';
import { NavLink } from 'react-router-dom';
import './financeManage.css';
import addExp from '../../images/expenses.jpg';
import addInc from '../../images/income.jpg';
import findExp from '../../images/findExp.jpg';
import findInc from '../../images/findInc.jpg';
import calc from '../../images/calc.png';
import { ManageContainer, ManageH1, ManageWrapper, ManageCard, ManageIcon, ManageH2, ManageCardclc } from './financeManageElements'


function FinanceManage() {
    return (
        <div className="backgroundfront">

            <br />
            <div className='frontText'>
                <h3 >HOSPITAL FINANCE MANAGEMENT</h3>

            </div>

            <ManageContainer id='manageexpenses'>
                <ManageH1>Select task to continue</ManageH1>
                <br />
                <ManageWrapper>
                    <ManageCard>
                        <ManageH2>ADD NEW EXPENSES</ManageH2>
                        <ManageIcon src={addExp} />
                        <h4><NavLink to='/create-expenses.component'>Continue</NavLink></h4>

                    </ManageCard>
                    <ManageCard>
                        <ManageH2>ADD NEW INCOME DETAILS</ManageH2>
                        <ManageIcon src={addInc} />
                        <h4><NavLink to='/create-income.component'>Continue</NavLink></h4>

                    </ManageCard>
                    <ManageCard>
                        <ManageH2>FIND EXPENSES</ManageH2>
                        <ManageIcon src={findExp} />
                        <h4><NavLink to='/expenses-list.component'>Continue</NavLink></h4>

                    </ManageCard>
                    <ManageCard>
                        <ManageH2>FIND INCOME DETAILS</ManageH2>
                        <ManageIcon src={findInc} />
                        <h4><NavLink to='/income-list.component'>Continue</NavLink></h4>

                    </ManageCard>

                    <ManageCard>
                        <ManageH2>CALCULATE STATUS</ManageH2>
                        <ManageIcon src={calc} />
                        <h4><NavLink to='/Calculations/calcExpenses'>Continue</NavLink></h4>

                    </ManageCard>
                </ManageWrapper>
            </ManageContainer>


        </div>
    );
}

export default FinanceManage;
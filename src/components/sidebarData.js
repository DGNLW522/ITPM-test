import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';

export const SidebarData = [
    {
        title: 'Home',
        path: '/dashboard',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Customers',
        path: '/customer-list',
        icon: <ImIcons.ImManWoman />,
        cName: 'nav-text'
    },
    {
        title: 'Vehicles',
        path: '/viewvehicle',
        icon: <AiIcons.AiFillCar />,
        cName: 'nav-text'
    },
    {
        title: 'Staff',
        path: '/',
        icon: <ImIcons.ImUsers />,
        cName: 'nav-text'
    },
    {
        title: 'Offer',
        path: '/',
        icon: <AiIcons.AiFillGift />,
        cName: 'nav-text'
    },
    {
        title: 'Rent',
        path: '/',
        icon: <FaIcons.FaXRay />,
        cName: 'nav-text'
    },
    {
        title: 'Contact Us',
        path: '/',
        icon: <AiIcons.AiFillContacts />,
        cName: 'nav-text'
    },
    {
        title: 'About Us',
        path: '/',
        icon: <FaIcons.FaAmbulance />,
        cName: 'nav-text'
    },
    {
        title: 'FQA',
        path: '/',
        icon: <AiIcons.AiOutlineDollarCircle />,
        cName: 'nav-text'
    }
];
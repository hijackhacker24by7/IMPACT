import React, { useState } from 'react';
import { ChevronDownIcon, TicketIcon, UserGroupIcon, Square2StackIcon, RectangleGroupIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/solid';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function ProfilePageSideSection() {

    // for sidebar
    const [open, setOpen] = useState(0);
    const [openAlert, setOpenAlert] = useState(true);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    const LIST_ITEM_STYLES = "select-none cursor-pointer hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 hover:text-gray-900 focus:text-gray-900 active:text-gray-900";
    const main_div='h-[calc(100vh-2rem)] w-full max-w-[20rem] mx-auto p-10 absolute left-5 top-20 shadow-md bg-slate-200'

    return (
        <div className={main_div}>
        {/* <div className="h-[calc(100vh-2rem)] w-full max-w-[20rem] mx-auto p-6 shadow-md bg-slate-200"> */}
        <div className="mb-2 flex items-center gap-4 p-1">
            <img
                src={Logo}
                alt="brand"
                className="h-9 w-9"
            />
            <span className="text-lg font-bold text-blue-gray-800">IMPACT</span>
        </div>
        <hr className="my-2 border-slate-800" />
        <ul>
            <li>
                <div
                    className={`pt-2 flex flex-row ${LIST_ITEM_STYLES}`}
                    onClick={() => handleOpen(1)}
                >
                    <Link to="/Profile"><img src={Logo} alt="Avatar" className="h-9 w-9 rounded-full mr-3" /></Link>
                    <span className="mr-auto font-normal">PAPA Hai Tumahare</span>
                    <ChevronDownIcon className={`ml-auto h-4 w-4 text-gray-500 transition-transform ${open === 1 ? "rotate-180" : ""}`} />
                </div>
                {open === 1 && (
                    <ul className="pl-12">
                        <li className={`py-1 ${LIST_ITEM_STYLES}`}>
                            <Link to="/Profile/Details">Profile Details</Link>
                        </li>
                        <li className={`py-1 ${LIST_ITEM_STYLES}`}>
                            <Link to="/Profile/Education">Educational Details</Link>
                        </li>
                    </ul>
                )}
            </li>
            <hr className="my-2 border-slate-800" />
            <li>
                <div
                    className={`pt-2 pb-3 flex flex-row ${LIST_ITEM_STYLES}`}
                    onClick={() => handleOpen(2)}
                >
                    <RectangleGroupIcon className="h-5 w-5 mr-3" />
                    <span className="mr-auto font-normal">Dashboard</span>
                    <ChevronDownIcon className={`ml-auto h-4 w-4 text-gray-500 transition-transform ${open === 2 ? "rotate-180" : ""}`} />
                </div>
                {open === 2 && (
                    <ul className="pl-12">
                        <li className={`py-1 ${LIST_ITEM_STYLES}`}>
                        <Link to="/Profile/Events">EVENTS</Link>
                        </li>
                        <li className={`py-1 ${LIST_ITEM_STYLES}`}>
                        <Link to="/Profile/CreateEvent">Create Event</Link>
                        </li>
                    </ul>
                )}
            </li>
            <li className={`pb-3 flex flex-row ${LIST_ITEM_STYLES}`}>
                <Square2StackIcon className="h-5 w-5 mr-3" />
                UPCOMING EVENTS
            </li>
            <li className={`pb-3 flex flex-row ${LIST_ITEM_STYLES}`}>
                <TicketIcon className="h-5 w-5 mr-3" />
                OnGoing Events
            </li>
            <li className={`pb-3 flex flex-row ${LIST_ITEM_STYLES}`}>
                <UserGroupIcon className="h-5 w-5 mr-3" />
                Completed Events
            </li>
            <hr className="my-2 border-slate-800" />
            <li className={`pb-3 flex flex-row ${LIST_ITEM_STYLES}`}>
                <ChatBubbleLeftEllipsisIcon className="h-5 w-5 mr-3" />
                Help & Support
            </li>
            <li className={`pb-3  flex flex-row ${LIST_ITEM_STYLES}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" h-5 w-5 mr-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                </svg>

             
                Sign Out
            </li>
        </ul>
        {openAlert && (
            <div className="mt-auto p-4 bg-green-50 border-l-4 border-green-500 text-green-700">
                <p className="font-bold">Complete Your Profile.</p>
                <p>Fill all the details carefully and responsibly.</p>
                <div className="mt-4 flex gap-4">
                    <button onClick={() => setOpenAlert(false)} className="text-green-600 hover:underline">Ha Ha Thik hai</button>
                    <a href="google.com" className="text-green-600 font-medium hover:underline">Man nahi hai</a>
                </div>
            </div>
        )}
        <p className="mt-5 font-medium text-gray-500 flex justify-center">mt v2.1.2</p>
    </div>
    
  )
}

export default ProfilePageSideSection;
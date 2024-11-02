import React from 'react'
import {
    Routes as Switch,
    Route,
} from "react-router-dom";
import ProfileDetailForm from './ProfileDetailForm';
import ProfilePageSideSection from './ProfilePageSideSection';
import EducationalDetailForm from './EducationalDetailForm';
import Jokes from './jokes';


function Profile() {
    return (
        <div className='relatite py-20 2xl:py-40 overflow-hidden'>
            <div className='flex flex-col pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row'>

               
                    <ProfilePageSideSection/>
                    <Switch> 
                       <Route  path="/" element={<Jokes />} />
                       <Route  path="/Details" element={<ProfileDetailForm />} />
                       <Route  path="/Education" element={<EducationalDetailForm />} />
                    </Switch>
              
            </div>
        </div>
    )
}

export default Profile
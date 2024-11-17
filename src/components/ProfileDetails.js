import React from 'react';

export default function Profile() {
  const user = {
    username: 'johndoe',
    fullName: 'John Doe',
    instituteName: 'XYZ University',
    about: 'A passionate learner and developer.',
    email: 'john.doe@example.com',
    contactNo: '+123 456 7890',
    whatsappNo: '+123 456 7890',
    address: '123 Main St, New York, USA',
    academicDetails: [{
      degree: 'B.Sc. Computer Science',
      institution: 'XYZ University',
      year: '2020'
    },
    {
      degree: 'M.Sc. Computer Science',
      institution: 'ABC University',
      year: '2022'
    }]
  };

  return (
    <div class='absolute left-96 -mt-28'>
      <div >
        <div className="px-4 sm:px-0">
          <h3 className="text-base/7 font-semibold text-gray-900">User Information</h3>
          <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">{user.username}</p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">Full name</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{user.fullName}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">institute Name</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{user.instituteName}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">Email address</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{user.email}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">contact No.</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{user.contactNo}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">whatsapp No.</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{user.whatsappNo}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900"> Address</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{user.address}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">About</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                {user.about}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

  );
};



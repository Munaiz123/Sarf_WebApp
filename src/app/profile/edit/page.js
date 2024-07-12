"use client"
import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import withAuth from '../../UserAuth';

const EditProfilePage = () => {
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    dateOfBirth: '',
    gender: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Profile data submitted:', profileData);
  };

  return (
    <main>
        <div className="flex flex-col min-h-screen bg-black text-white p-4">
            {/* Header */}
            <header className="flex justify-between items-center mb-6">
                <Bell className="text-white" size={24} />
                <h1 className="text-xl font-bold">Edit Profile Details</h1>
                <div className="w-6"></div> {/* Placeholder for symmetry */}
            </header>

            {/* Profile Picture */}
            <div className="flex justify-center mb-6">
                <div className="relative">
                <img
                    src="/api/placeholder/80/80"
                    alt="Profile"
                    className="w-20 h-20 rounded-full"
                />
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-black text-xs">+</span>
                </div>
                </div>
            </div>

            {/* Edit Profile Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                {['Full Name', 'Email', 'Phone Number', 'Address', 'Date of Birth', 'Gender'].map((field) => (
                <div key={field} className="relative">
                    <label htmlFor={field}>{field}</label>
                    <input
                    type={field === 'Date of Birth' ? 'date' : 'text'}
                    name={field.toLowerCase().replace(/ /g, '')}
                    value={profileData[field.toLowerCase().replace(/ /g, '')]}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg py-3 px-4 focus:z-10"
                    />
                </div>
                ))}
                
                <button type="submit" className="w-full bg-yellow-500 text-black py-3 px-4 rounded-full mt-6">
                Save Changes
                </button>
            </form>
        </div>
    </main>
  );
};

// export default EditProfilePage;
export default withAuth(EditProfilePage);

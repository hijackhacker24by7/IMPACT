import React from 'react';


function EducationalDetailForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const Institute_Name = e.target[0].value;
        const Highest_Qualification = e.target[1].value;
        const Passing_Year = e.target[2].value;
        const Course_Name = e.target[3].value;
        const University = e.target[4].value;
        const Specialization = e.target[5].value;
        // const Backlogs = e.target[6].value;
        const Year = e.target[7].value;

        console.log(Institute_Name, Highest_Qualification, Passing_Year, Course_Name, University, Specialization, Year);

    };


    return (
        <div className='absolute right-80 bottom-5 top-20 '>
            {/* <div class="w-full bg-cover relative -right-20 max-w-md lg:max-w-2xl lg:w-7/12"> */}
            <div className='flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row'>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900">
                            Highest Qualification Category Details                            
                            </h2>
                            <p className="mt-1 text-sm/6 text-gray-600">
                                This information will be displayed publicly so be careful what
                                you share.
                            </p>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="Institute-Name"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Institute Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="Institute-Name"
                                            name="Institute-Name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="Highest-Qualification"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Highest Qualification
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="Highest-Qualification"
                                            name="Highest-Qualification"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="Passing-Year"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Year of Passing for Highest Qualification
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="Passing-Year"
                                            name="Passing-Year"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>                                
                            </div>
                        </div>
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900">
                            Graduate 
                            </h2>
                            <p className="mt-1 text-sm/6 text-gray-600">
                                Chill and Fill the details
                            </p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="Course-Name"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Course Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="Course-Name"
                                            name="Course-Name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="University"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        University
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="University"
                                            name="University"
                                            type="text"
                                            autoComplete="University-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="Specialization"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Specialization<span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="Specialization"
                                            name="Specialization"
                                            type="text"
                                            placeholder="Specialization"
                                            autoComplete="Specialization"
                                            
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>                                
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="backlogs"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Backlogs
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="Backlogs"
                                            name="Backlogs"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
                                        >
                                            <option>0</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>Year back</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="Year"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Year
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="Year"
                                            name="Year"
                                            type="text"
                                            autoComplete="Year"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>                       
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                            type="button"
                            className="text-sm/6 font-semibold text-gray-900"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EducationalDetailForm;
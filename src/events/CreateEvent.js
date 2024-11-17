import '../events/Button.css'
import { PhotoIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
 import 'react-datepicker/dist/react-datepicker.css';

export default function Example() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [editorContent, setEditorContent] = useState(
        `<p>This field helps you to mention the details of the opportunity you are listing. It is better to include Rules, Eligibility, Process, Format, etc., in order to get the opportunity approved. The more details, the better!</p> 
        <strong>Guidelines:</strong> 
        <ul> 
            <li>Mention all the guidelines like eligibility, format, etc.</li> 
            <li>Inter-college team members allowed or not.</li> 
            <li>Inter-specialization team members allowed or not.</li> 
            <li>The number of questions/problem statements.</li> 
            <li>Duration of the rounds.</li> 
        </ul> 
        <strong>Rules:</strong>
        <ul> 
            <li>Mention the rules of the competition.</li> 
        </ul>`
    );
    console.log(editorContent);
    // Update content state
    const handleEditorChange = (content) => {
        setEditorContent(content);
    };

    return (
        <div>
            <form class='pl-80 pr-80'>
                <div className="space-y-12 pt-24">

                    <h2 className="text-3xl font-semibold text-blue-900">Basic Details</h2>


                    <div className="mt-10 flex justify-center">
                        <div className="w-80">
                            <label htmlFor="Opportunity_Logo" className="block text-sm/6 font-medium text-gray-900">
                                Opportunity Logo
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                                    <div className="mt-4 flex text-sm/6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="border-b border-gray-900/10 pb-12 ">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full ">
                                <label
                                    htmlFor="Opportunity_Type"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Opportunity Type
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="Opportunity_Type"
                                        name="Opportunity_Type"
                                        autoComplete="Opportunity Type"
                                        label="Select"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    >
                                        <option> General & Case Competitions </option>
                                        <option> Quizzes </option>
                                        <option> Hackathons & Coding Challenges  </option>
                                        <option> Scholarships </option>
                                        <option>  Workshops & Webinar </option>
                                        <option>  Conferences  </option>
                                        <option>  Creative & Cultural Events   </option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                                    Title
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="title"
                                        name="title"
                                        type="text"
                                        autoComplete="title"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                                    Organization
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="organization"
                                        name="organization"
                                        type="text"
                                        autoComplete="organization"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="Location" className="block text-sm/6 font-medium text-gray-900">
                                    Location
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="Location"
                                        name="Location"
                                        type="text"
                                        autoComplete="Location"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="CreatedBy" className="block text-sm/6 font-medium text-gray-900">
                                    CreatedBy
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="CreatedBy"
                                        name="CreatedBy"
                                        type="text"
                                        autoComplete="CreatedBy"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                            <div className="p-0"> 
                                <label className="mb-2 pr-3 font-medium text-blue-gray-800">
                                    Start Date
                                </label> 
                                <DatePicker 
                                    selected={startDate} 
                                    onChange={(date) => setStartDate(date)} 
                                    className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" 
                                    placeholderText="Click to select a date" /> 
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                            <div className="p-0"> 
                                <label className="mb-2 pr-3 font-medium text-blue-gray-800">
                                    End Date
                                </label> 
                                <DatePicker selected={endDate} 
                                    onChange={(date) => setEndDate(date)} 
                                    className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" 
                                    placeholderText="Click to select a date" /> 
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="About_Opportunity" className="block text-sm/6 font-medium text-gray-900">
                                    About Opportunity
                                </label>
                                <div className="w-full max-w-4xl mt-10 p-4 bg-white border border-gray-200 rounded-md shadow-md">
                                    {/* <h2 className="text-lg font-semibold mb-4">About Opportunity</h2> */}
                                    <ReactQuill
                                        theme="snow"
                                        value={editorContent}
                                        onChange={handleEditorChange}
                                        placeholder=''
                                        
                                    />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="mt-6 py-12 flex items-center justify-end gap-x-6">

                    <button
                        type="submit"
                        class='next-btn'
                    >
                        <span class='next-btn-span'>Create</span>

                    </button>
                </div>
            </form>



        </div>
    )
}



import React from 'react'

let Event_name = "EVENT_Name"
let Event_Location = "Event Ka pata yeha pe hoga"
let Sub_DIR = "Event Ka SUB-DIR yeha pe hoga"

export default function CreateEvent() {
    return (
        <div class="">
            <div >
                {/* top Cources Header. */}
                <div class="relative pt-8 pb-8 z-9 bg-gradient-136 overflow-hidden">
                    <div class="flex items-center justify-between">
                        {/* Inner Right  */}
                        <div class=" ml-20 pl-1 pr-1 text-white ">

                            <div class="flex items-center mt-8 pb-8">
                                <span class="cursor-pointer mr-8 relative transition-.3s">{Event_Location}</span>
                                <span>{Sub_DIR}</span>
                            </div>
                            <h1 class="text-4xl font-bold pb-5">{Event_name}</h1>

                            <div >
                                <div
                                    class="ng-star-inserted">
                                    <span class="icon ng-star-inserted" >&</span>
                                    4.8 (1,000+ Ratings)
                                </div>
                                <div
                                    class="ng-star-inserted">
                                    <span class="icon ng-star-inserted">*</span>
                                    <strong>1h 20m</strong> total length
                                </div>
                                <div >
                                    <img src="https://cdn.unstop.com/uploads/images/unstop/course/course_avatar.png?d=192x80" alt="Students Images" height="25" width="60" loading="lazy" class="learners" />
                                    <span>
                                        <strong>~66+</strong> Joined Learners
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Inner Left */}
                        <div class="mr-20 ">
                            <div class="w-80 relative z-9 overflow-hidden rounded-lg border-2 border-slate-900">
                                {/* Event Image */}
                                {/* <div class="absolute mt-0 ml-0 w-full h-full">
                                    <span class="h-16 w-16 rounded-full bg-white absolute top-0 right-0 mt-4 mr-4 flex items-center justify-center">play</span>
                                </div> */}
                                <img width="351" height="201" loading="lazy" src="https://d8it4huxumps7.cloudfront.net/uploads/images/courses/2800/banners/651aa1cca3648_Language_2-10.jpg" alt="C Programming" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Event Details */}

                <div class="flex items-start relative z-9 pt-5 bg-slate-200">

                    {/* Event Description */}


                    <div class="w-[calc(100%-325px)] pl-28 pr-5 pb-5">
                        <div class="p-5 rounded-lg bg-white ">

                            <div className="px-4 sm:px-0">
                                <h2 className="text-base/7 font-semibold text-gray-900">Description</h2>
                                <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
                                    🔷 In this contest we will give you a specific time to complete a task.<br />
                                    🔷 The Task is to make a picture same as given in the file(provided you on that day only).<br />
                                    🔷 After the submission we will give you points according to the accuracy of the picture you made.<br />
                                    🔷 Also there was an extra point for extra Creativity.</p>
                            </div>

                        </div>

                        <div class="p-5 mt-5 rounded-lg bg-white ">
                            <div className="px-4 sm:px-0">
                                <h2 className="text-base/7 font-semibold text-gray-900">Prize</h2>
                            </div>
                            <dl className="divide-y divide-red-900">
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm/6 font-medium text-gray-900">Ist position</dt>
                                    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">₹5000 cash prize</dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm/6 font-medium text-gray-900">IInd position</dt>
                                    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">₹4000 cash prize</dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm/6 font-medium text-gray-900">IIInd position</dt>
                                    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">₹3500 cash prize</dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm/6 font-medium text-gray-900">IVth position</dt>
                                    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">₹2500 cash prize</dd>
                                </div>
                            </dl>

                        </div>
                    </div>
                    

                    
                    {/* Event Registration */}

                    <div class="w-325px sticky mt-16 mr-0 max-h[calc(100vh-70px)] pr-3 pb-5 ">
                        <div class="p-5 rounded-lg bg-white ">
                            {/* Join button */}
                            <div class="flex flex-col items-center sticky mt-0 z-999 gap-4 p-5">
                               <div class="w-full flex items-center gap-4">
                                    <div class="">
                                        <button class="w-32 h-12 bg-blue-700 text-white rounded-3xl">Join</button>
                                    </div>
                               </div>
                            </div>
                            {/* Important Dates */}
                            <div class="p-5">
                                <h2 className="mb-5 text-base/7 font-semibold text-gray-900">Important Dates</h2>
                                <div className="flex justify-between gap-5">
                                    <div className="flex flex-col">
                                        <p className="text-sm/6 text-gray-500">Start Date</p>
                                        <p className="text-sm/6 text-gray-700">12th August 2021</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm/6 text-gray-500">End Date</p>
                                        <p className="text-sm/6 text-gray-700">12th August 2021</p>
                                    </div>
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
                                    
            </div>
        </div>
    )
}


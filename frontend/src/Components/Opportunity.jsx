import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Opportunity() {
    return (
        <div>
            <div className='bg-white text-orange-80 dark: '>
                <div className="newforcolor text-red-700 underline text-center font-bold">
                    <TypeAnimation
                        sequence={[
                            `Victory comes from finding opportunities in problems`,
                            1000,
                            'DONT WAIT FOR THE RIGHT OPPORTUNITY : CREATE IT',
                            1000,
                            'EVERY PROBLEM IS AN OPPROTUNITY IS AN DISGUISE.',
                            1000
                        ]}
                        speed={50}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                    />
                </div>
                <section id='the insigths'>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-5">

                        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                            <div
                                class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                <img
                                    src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/65d742581c612_prayatna.jpeg"
                                    style={{}}
                                    alt="card-image" />
                            </div>
                            <div class="p-6">
                                <h5 class="font-black">
                                    PRAYTANA HACKATHON
                                </h5>
                                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    AITR ACM and ACM-W Student Chapter is pleased to introduce to you Prayatna, a nationwide hackathon, Prayatna, a thrilling 36-hour hackathon, is poised to be a premier platform for tech enthusiasts nationwide to showcase their coding prowess and innovative problem-solving skills.
                                </p>
                            </div>
                            <div class="p-6 pt-0">
                               <Link to="https://aitr.acm.org/event/prayatna/">
                                <button 
                                    class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                    type="button">
                                    Read more...
                                </button>
                                </Link>
                            </div>
                        </div>
                        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                            <div
                                class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                <img
            src="https://d8it4huxumps7.cloudfront.net/uploads/images/65cc607d56804_flipkart-runway-season-4.png?d=1920x1920"
alt="card-image" />
                            </div>
                            <div class="p-6">
                                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    FLIPKART RUNAWAY
                                </h5>
                                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                Introducing Season 4 of Flipkart Runway, an Early Career Program for Women Engineers, designed exclusively to offer them a fast-tracked journey toward a thriving career in technology. This year, Runway is centered around the theme of “Her Today, Tech’s Tomorrow”, perfectly aligning with Flipkart’s commitment.
                                </p>
                            </div>
                            <div class="p-6 pt-0">
                                <Link to="https://unstop.com/competitions/flipkart-runway-season-4-flipkart-901610">
                                <button
                                    class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                    type="button">
                                    Read More....
                                </button>
                                </Link>
                            </div>
                        </div>
                        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                            <div
                                class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                <Link to="https://unstop.com/jobs/business-intelligence-analyst-sap-hana-power-bi-diebold-nixdorf-india-pvt-ltd-932414">
                                <img
                                    src='https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-65f32b76e186d_download__2_.png?d=200x200'
                                    alt="card-image" />
                                    </Link>
                            </div>
                            <div class="p-6">
                                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Diebold Nixdorf is hiring for the role of Business Intelligence Analyst (SAP, HANA, Power BI)!

</h5>
                                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                Communicate to internal stakeholders through discussion, presentations, and write-ups of results, recommendations and meaningful insights gained through data analysis to be used to develop strategic and operational plans. 
                                </p>
                            </div>
                            <div class="p-6 pt-0">
                                <button
                                    class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                    type="button">
                                    Read More...
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-5">

                        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                            <div
                                class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                <img
                                    src="https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-65f811105e492_msci_logo.png?d=200x200"
                                    alt="card-image" />
                            </div>
                            <div class="p-6">
                                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                MSCI is hiring for the role of Company Data Analyst!

</h5>
                                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                Analyze the company-level data points and metrics from consolidated financial statements of companies, Annual reports, CSR reports, etc.
                                Procure and process information about globally listed companies such as:

                                </p>
                            </div>
                            <div class="p-6 pt-0">
                                <Link to="https://unstop.com/jobs/company-data-analyst-msci-935214">
                                <button
                                    class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                    type="button">
                                    Read More...
                                </button>
                                </Link>
                            </div>
                        </div>
                        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                            <div
                                class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                <img
                                    src="https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-65f096f2cae15_download__5_.jpeg?d=200x200"
                                    alt="card-image" />
                            </div>
                            <div class="p-6">
                                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    UI/UX Review Check
                                </h5>
                                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                Specialized or broader knowledge of theory and principles within a professional discipline. Typically 1-2 years of directly related experience and a graduate equivalent degree.
Accountable for quality and accuracy of own output
                                </p>
                            </div>
                            <div class="p-6 pt-0">
                                <Link to="https://unstop.com/jobs/technical-lead-nokia-930405">
                                <button
                                    class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                    type="button">
                                    Read More...
                                </button>
                                </Link>
                            </div>
                        </div>
                        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                            <div
                                class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                <img
src='https://ffnews.com/wp-content/uploads/2015/09/Deutsche_Bank.png'
                alt="card-image" />
                            </div>
                            <div class="p-6">
                                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    UI/UX Review Check
                                </h5>
                                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                    and near to "Naviglio" where you can enjoy the main night life in
                                    Barcelona.
                                </p>
                            </div>
                            <div class="p-6 pt-0">
                                <Link to="https://careers.db.com/">
                                <button
                                    class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                    type="button">
                                    Read More...
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
			<Footer/>
        </div>
    );
}

export default Opportunity;
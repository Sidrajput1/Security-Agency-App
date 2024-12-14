import React, { useEffect } from 'react'

function LearnMore() {

    useEffect(() => {
        const preventCopy = (e) => {
          e.preventDefault();
        };
    
        const preventRightClick = (e) => {
          e.preventDefault();
        };
    
        // Prevent text selection
        document.addEventListener('copy', preventCopy);
        document.addEventListener('cut', preventCopy);
        document.addEventListener('selectstart', preventCopy);
    
        // Prevent right-clicking
        document.addEventListener('contextmenu', preventRightClick);
    
        return () => {
          // Cleanup event listeners on component unmount
          document.removeEventListener('copy', preventCopy);
          document.removeEventListener('cut', preventCopy);
          document.removeEventListener('selectstart', preventCopy);
          document.removeEventListener('contextmenu', preventRightClick);
        };
      }, []);
    


    return (
        <main className="min-h-screen w-full text-xl font-serif p-8 text-justify mt-20 cursor-not-allowed">
            <div className="w-full h-1/3 text-center">
                <header className="font-bold text-2xl underline">About us</header>
                <p className="mt-4">
                    Traditional methodology of putting up guards everywhere and anywhere should be giving way to more unobtrusive and efficient vigilance. One very effective option is to adopt a system of positioning marshals at vital points that should preferably operate out of uniform and from locations which may give them better area scanning construction and ease of reaction, when required. They should be well educated with higher I.Q so that they can ‘own the environment’ and act independently, in keeping with the situation. They should be trained in marshal arts so that they could successfully ward off difficult situations. However a fine combination of aggression with coolness can be exercised. This concept will enhance the level of confidence the client will have in his security provider.
                </p>
            </div>
            <div className="w-full h-2/5 mt-8 space-y-4">
                <header className="font-bold text-2xl underline text-center">Security Operations under Difficult Conditions</header>
                <article>
                    Vast fields, difficult working conditions of weather, climate and other vagaries of nature demand highly motivated security personnel to perform in the areas such as mines projects and other large scale business ventures. Our training and conditioning process and motivational approach prepares the guard force for excellence in performance under such environments.
                </article>
                <article>
                    We believe people as our biggest assets. As we strongly believe that success depends largely on the people, so we provide them best working environment, training, opportunities and support, so that they can develop to their full potential.
                </article>
               
            </div>
            <div className="mt-8">
                <header className="font-bold text-2xl underline text-center">Control Room Operations</header>
                <summary className="mt-4">
                    <ul className="list-disc list-inside">
                        <li>Our control room is operational round the clock. Various functions coordinated / controlled from the control room are.</li>
                        <li>Deployment of security personnel.</li>
                        <li>Reporting of arrival departure of guards at various assignments.</li>
                        <li>Taking care of guarding duties and arranging relief in case of a guard falling sick or not being in a position to report for duty, for any other reasons.</li>
                        <li>Recording of complaints from the clients, taking remedial action and keeping own management informed of these.</li>
                        <li>Taking care of the visitors to the office.</li>
                        
                    </ul>
                </summary>
            </div>
            <div className="mt-8">
                <header className="font-bold text-2xl underline text-center">Customer Care</header>
                <summary className="mt-4">
                    <ul className="list-disc list-inside">
                        <li>Shimmer Security has a provision of providing service to customers. Our “Customer care service is a series of activities designed to enhance the level of customer satisfaction – that is, the feeling that a product or service has met the customer expectation."</li>
                        <li>Its importance varies by industry and customer’s often only with a receipt and within a specified time frame. Customer care services are provided by persons by automated means called self-service. It is the integrated part of the company.</li>
                    </ul>
                </summary>
            </div>
            <div>
                <header className="font-bold text-2xl underline text-center">Content of Basics Course are as under</header>
                <ul className='list-disc list-inside'>
                    <li>Code of Conduct.
                                  </li>
                    <li>Food Driling and Saluting</li>
                    <li>Gate House duties</li>
                    <li>Static Guarding.</li>                    
                    <li>Patrolling</li>
                    <li>Maintenance of various documents like registers, duty roster, and visitor’s registers and other documents required at an assignment.</li>
                    <li>Dealing with people. </li>
                    <li>Commencing duties at an assignment. </li>                
                    <li>Telephone procedure.</li>
                    <li>Fire prevention and control including.</li>

                   
                </ul>
            </div>
            <div>
                <header className='font-bold text-2xl underline text-center'>Some Significant features of Our Services</header>
                <ol role='list' className='list-decimal list-inside'>
                    <li>To relieve our clients from the hassles of hiring, training, deployment and day-to-day administrative problems </li>

                    <li>Follow a stringent standard for our "Recruiting and Training" process </li>

                    <li>Expertise of experienced security personnel’s belonging to large National security agencies, the armed forces and the police  </li>
                    <li>Qualified defense trained officers to manage day to day administration  </li>
                    <li>Majority of our staff are ex-servicemen, who have performed similar task during their devoted and distinguished career </li>

                    <li>
                    Car park security / Management 

                    </li>
                    <li>
                    Special Event Security for Crowd control at shopping mall, exhibitions, charity shows, festivals programs, AGM's and many more
                    </li>
                    <li>
                    Our mentors also conduct in-house training programs to improve the efficiency and working standards of our security personnel and deliver quality security services to our esteemed clients in time of emergencies
                    </li>
                </ol>
            </div>
            <div>
                <header className='font-bold text-2xl underline text-center'>Selection</header>
                <ul className='list-disc list-inside'>
                    <li>Extreme attention is given to the recruitment of our personnel in accordance with tough parameters laid down as Company’s policy. These include:</li>
 
                    <li>Physical fitness & Education.  </li>
                    <li>Verification & Background Checks. </li>
                    <li> Basic IQ</li>
                    <li>Correct behaviour.</li>
 
                    <li>Physical fitness & Education.  </li>

                </ul>

            </div>
            <div>
                <header className='font-bold text-2xl underline-offset-2 text-center'>Refresher Training</header>
                <ul className='list-disc list-inside'>
                    <li className='line-clamp-6'>
                    Periodic refresher training is conducted in order to update the security personnel as also imparting training under varying operational conditions. The duration of this training program is generally of two days. The syllabus is designed to the practical implementation of prevalent security concepts as well as to take care of the shortcomings noticed in the guarding delivery. The supervisory staff goes through the refresher courses as relevant to their duties.

                    </li>
                    
                   
                        <h1 className='text-red-500 text-2xl'>On Site Training</h1>
                    <li className='line-clamp-5'>
                    Any weaknesses noticed in guarding services at the client’s premises are addressed through our training staff, which imparts practical training at the client’s location. This is an extremely effective methodology as the weaknesses get addressed on the spot and the absorption levels are very high.

                    </li>
                    <h2 className='text-red-500 text-2xl'>On Job Training</h2>
                    <li className='line-clamp-6'>
                    Before putting the security guards on duty, they will be imparted training specific to the assignment and familiarized with the functions at the particular site. Duration of OJT will depend on the extent of the premises and various other parameters affecting security. OJT is imparted under the care of an OJT team consisting of experienced operations personnel so as to ensure uniformity.

                    </li>
                    
                </ul>
            </div>
            <div>
                <header className='font-bold text-2xl underline capitalize text-orange-600'>TRAINING AIDS</header>
                <ul className='list-[upper-roman] list-inside'>
                   <li>
                   White board with accessories.
                   </li>
                   <li>
                   Slide projector.
                   </li>
                   <li>Flip Charts</li>
                  
                   <li>TV / DVD</li>
                   <li>LCD projector </li>
                   <li>Fire extinguishing cylinders </li>
                   <li>Cut outs of equipments </li>
                   <li>
                   We endeavor that all the human faculties of the participants are fully exercised during the training programs conducted. Apart from having a fully equipped training school as part of our premises, we try and ensure that the trainees use all possible training aids so as to facilitate assimilation. The commonly used aids include
                  </li>
 

                </ul>
            </div>
            <div>
                <header className='font-bold text-2xl underline-offset-1 capitalize text-center'>OPERATION TEAM FUNCTION</header>
                <ul className='list-disc list-inside'>
                    <h1 className='text-red-500 text-2xl'>Standing Operating Procedures SOP’s</h1>
                    <li>
                    To further ensure compliance in duties, all security personnel will have on person, laminated cards with post specific Standing Operating Procedures printed on them. Laminated cards with Escalation triggers, escalation matrix and important phone numbers will also be given to each guard.

                    </li>
                    <li>Regular monitoring-On site training of full team. </li>
                    <li>Daily Briefing/ Debriefing at the time of Shift change-Post Supervisor. </li>
                    <li>Daily Training on Specific post instructions-Post Supervisor. </li>
                    <li>Daily Checks –Field Supervisor. </li>
                    <li>3-4 times a week visit – Operations Manager. </li>
                    <li>Monthly Training by Training Officer: Fire Fighting/Safety, Evacuation Drills 
                    </li>

                </ul>
            </div>
            <div>
                <header className='font-bold text-2xl underline '>HR & ADMIN</header>
                <ul className='list-inside list-[lower-roman]'>
                    <li>All operational finances requirement fulfilled through net banking as  well all Finance Strategist have power pay A/C.</li>
 
                    <li>Yearly bonus to employees every year</li>
                    <li>All operational  conveyance  expenses bear by company </li>
                </ul>

            </div>
            <div>
                <header className='font-bold text-2xl underline'>QUALITY ASSURENCE </header>
                <ul className='list-inside list-disc'>
                    <li>At Shimmer Security our staff is committed to delivery at    most accuracy by conscious efforts </li>
                    <li>“Zero defects & Zero errors” is our motto.</li>
 
                    <li>
                    Our internal quality support department has implement standard quality methodology to ensure high accuracy delivery. Our quality department also evaluated the risk by various methods and ensures that mitigated risks are addressed on a timely manner. 

                    </li>
                    <li>
                    <span className='font-extrabold'>Shimmer Security</span> has implemented certain controls which act as key drivers for our quality work.

                    </li>
                </ul>
            </div>
        </main>
    )
}

export default LearnMore
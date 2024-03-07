import React from 'react';
import NavSection from "../navigation/page";

export default function OnlineDoctorConslayout() {
    return (
        <div className='w-full'>
            <div className="container_fluid bg-[#fef7ef] widget-container">
                <div className="container-fluid widget-container">
                    <div className="flex items-center mt-5">
                        <div>
                            <img className="" src="http://onemg.gumlet.io/marketing/5e7341e1-0637-4703-a7dc-aa8ea920769b.png" alt="Care Plan Image" />
                        </div>
                        <div>
                            <div>
                                Free consultation and more benefits with Care Plan membership.
                            </div>
                            <div>
                                <button className=" " style={{}}>
                                    <img src="https://onemg.gumlet.io/marketing/b9af5a3d-cfb3-43c3-a37f-d5b982882a51.svg" className="" alt="Icon" title="textButton" />
                                    Join now!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

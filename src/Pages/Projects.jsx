import React from "react";
import { pageClass } from "../Components/Utils/CustomClasses";
import Logistic from "../assets/Images/logisic.jpg"
import CRM from "../assets/Images/CRM.png"
import Twitter from "../assets/Images/twitter.png"


export default function Projects() {
  return (
    <div className={`${pageClass}`}>
      <div className="flex flex-col gap-6 items-center justify-center pb-8">
        <div className="bg-white rounded-2xl shadow-md w-full max-w-6xl p-4 sm:p-6 md:p-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#49515a] font-bold mb-4">
            Projects
          </h2>
          <div>
            {/* Courier Aggregator */}
            <div className="mb-6 flex flex-col md:flex-row items-center gap-5">
              <div className="w-full md:w-[350px] h-[180px] md:h-[200px] flex-shrink-0 mb-4 md:mb-0">
                <img
                  src={Logistic}
                  alt="Logistic"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm sm:text-base md:text-lg text-[#404040] font-semibold">
                  Courier Aggregator Platform
                </h3>
                <p className="text-sm md:text-lg text-justify mt-2">
                  Developed a courier aggregator platform to onboard agents and manage courier bookings. Enabled wallet functionality including top-up request, withdrawal request and transaction history. Integrated courier partner APIs for consignment booking, and shipment tracking. Developed a dynamic rate calculator to calculate rate with the help of courier partner API. Built support ticket system for agents and admin communication.
                </p>
                <p className="mt-1 text-sm md:text-lg text-[#778492]">
                  Skills - ReactJS Tailwind CSS NodeJS MongoDB
                </p>
              </div>
            </div>
            {/* CRM APP */}
            <div className="mb-6 flex flex-col md:flex-row items-center gap-5">
              <div className="w-full md:w-[350px] h-[180px] md:h-[200px] flex-shrink-0 mb-4 md:mb-0">
                <img
                  src={CRM}
                  alt="CRM"
                  className="w-[100%] h-[100%] object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm sm:text-base md:text-lg text-[#404040] font-semibold">
                  CRM Lead Management Application
                </h3>
                <p className="text-sm md:text-lg text-justify mt-2">
                  Built a role-based CRM web application enabling admins to create, assign, and manage sales leads via CSV uploads and real-time dashboard. Integrated with Dialer API for lead engagement, call scheduling, real-time status updates, and post-call data. Implemented lead lifecycle tracking with status flows (Created, Assigned, Callback, Rejected, Deal Done) and dynamic group assignments. Developed access-controlled user dashboards, custom reports, and lead disposition logic with organizational hierarchy support.
                </p>
                <p className="mt-1 text-sm md:text-lg text-[#778492]">
                  Skills - ReactJS Tailwind CSS NodeJS MongoDB
                </p>
              </div>
            </div>
            {/* Twitter APP */}
            <div className="mb-6 flex flex-col md:flex-row items-center gap-5">
              <div className="w-full md:w-[350px] h-[180px] md:h-[200px] flex-shrink-0 mb-4 md:mb-0">
                <img
                  src={Twitter}
                  alt="Twitter"
                  className="w-[100%] h-[100%] object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm sm:text-base md:text-lg text-[#404040] font-semibold">
                  Customer Review Analysis And Identifying Spam Reviews
                </h3>
                <p className="text-sm md:text-lg text-justify mt-2">
                 Analyzed twitter reviews for an Airlines company using TextBlob library and performed sentiment analysis. Identified spam reviews using machine learning algorithms and natural language processing. Addressed imbalanced data using SMOTE library to balance the data. Evaluated model performance using confusion matrix, precision score, and other evaluation metrics. Flask is used as the server-side framework to use this machine learning model in website.
                </p>
                <p className="mt-1 text-sm md:text-lg text-[#778492]">
                  Skills - Python Machine Learning NLP Flask  HTML CSS Javascript
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from "react";
import { formBtn1, pageClass } from "../Components/Utils/CustomClasses";
import { Icon } from '@iconify/react';



export default function Publication() {

  return (
    <div className={`${pageClass}`}>
      <div className="flex flex-col gap-6 items-center justify-center pb-8">
        <div className="bg-white rounded-2xl shadow-md w-full max-w-6xl p-4 sm:p-6 md:p-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#49515a] font-bold mb-4">
            Publication
          </h2>
          <div>
            {/* TechieBears */}
            <div className="mb-6">
              <h3 className="text-sm md:text-lg text-[#404040] font-semibold">
               Customer Review Analysis And Identifying Spam Reviews -{" "}
                <span className="text-[#999] text-sm md:text-lg">
                  IJARSCT
                </span>
                <span className="text-[#999] text-sm md:text-lg ml-2">
                  Jan 2023 - May 2023
                </span>
              </h3>
              <p className="text-sm md:text-lg text-justify mt-2">
                This project aims to create a customer review analysis for an Airlines company that can perform sentiment analysis on
                customer reviews and identify spam reviews. The sentiment analysis is done using the text blob library, which is a
                popular natural language processing library. The text classification for identifying spam reviews is done using machine
                learning algorithms and natural language processing. For that we had taken the dataset of US Airline from Kaggle
                containing more than 10 columns and more than 10,000 rows and trained our machine learning model. After analyzing
                our data we found out that there is no label as spam and not spam in our dataset so we added manually and our data is
                also imbalanced to address imbalanced data, the SMOTE library is used to generate synthetic samples of the minority
                class to balance the data. This can improve the performance of the machine learning algorithms used to make
                predictions about whether a review is spam or not. The model evaluation is done using confusion matrix, precision
                score, and other evaluation metrics to measure the accuracy and effectiveness of the model. The model is then saved
                using the pickle library, which allows the model to be saved and loaded for later use. Flask is used as the server-side
                framework to handle the back-end processing and provide the data for the UI. The end goal is to provide a userfriendly, accessible, and effective dashboard for analyzing customer reviews and identifying spam reviews for the
                Airlines company
              </p>
              <p className="mt-1 text-sm md:text-lg text-[#778492]">
                Skills - HTML CSS Javascript Python Flask Machine Learning NLP
              </p>
            </div>
            <div className="flex items-center mt-2 md:mt-0">
                <button className={`${formBtn1} flex items-center space-x-2`} onClick={() => window.open("https://ijarsct.co.in/Paper8908.pdf", "_blank")}>
                  <p className="no-underline text-inherit hover:no-underline hover:text-inherit font-[600] text-sm md:text-lg ">Publication</p>
                    <Icon icon="uil:external-link-alt"  className="w-5 h-5 sm:w-7 sm:h-6 relative top-[-2px]" color="#FFFFFF" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
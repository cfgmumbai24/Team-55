"use client";
import React from 'react'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router'
import FormComponent from "@/components/volunteer_form/survey_form";

const SurveyForm = () => {
    
    return (
      <div >
        <h1>Survey Form</h1>
        <FormComponent />
      </div>
    );
  };
  
  export default SurveyForm;
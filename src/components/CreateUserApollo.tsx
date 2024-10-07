import React from 'react';
import { useQuery } from 'react-query';
import CreateUserLogic, { CreateUserFormModel } from './CreateUserLogic.tsx';

const CreateUserApollo = () => {
  const { isLoading, data } = useQuery("fetchUserData", () =>
    fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
      res.json()
    )
  );

  const handleSubmit = async (formData: CreateUserFormModel) => {
    console.log("Form data to submit:", formData); // Add this log to see formData
    const submitData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      jobTitle: formData.jobTitle,
      preferredName: formData.preferredName,
      phoneNumber: formData.phoneNumber, 
      startDate: new Date(formData.startDate).toISOString(),
      personalEmail: formData.personalEmail,
      homeAddress: formData.homeAddress,
      hiringManagerFirstName: formData.hiringManagerFirstName,
      hiringManagerLastName: formData.hiringManagerLastName,
      hiringManagerEmail: formData.hiringManagerEmail,
      isRehire: formData.isRehire,
      hireType: formData.hireType || null, // Optional field
      positionType: formData.positionType || null, // Optional field
      replacedFirstName: formData.replacedFirstName || null, // Optional field
      replacedLastName: formData.replacedLastName || null, // Optional field
      workSchedule: formData.workSchedule,
      hrNotes: formData.hrNotes,
      emailDomain: formData.emailDomain,
      itDevices: formData.itDevices || [], // Handle empty array if no devices selected
      deskPhoneExt: formData.deskPhoneExt || null, // Optional field
      monitorQuantity: formData.monitorQuantity || null, // Optional field
      createdAt: new Date().toISOString(), // Date of submission
    };

    try {
      const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();
      console.log("Server response:", result); // Log the response from the server
    } catch (error) {
      console.error("Error submitting form:", error); // Log any errors
    }
  };

  if (isLoading) return <div>Loading...</div>;

  const defaultValues = {
    firstName: '',
    lastName: '',
    jobTitle: '',
  };

  return <CreateUserLogic defaultValues={defaultValues} onSubmit={handleSubmit} />;
};

export default CreateUserApollo;
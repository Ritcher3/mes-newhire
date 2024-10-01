// CreateUserApollo.tsx
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
    const submitData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      createdAt: new Date().toISOString(),
    };
    return fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    });
  };

  if (isLoading) return <div>Loading...</div>;

  const defaultValues = {
    firstName: '',
    lastName: '',
  };

  return <CreateUserLogic defaultValues={defaultValues} onSubmit={handleSubmit} />;
};

export default CreateUserApollo;

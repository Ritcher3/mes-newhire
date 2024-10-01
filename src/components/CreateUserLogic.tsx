import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import CreateUserView from './CreateUserView.tsx';

const CreateUserLogic = ({ defaultValues, onSubmit }: { defaultValues: any; onSubmit: any }) => {
  const methods = useForm({
    mode: 'onSubmit',
    defaultValues
  });

  return (
    <FormProvider {...methods}>
      <CreateUserView onSubmit={onSubmit} />
    </FormProvider>
  );
};

export default CreateUserLogic;
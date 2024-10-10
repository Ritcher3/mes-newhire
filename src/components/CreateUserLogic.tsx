import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import CreateUserView from './CreateUserView.tsx';

export interface CreateUserFormModel {
  firstName: string;
  lastName: string;
  jobTitle: string;
  preferredName: string;
  phonenumber: string;
  startDate: Date;
  personalEmail: string;
  homeAddress: string;
  hiringManagerFirstName: string;
  hiringManagerLastName: string;
  hiringManagerEmail: string; 
  isRehire: boolean;
  hireType?: 'newHire' | 'tempHire' ;
  positionType?: 'newlyCreated' | 'replacement';
  replacedLastName?: string;
  replacedFirstName?: string
  workSchedule: string;
  hrNotes: string;
  emailDomain: '@mesfire.com' | '@mesuniforms.com' | '@lawmensupply.com';
  itDevices?: ('deskPhone' | 'laptop' | 'desktop' | 'monitors')[];
  deskPhoneExt?: string; 
  monitorQuantity?: '1' | '2';
  itNotes: string;
}

const CreateUserLogic = ({ defaultValues, onSubmit }: { defaultValues: any; onSubmit: any }) => {
  const methods = useForm({
    mode: 'onSubmit',
    defaultValues
  });

  return (
    <FormProvider {...methods}>
      <CreateUserView onSubmit={methods.handleSubmit(onSubmit)} />
    </FormProvider>
  );
};

export default CreateUserLogic;
import React from 'react';
import { useFormContext } from 'react-hook-form';
import AddressAutocomplete from './AddressAutocomplete.tsx';
import JobInformation from './JobInformation.tsx';
import ITSection from './Itsection.tsx';
import HRSection from './Hrsection.tsx';

interface CreateUserViewProps {
  onSubmit: (data: any) => void;
}

const CreateUserView = ({ onSubmit }: CreateUserViewProps) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useFormContext();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      {/* Employee Information Section */}
      <fieldset>
        <legend>Employee Information</legend>

        {/* First Name, Last Name, and Preferred Name side by side */}
        <div className="form-row">
          {/* First Name */}
          <div className={`field ${errors.firstName ? 'error' : ''}`}>
            <label className="label">First Name</label>
            <input
              {...register("firstName", { required: true })}
              placeholder="First Name"
              className="text-input"
            />
            </div>
           { /* {errors.firstName && <span className="message">This field is required</span>}
          
          </div> */}

          {/* Last Name */}
          <div className={`field ${errors.lastName ? 'error' : ''}`}>
            <label className="label">Last Name</label>
            <input
              {...register("lastName", { required: true })}
              placeholder="Last Name"
              className="text-input"
            />
            {/* {errors.lastName && <span className="message">This field is required</span>} */}
          </div>

          {/* Preferred Name */}
          <div className={`field ${errors.preferredName ? 'error' : ''}`}>
            <label className="label">Preferred Name</label>
            <input
              {...register("preferredName")}
              placeholder="Preferred Name"
              className="text-input"
            />
            
          </div>
        </div>

        {/* Phone Number and Start Date side by side */}
        <div className="form-row">
          {/* Phone Number */}
          <div className={`field ${errors.phonenumber ? 'error' : ''}`}>
            <label className="label">Phone Number</label>
            <input
              {...register("phonenumber", { required: false })}
              placeholder="Phone Number"
              type="tel"
              className="text-input"
            />
            
          </div>

          {/* Start Date */}
          <div className={`field ${errors.startDate ? 'error' : ''}`}>
            <label className="label">Start Date</label>
            <input
              {...register("startDate", { required: false })}
              placeholder="Start Date"
              type="date"
              className="text-input"
            />
            
          </div>
        </div>

        {/* Personal Email */}
        <div className={`field ${errors.personalEmail ? 'error' : ''}`}>
          <label className="label">Personal Email</label>
          <input
            {...register("personalEmail", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
            type="email"
            className="text-input"
          />
          {errors.personalEmail && <span className="message">{errors.personalEmail.message}</span>}
        </div>

        {/* Home Address with Suggestions */}
        <div className={`field ${errors.homeAddress ? 'error' : ''}`}>
          <label className="label">Home Address</label>
          <AddressAutocomplete onChange={(value) => setValue("address", value)} />
          
        </div>
      </fieldset>

      {/* Job Information Section */}
      <JobInformation register={register} errors={errors} setValue={setValue} />

      {/* HR Section */}
      <HRSection register={register} errors={errors} />

      {/* IT Section */}
      <ITSection register={register} errors={errors} />

      <div className="field">
        <button type="submit" className="button">Submit</button>
      </div>
    </form>
  );
};

export default CreateUserView;
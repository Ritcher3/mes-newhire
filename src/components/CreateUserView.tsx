import React from 'react';
import { useFormContext } from 'react-hook-form';
import AddressAutocomplete from './AddressAutocomplete.tsx';

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

        {/* First Name and Last Name side by side */}
        <div className="form-row">
          {/* First Name */}
          <div className={`field ${errors.firstName ? 'error' : ''}`}>
            <label className="label">First Name</label>
            <input {...register("firstName", { required: true })} placeholder="First Name" className="text-input" />
            {errors.firstName && <span className="message">This field is required</span>}
          </div>

          {/* Last Name */}
          <div className={`field ${errors.lastName ? 'error' : ''}`}>
            <label className="label">Last Name</label>
            <input {...register("lastName", { required: true })} placeholder="Last Name" className="text-input" />
            {errors.lastName && <span className="message">This field is required</span>}
          </div>
        </div>

        {/* Preferred Name */}
        <div className={`field ${errors.preferredName ? 'error' : ''}`}>
          <label className="label">Preferred Name</label>
          <input {...register("preferredName")} placeholder="Preferred Name" className="text-input" />
          {errors.preferredName && <span className="message">Please enter a valid name</span>}
        </div>

        {/* Email */}
        <div className={`field ${errors.email ? 'error' : ''}`}>
          <label className="label">Personal Email</label>
          <input {...register("personalEmail", { required: "Email is required", pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Invalid email address" } })} placeholder="Email" type="email" className="text-input" />
          {errors.personalemail && <span className="message">{errors.personalemail.message}</span>}
        </div>

        {/* Phone Number */}
        <div className={`field ${errors.phonenumber ? 'error' : ''}`}>
          <label className="label">Phone Number</label>
          <input {...register("phonenumber", { required: true })} placeholder="Phone Number" type="tel" className="text-input" />
          {errors.phonenumber && <span className="message">Please enter a valid phone number</span>}
        </div>
        

        {/* Home Address with Suggestions */}
        <div className={`field ${errors.address ? 'error' : ''}`}>
          <label className="label">Home Address</label>
          <AddressAutocomplete onChange={(value) => setValue("address", value)} />
          {errors.address && <span className="message">This field is required</span>}
        </div>
      </fieldset>

      {/* Job Information Section */}
      <fieldset>
        <legend>Job Information</legend>

        {/* Job Category */}
        <div className={`field ${errors.jobCategory ? 'error' : ''}`}>
          <label className="label">Job Category</label>
          <select {...register("jobCategory", { required: true })} className="select">
            <option value="">Select a category</option>
            <option value="management">Management</option>
            <option value="engineering">Engineering</option>
            <option value="hr">HR</option>
          </select>
          {errors.jobCategory && <span className="message">This field is required</span>}
        </div>
        
        {/* Phone Number */}
        <div className={`field ${errors.phonenumber ? 'error' : ''}`}>
          <label className="label">Phone Number</label>
          <input {...register("phonenumber", { required: true })} placeholder="Phone Number" type="tel" className="text-input" />
          {errors.phonenumber && <span className="message">Please enter a valid phone number</span>}
        </div>

        {/* Job Title */}
        <div className={`field ${errors.jobTitle ? 'error' : ''}`}>
          <label className="label">Job Title</label>
          <input {...register("jobTitle", { required: true })} placeholder="Job Title" className="text-input" />
          {errors.jobTitle && <span className="message">This field is required</span>}
        </div>
      </fieldset>


      <div className="field">
        <button type="submit" className="button">Submit</button>
      </div>
    </form>
  );
};

export default CreateUserView;
import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface JobInformationProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

const JobInformation: React.FC<JobInformationProps> = ({ register, errors }) => {
  return (
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

      {/* Job Title */}
      <div className={`field ${errors.jobTitle ? 'error' : ''}`}>
        <label className="label">Job Title</label>
        <input
          {...register("jobTitle", { required: true })}
          placeholder="Job Title"
          className="text-input"
        />
        {errors.jobTitle && <span className="message">This field is required</span>}
      </div>

      {/* Will New Employee Work Remote? */}
      <div className={`field ${errors.workRemote ? 'error' : ''}`}>
        <label className="label">Will New Employee Work Remote?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="yes"
              {...register("workRemote", { required: true })}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="no"
              {...register("workRemote", { required: true })}
            />
            No
          </label>
        </div>
        {errors.workRemote && <span className="message">This field is required</span>}
      </div>

      {/* Physical Work Address */}
      <div className={`field ${errors.physicalWorkAddress ? 'error' : ''}`}>
        <label className="label">Physical Work Address</label>
        <select {...register("physicalWorkAddress", { required: true })} className="select">
          <option value="">Select a location</option>
          <option value="office1">Office 1</option>
          <option value="office2">Office 2</option>
          <option value="remote">Remote</option>
        </select>
        {errors.physicalWorkAddress && <span className="message">This field is required</span>}
      </div>

      {/* Branch */}
      <div className={`field ${errors.branch ? 'error' : ''}`}>
        <label className="label">Branch</label>
        <select {...register("branch", { required: true })} className="select">
          <option value="">Select a branch</option>
          <option value="north">North</option>
          <option value="south">South</option>
          <option value="east">East</option>
          <option value="west">West</option>
        </select>
        {errors.branch && <span className="message">This field is required</span>}
      </div>

      {/* Department */}
      <div className={`field ${errors.department ? 'error' : ''}`}>
        <label className="label">Department</label>
        <select {...register("department", { required: true })} className="select">
          <option value="">Select a department</option>
          <option value="sales">Sales</option>
          <option value="development">Development</option>
          <option value="hr">HR</option>
        </select>
        {errors.department && <span className="message">This field is required</span>}
      </div>

      {/* Employee Class */}
      <div className={`field ${errors.employeeClass ? 'error' : ''}`}>
        <label className="label">Employee Class</label>
        <select {...register("employeeClass", { required: true })} className="select">
          <option value="">Select a class</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="contractor">Contractor</option>
        </select>
        {errors.employeeClass && <span className="message">This field is required</span>}
      </div>
    </fieldset>
  );
};

export default JobInformation;
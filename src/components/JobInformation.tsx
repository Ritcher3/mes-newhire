import React, { useState } from 'react';
import { UseFormRegister, FieldErrors, UseFormSetValue } from 'react-hook-form';
import { jobTitlesByCategory } from './JobTitles.tsx'; // Assuming you have a separate file for job titles

interface JobInformationProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
  setValue: UseFormSetValue<any>;
  homeAddress: string;
  branchAddress: string;
}

const JobInformation: React.FC<JobInformationProps> = ({ register, errors, setValue, homeAddress, branchAddress }) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedLocation(value);
    if (value === 'branch') {
      setValue('physicalWorkAddress', branchAddress); // Auto-fill with branch address
    } else if (value === 'home') {
      setValue('physicalWorkAddress', homeAddress); // Auto-fill with home address
    } else {
      setValue('physicalWorkAddress', ''); // Clear the address field if "Other" is selected
    }
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
    setValue('jobTitle', ''); // Reset the job title when a new category is selected
  };

  return (
    <fieldset>
      <legend>Job Information</legend>

      {/* Job Category, Job Title, Organization */}
      <div className="form-row">
        {/* Job Category */}
        <div className={`field small ${errors.jobCategory ? 'error' : ''}`}>
          <label className="label">Job Category</label>
          <select
            {...register("jobCategory", { required: false})}
            className="select small-input"
            onChange={handleCategoryChange}
          >
            <option value="">Select a category</option>
            {Object.keys(jobTitlesByCategory).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          
        </div>

        {/* Job Title */}
        <div className={`field small ${errors.jobTitle ? 'error' : ''}`}>
          <label className="label">Job Title</label>
          <select {...register("jobTitle", { required: false})} className="select small-input" disabled={!selectedCategory}>
            <option value="">Select a title</option>
            {selectedCategory &&
              jobTitlesByCategory[selectedCategory].map((title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
          </select>
          
        </div>

      {/* Organization */ }
      <div className={`field small ${errors.organization ? 'error' : ''}`}>
        <label className="label">Organization (EVP/SVP)</label>
        <select {...register("organization", { required: false})} className="select small-input">
          <option value="">Select an organization</option>
          <option value="evp">EVP</option>
          <option value="svp">SVP</option>
        </select>
        
      </div>
      </div>

      {/* Branch, Department, Employee Class */}
      <div className="form-row">
        {/* Branch */}
        <div className={`field small ${errors.branch ? 'error' : ''}`}>
          <label className="label">Branch</label>
          <select {...register("branch", { required: false})} className="select small-input">
            <option value="">Select a branch</option>
            <option value="branch1">Branch 1</option>
            <option value="branch2">Branch 2</option>
          </select>
          
        </div>

        {/* Department */}
        <div className={`field small ${errors.department ? 'error' : ''}`}>
          <label className="label">Department</label>
          <select {...register("department", { required: false})} className="select small-input">
            <option value="">Select a department</option>
            <option value="engineering">Engineering</option>
            <option value="hr">HR</option>
            <option value="finance">Finance</option>
          </select>

        </div>

      {/* Employee Class */ }
      <div className={`field small ${errors.employeeClass ? 'error' : ''}`}>
        <label className="label">Employee Class</label>
        <select {...register("employeeClass", { required: false})} className="select small-input">
          <option value="">Select an employee class</option>
          <option value="fullTime">Full-time</option>
          <option value="partTime">Part-time</option>
          <option value="contractor">Contractor</option>
        </select>
        
      </div>
      </div>

      {/* Will New Employee Work Remote? */}
      <div className={`field ${errors.workRemote ? 'error' : ''}`}>
        <label className="label">Will New Employee Work Remote?</label>
        <div className="form-radio-group">
          {/* Yes option */}
          <input
            className="checkbox-input"
            id="work-remote-yes"
            name="workRemote"
            type="radio"
            value="yes"
            {...register("workRemote", { required: false})}
          />
          <label className="checkbox-label" htmlFor="work-remote-yes">Yes</label>

          {/* No option */}
          <input
            className="checkbox-input"
            id="work-remote-no"
            name="workRemote"
            type="radio"
            value="no"
            {...register("workRemote", { required: false})}
          />
          <label className="checkbox-label" htmlFor="work-remote-no">No</label>
        </div>
      
      </div>

      {/* Physical Work Location */}
      <div className={`field ${errors.physicalWorkAddress ? 'error' : ''}`}>
        <label className="label">Physical Work Location</label>
        <select
          {...register("physicalWorkLocation", { required: false})}
          className="select"
          onChange={handleLocationChange}
        >
          <option value="">Select a location</option>
          <option value="branch">Branch Location</option>
          <option value="home">Home Location</option>
          <option value="other">Other - Enter Manually</option>
        </select>

        {/* Address Field */}
        <input
          {...register("physicalWorkAddress", { required: false})}
          placeholder="Enter address"
          className="text-input"
          disabled={selectedLocation !== 'other'}
        />
      </div>
    </fieldset>
  );
};

export default JobInformation;
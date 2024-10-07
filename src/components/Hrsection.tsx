import React, { useState } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface HrSectionProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

const HrSection: React.FC<HrSectionProps> = ({ register, errors }) => {
  const [isRehire, setIsRehire] = useState(false);
  const [isReplacement, setIsReplacement] = useState(false);

  return (
    <fieldset>
      <legend>HR Section</legend>

      {/* Hiring Manager's Name */}
      <div className="form-row">
        {/* First Name */}
        <div className={`field ${errors.hiringManagerFirstName ? 'error' : ''}`}>
          <label className="label">Hiring Manager's First Name</label>
          <input
            {...register("hiringManagerFirstName", { required: false })}
            placeholder="First Name"
            className="text-input"
          />
          
        </div>

        {/* Last Name */}
        <div className={`field ${errors.hiringManagerLastName ? 'error' : ''}`}>
          <label className="label">Hiring Manager's Last Name</label>
          <input
            {...register("hiringManagerLastName", { required: false })}
            placeholder="Last Name"
            className="text-input"
          />
         
        </div>
      </div>

      {/* Hiring Manager's Email */}
      <div className={`field ${errors.hiringManagerEmail ? 'error' : ''}`}>
        <label className="label">Hiring Manager's Email</label>
        <input
          {...register("hiringManagerEmail", {
            required: false,
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Invalid email address",
            },
          })}
          placeholder="Hiring Manager's Email"
          className="text-input"
          type="email"
        />
        {errors.hiringManagerEmail && <span className="message">{errors.hiringManagerEmail.message}</span>}
      </div>

      {/* Is this a Rehire? */}
      <div className={`field ${errors.isRehire ? 'error' : ''}`}>
        <label className="label">Is this a Rehire?</label>
        <select
          {...register("isRehire", { required: false })}
          className="select"
          onChange={(e) => setIsRehire(e.target.value === 'no')}
        >
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        
      </div>

      {/* If not a Rehire, show New Hire or Temp Hire options */}
      {isRehire && (
        <div className={`field ${errors.hireType ? 'error' : ''}`}>
          <label className="label">Hire Type</label>
          <select {...register("hireType", { required: isRehire })} className="select">
            <option value="">Select Hire Type</option>
            <option value="newHire">New Hire</option>
            <option value="tempHire">Temp Hire</option>
          </select>
          
        </div>
      )}

      {/* Replacement or New Position? */}
      <div className={`field ${errors.positionType ? 'error' : ''}`}>
        <label className="label">Replacement or New Position?</label>
        <div className="form-radio-group">
          <input
            className="checkbox-input"
            id="position-new"
            name="positionType"
            type="radio"
            value="newlyCreated"
            {...register("positionType", { required: false })}
            onChange={() => setIsReplacement(false)}
          />
          <label htmlFor="position-new">Newly Created</label>

          <input
            className="checkbox-input"
            id="position-replacement"
            name="positionType"
            type="radio"
            value="replacement"
            {...register("positionType", { required: false })}
            onChange={() => setIsReplacement(true)}
          />
          <label htmlFor="position-replacement">Replacement</label>
        </div>
        
      </div>

      {/* If Replacement is selected, show fields to enter employee being replaced */}
      {isReplacement && (
        <div className="form-row">
          {/* Employee Being Replaced - Last Name */}
          <div className={`field ${errors.replacedLastName ? 'error' : ''}`}>
            <label className="label">Employee Being Replaced - Last Name</label>
            <input
              {...register("replacedLastName", { required: isReplacement })}
              placeholder="Last Name"
              className="text-input"
            />
            
          </div>

          {/* Employee Being Replaced - First Name */}
          <div className={`field ${errors.replacedFirstName ? 'error' : ''}`}>
            <label className="label">Employee Being Replaced - First Name</label>
            <input
              {...register("replacedFirstName", { required: isReplacement })}
              placeholder="First Name"
              className="text-input"
            />
            
          </div>
        </div>
      )}

      {/* Work Schedule */}
      <div className={`field ${errors.workSchedule ? 'error' : ''}`}>
        <label className="label">Work Schedule</label>
        <textarea
          {...register("workSchedule", { required: false })}
          placeholder="Enter work schedule"
          className="textarea"
          rows={4}
        />
        
      </div>

            {/* HR Notes Section */}
            <div className={`field ${errors.hrNotes ? 'error' : ''}`}>
        <label className="label">Extra Instructions for HR</label>
        <textarea
          {...register("hrnotes", { required: false })}
          placeholder="Enter any additional instructions for HR"
          className="textarea"
          rows={4}
        />
        
      </div>
    </fieldset>
  );
};

export default HrSection;
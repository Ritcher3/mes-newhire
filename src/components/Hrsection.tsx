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
            {...register("hiringManagerFirstName", { required: true })}
            placeholder="First Name"
            className="text-input"
          />
          {errors.hiringManagerFirstName && <span className="message">This field is required</span>}
        </div>

        {/* Last Name */}
        <div className={`field ${errors.hiringManagerLastName ? 'error' : ''}`}>
          <label className="label">Hiring Manager's Last Name</label>
          <input
            {...register("hiringManagerLastName", { required: true })}
            placeholder="Last Name"
            className="text-input"
          />
          {errors.hiringManagerLastName && <span className="message">This field is required</span>}
        </div>
      </div>

      {/* Hiring Manager's Email */}
      <div className={`field ${errors.hiringManagerEmail ? 'error' : ''}`}>
        <label className="label">Hiring Manager's Email</label>
        <input
          {...register("hiringManagerEmail", {
            required: "Email is required",
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
          {...register("isRehire", { required: true })}
          className="select"
          onChange={(e) => setIsRehire(e.target.value === 'no')}
        >
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.isRehire && <span className="message">This field is required</span>}
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
          {errors.hireType && <span className="message">This field is required</span>}
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
            {...register("positionType", { required: true })}
            onChange={() => setIsReplacement(false)}
          />
          <label htmlFor="position-new">Newly Created</label>

          <input
            className="checkbox-input"
            id="position-replacement"
            name="positionType"
            type="radio"
            value="replacement"
            {...register("positionType", { required: true })}
            onChange={() => setIsReplacement(true)}
          />
          <label htmlFor="position-replacement">Replacement</label>
        </div>
        {errors.positionType && <span className="message">This field is required</span>}
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
            {errors.replacedLastName && <span className="message">This field is required</span>}
          </div>

          {/* Employee Being Replaced - First Name */}
          <div className={`field ${errors.replacedFirstName ? 'error' : ''}`}>
            <label className="label">Employee Being Replaced - First Name</label>
            <input
              {...register("replacedFirstName", { required: isReplacement })}
              placeholder="First Name"
              className="text-input"
            />
            {errors.replacedFirstName && <span className="message">This field is required</span>}
          </div>
        </div>
      )}

      {/* Work Schedule */}
      <div className={`field ${errors.workSchedule ? 'error' : ''}`}>
        <label className="label">Work Schedule</label>
        <textarea
          {...register("workSchedule", { required: true })}
          placeholder="Enter work schedule"
          className="textarea"
          rows={4}
        />
        {errors.workSchedule && <span className="message">This field is required</span>}
      </div>

            {/* HR Notes Section */}
            <div className={`field ${errors.hrNotes ? 'error' : ''}`}>
        <label className="label">Extra Instructions for HR</label>
        <textarea
          {...register("hrnotes", { required: true })}
          placeholder="Enter any additional instructions for HR"
          className="textarea"
          rows={4}
        />
        {errors.workSchedule && <span className="message">This field is required</span>}
      </div>
    </fieldset>
  );
};

export default HrSection;
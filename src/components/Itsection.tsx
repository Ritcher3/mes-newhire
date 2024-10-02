import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface ItsectionProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

const Itsection: React.FC<ItsectionProps> = ({ register, errors }) => {
      return (
    <fieldset>
      <legend>IT Section</legend>
                     
        {/* IT Section */}

        {/* Computer Type */}
        <div className={`field ${errors.computerType ? 'error' : ''}`}>
          <label className="label">Computer Type</label>
          <select {...register("computerType", { required: true })} className="select">
            <option value="">Select a type</option>
            <option value="laptop">Laptop</option>
            <option value="desktop">Desktop</option>
            <option value="tablet">Tablet</option>
          </select>
          {errors.computerType && <span className="message">This field is required</span>}
        </div>
  
        {/* Email Setup Required */}
        <div className={`field ${errors.emailSetupRequired ? 'error' : ''}`}>
          <label className="label">Email Setup Required?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="yes"
                {...register("emailSetupRequired", { required: true })}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="no"
                {...register("emailSetupRequired", { required: true })}
              />
              No
            </label>
          </div>
          {errors.emailSetupRequired && <span className="message">This field is required</span>}
        </div>
  
        {/* Software Requirements */}
        <div className={`field ${errors.softwareRequirements ? 'error' : ''}`}>
          <label className="label">Software Requirements</label>
          <textarea
            {...register("softwareRequirements", { required: true })}
            placeholder="List software requirements"
            className="textarea"
          />
          {errors.softwareRequirements && <span className="message">This field is required</span>}
        </div>
  
        {/* Access to Network Drive */}
        <div className={`field ${errors.networkDriveAccess ? 'error' : ''}`}>
          <label className="label">Access to Network Drive?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="yes"
                {...register("networkDriveAccess", { required: true })}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="no"
                {...register("networkDriveAccess", { required: true })}
              />
              No
            </label>
            </div>
          {errors.networkDriveAccess && <span className="message">This field is required</span>}
          </div>
          </fieldset>
      );
}; 

export default Itsection
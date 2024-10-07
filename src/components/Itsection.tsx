import React, { useState } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface ItsectionProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

const Itsection: React.FC<ItsectionProps> = ({ register, errors }) => {
  const [showCellPhoneField, setShowCellPhoneField] = useState(false);
  const [showDeskPhoneExt, setShowDeskPhoneExt] = useState(false);
  const [showMonitorOptions, setShowMonitorOptions] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <fieldset>
      <legend>IT Section</legend>

      {/* Email Address */}
      <div className={`field ${errors.emailDomain ? 'error' : ''}`}>
        <label className="label">Email Address?</label>
        <select {...register("emailDomain", { required: false})} className="select">
          <option value="">Select Email Domain</option>
          <option value="@mesfire.com">@mesfire.com</option>
          <option value="@mesuniforms.com">@mesuniforms.com</option>
          <option value="@lawmensupply.com">@lawmensupply.com</option>
        </select>
        
      </div>

      {/* Mobile Devices */}
      <div className={`field ${errors.mobileDevices ? 'error' : ''}`}>
        <label className="label">Mobile Devices</label>
        <div className="form-radio-group">
          {/* Cell Phone */}
          <input
            className="checkbox-input"
            id="mobile-cell"
            name="mobileDevices"
            type="checkbox"
            value="cell"
            {...register("mobileDevices")}
            onChange={(e) => setShowCellPhoneField(e.target.checked)}
          />
          <label className="checkbox-label" htmlFor="mobile-cell">Cell Phone</label>

          {/* Tablet */}
          <input
            className="checkbox-input"
            id="mobile-tablet"
            name="mobileDevices"
            type="checkbox"
            value="tablet"
            {...register("mobileDevices")}
          />
          <label className="checkbox-label" htmlFor="mobile-tablet">Tablet</label>
        </div>
        {showCellPhoneField && (
          <div className={`field ${errors.cellPhoneNumber ? 'error' : ''}`}>
            <label className="label">Enter Area Code or Existing Number to Redeploy</label>
            <input
              {...register("cellPhoneNumber", { required: showCellPhoneField })}
              placeholder="Enter Area Code or Existing Number"
              className="text-input"
            />
            
          </div>
        )}
      </div>

      {/* IT Devices */}
      <div className={`field ${errors.itDevices ? 'error' : ''}`}>
        <label className="label">IT Devices</label>
        <div className="form-radio-group">
          {/* Desk Phone */}
          <input
            className="checkbox-input"
            id="it-deskphone"
            name="itDevices"
            type="checkbox"
            value="deskPhone"
            {...register("itDevices")}
            onChange={(e) => setShowDeskPhoneExt(e.target.checked)}
          />
          <label className="checkbox-label" htmlFor="it-deskphone">Desk Phone</label>

          {/* Laptop */}
          <input
            className="checkbox-input"
            id="it-laptop"
            name="itDevices"
            type="checkbox"
            value="laptop"
            {...register("itDevices")}
          />
          <label className="checkbox-label" htmlFor="it-laptop">Laptop</label>

          {/* Desktop */}
          <input
            className="checkbox-input"
            id="it-desktop"
            name="itDevices"
            type="checkbox"
            value="desktop"
            {...register("itDevices")}
          />
          <label className="checkbox-label" htmlFor="it-desktop">Desktop</label>

          {/* Monitors */}
          <input
            className="checkbox-input"
            id="it-monitors"
            name="itDevices"
            type="checkbox"
            value="monitors"
            {...register("itDevices")}
            onChange={(e) => setShowMonitorOptions(e.target.checked)}
          />
          <label className="checkbox-label" htmlFor="it-monitors">Monitors</label>
        </div>
        {showDeskPhoneExt && (
          <div className={`field ${errors.deskPhoneExt ? 'error' : ''}`}>
            <label className="label">Specify Extension</label>
            <input
              {...register("deskPhoneExt")}
              placeholder="Enter Extension"
              className="text-input"
            />
            
          </div>
        )}
        {showMonitorOptions && (
          <div className={`field ${errors.monitorQuantity ? 'error' : ''}`}>
            <label className="label">Select Number of Monitors</label>
            <select {...register("monitorQuantity", { required: showMonitorOptions })} className="select">
              <option value="">Select Quantity</option>
              <option value="1">1 Monitor</option>
              <option value="2">2 Monitors</option>
            </select>
            
          </div>
        )}
      </div>

      {/* Ship to Address */}
      <div className={`field ${errors.shipToAddress ? 'error' : ''}`}>
        <label className="label">Ship to Address</label>
        <select
          {...register("shipToAddress", { required: false})}
          className="select"
          onChange={handleLocationChange}
        >
          <option value="">Select a location</option>
          <option value="branch">Branch Location</option>
          <option value="home">Home Address</option>
          <option value="other">Other - Enter Manually</option>
        </select>
        {/* Address Field */}
        <input
          {...register("manualShipToAddress", { required: selectedLocation === 'other' })}
          placeholder="Enter address manually"
          className="text-input"
          disabled={selectedLocation !== 'other'}
        />
        
      </div>

      {/* IT Notes Section */}
      <div className={`field ${errors.itNotes ? 'error' : ''}`}>
        <label className="label">Extra Instructions for IT</label>
        <textarea
          {...register("itNotes")}
          placeholder="Enter any additional instructions for IT"
          className="textarea"
          rows={4}
        />
        
      </div>
    </fieldset>
  );
};

export default Itsection;
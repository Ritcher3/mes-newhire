import React, { useState } from 'react';
import { jobTitlesByCategory } from './JobTitles.tsx';

interface JobCategorySelectProps {
  register: any;
  errors: any;
}

const JobCategorySelect: React.FC<JobCategorySelectProps> = ({ register, errors }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const jobCategories = Object.keys(jobTitlesByCategory);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="form-row">
      {/* Job Category */}
      <div className={`field small ${errors.jobCategory ? 'error' : ''}`}>
        <label className="label">Job Category</label>
        <select
          {...register('jobCategory', { required: false})}
          className="select small-input"
          onChange={handleCategoryChange}
        >
          <option value="">Select a category</option>
          {jobCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
       
      </div>

      {/* Job Title */}
      <div className={`field small ${errors.jobTitle ? 'error' : ''}`}>
        <label className="label">Job Title</label>
        <select {...register('jobTitle', { required: false})} className="select small-input">
          <option value="">Select a title</option>
          {selectedCategory &&
            jobTitlesByCategory[selectedCategory].map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
        </select>
        
      </div>
    </div>
  );
};

export default JobCategorySelect;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import jobs from '../data/jobs';

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    department: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredJobs = jobs.filter(job => {
    return (
      (!filters.type || job.type === filters.type) &&
      (!filters.location || job.location.includes(filters.location)) &&
      (!filters.department || job.department === filters.department)
    );
  });

  const uniqueTypes = [...new Set(jobs.map(job => job.type))];
  const uniqueLocations = [...new Set(jobs.map(job => job.location))];
  const uniqueDepartments = [...new Set(jobs.map(job => job.department))];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Current Openings</h2>
      
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <select
          name="type"
          value={filters.type}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">All Types</option>
          {uniqueTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <select
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">All Locations</option>
          {uniqueLocations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>

        <select
          name="department"
          value={filters.department}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">All Departments</option>
          {uniqueDepartments.map(department => (
            <option key={department} value={department}>{department}</option>
          ))}
        </select>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map(job => (
          <motion.div
            key={job.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            whileHover={{ y: -5 }}
            onClick={() => setSelectedJob(job)}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <div className="text-gray-600 mb-4">
                <p><span className="font-medium">Type:</span> {job.type}</p>
                <p><span className="font-medium">Location:</span> {job.location}</p>
                <p><span className="font-medium">Department:</span> {job.department}</p>
                <p><span className="font-medium">Experience:</span> {job.experience}</p>
                <p><span className="font-medium">Salary:</span> {job.salary}</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{selectedJob.title}</h3>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Job Details</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <p><span className="font-medium">Type:</span> {selectedJob.type}</p>
                    <p><span className="font-medium">Location:</span> {selectedJob.location}</p>
                    <p><span className="font-medium">Department:</span> {selectedJob.department}</p>
                    <p><span className="font-medium">Experience:</span> {selectedJob.experience}</p>
                    <p><span className="font-medium">Salary:</span> {selectedJob.salary}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-gray-600">{selectedJob.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Requirements</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Responsibilities</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedJob.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-end space-x-4 mt-6">
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="px-4 py-2 border rounded hover:bg-gray-100"
                  >
                    Close
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Jobs; 
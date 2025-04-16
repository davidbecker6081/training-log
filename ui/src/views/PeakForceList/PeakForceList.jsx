import React, { useState } from 'react';
import { usePeakForces } from '../../hooks';
import { LoadingSpinner, ErrorMessage, PeakForceCard } from '../../components';
import { sortPeakForcesByDate } from '../../utils';
import './PeakForceList.sass';

/**
 * A view component to display a list of peak forces
 */
export const PeakForceList = ({
  onSelectPeakForce,
  className = '',
}) => {
  const { data: peakForces, isLoading, error, refetch } = usePeakForces();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Filter peak forces based on search term
  const filteredPeakForces = peakForces?.filter(peakForce => 
    (peakForce.tag && peakForce.tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (peakForce.comment && peakForce.comment.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Sort peak forces based on sort order
  const sortedPeakForces = filteredPeakForces ? [...filteredPeakForces] : [];
  
  if (sortOrder === 'newest') {
    sortedPeakForces.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } else if (sortOrder === 'oldest') {
    sortedPeakForces.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  } else if (sortOrder === 'highest') {
    sortedPeakForces.sort((a, b) => Math.max(b.leftMax, b.rightMax) - Math.max(a.leftMax, a.rightMax));
  }

  return (
    <div className={`peak-force-list ${className}`}>
      <div className="peak-force-list-header">
        <h2 className="title is-4">Peak Forces</h2>
        
        <div className="filters">
          <div className="field">
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Search peak forces..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
          
          <div className="field">
            <div className="control">
              <div className="select">
                <select value={sortOrder} onChange={handleSortChange}>
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="highest">Highest Force</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage error={error} onRetry={refetch} />
      ) : sortedPeakForces.length > 0 ? (
        <div className="peak-force-cards">
          {sortedPeakForces.map(peakForce => (
            <PeakForceCard
              key={peakForce.id}
              peakForce={peakForce}
              onClick={onSelectPeakForce}
            />
          ))}
        </div>
      ) : (
        <div className="no-peak-forces">
          <p>No peak forces found.</p>
          {searchTerm && (
            <button 
              className="button is-small is-light"
              onClick={() => setSearchTerm('')}
            >
              Clear search
            </button>
          )}
        </div>
      )}
    </div>
  );
};

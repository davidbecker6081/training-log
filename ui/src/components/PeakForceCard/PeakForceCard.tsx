import React from 'react';
import { PeakForce } from '../../types';
import { 
  formatDate, 
  formatPeakForce, 
  calculatePercentageDifference, 
  hasSignificantImbalance,
  getStrongerSide
} from '../../utils';
import './PeakForceCard.sass';

interface PeakForceCardProps {
  peakForce: PeakForce;
  onClick?: (peakForce: PeakForce) => void;
  className?: string;
}

/**
 * A card component to display peak force information
 */
export const PeakForceCard: React.FC<PeakForceCardProps> = ({
  peakForce,
  onClick,
  className = '',
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(peakForce);
    }
  };

  const percentageDiff = calculatePercentageDifference(peakForce.leftMax, peakForce.rightMax);
  const hasImbalance = hasSignificantImbalance(peakForce.leftMax, peakForce.rightMax);
  const strongerSide = getStrongerSide(peakForce.leftMax, peakForce.rightMax);

  return (
    <div 
      className={`peak-force-card card ${className} ${onClick ? 'is-clickable' : ''}`}
      onClick={onClick ? handleClick : undefined}
    >
      <div className="card-content">
        <div className="peak-force-header">
          <div className="peak-force-date">
            <span className="tag is-info is-light">{formatDate(peakForce.date)}</span>
            {peakForce.tag && (
              <span className="tag is-light ml-2">{peakForce.tag}</span>
            )}
          </div>
        </div>
        
        <div className="peak-force-values">
          <div className="columns is-mobile">
            <div className="column">
              <div className={`peak-force-side ${strongerSide === 'left' ? 'is-stronger' : ''}`}>
                <div className="side-label">Left</div>
                <div className="side-value">{formatPeakForce(peakForce.leftMax, peakForce.unit)}</div>
              </div>
            </div>
            
            <div className="column">
              <div className={`peak-force-side ${strongerSide === 'right' ? 'is-stronger' : ''}`}>
                <div className="side-label">Right</div>
                <div className="side-value">{formatPeakForce(peakForce.rightMax, peakForce.unit)}</div>
              </div>
            </div>
          </div>
          
          <div className="peak-force-difference">
            <div className={`difference-value ${hasImbalance ? 'has-imbalance' : ''}`}>
              {percentageDiff.toFixed(1)}% difference
            </div>
            {hasImbalance && (
              <div className="imbalance-warning">
                Significant imbalance detected
              </div>
            )}
          </div>
        </div>
        
        {peakForce.comment && (
          <p className="peak-force-comment">{peakForce.comment}</p>
        )}
      </div>
    </div>
  );
};

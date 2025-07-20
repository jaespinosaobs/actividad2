import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import spellsData from '../data/spells.json';
import { useState, useRef, useEffect } from 'react';

function SpellList({ spellIds }) {
  if (!spellIds || !Array.isArray(spellIds)) {
    return <p>No spells available</p>;
  }

  const spells = spellIds.map(id => 
    spellsData.find(spell => spell.id === id)
  ).filter(spell => spell);

  if (spells.length === 0) {
    return <p>No spells found</p>;
  }

  return (
    <div className="mt-3">
      {spells.map(spell => (
        <SpellBadge key={spell.id} spell={spell} />
      ))}
    </div>
  );
}

const SpellBadge = ({ spell }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const badgeRef = useRef(null);
  
  // Calculate tooltip position when badge is hovered
  useEffect(() => {
    if (showTooltip && badgeRef.current) {
      const rect = badgeRef.current.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top - 10,
        left: rect.left + rect.width / 2
      });
    }
  }, [showTooltip]);

  return (
    <span 
      className="spell-badge-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span 
        ref={badgeRef}
        className="badge bg-primary me-2 hover-spell"
      >
        {spell.name}
      </span>
      
      {showTooltip && (
        <div 
          className="custom-tooltip"
          style={{
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left}px`,
            transform: 'translateX(-50%) translateY(-100%)'
          }}
        >
          <div className="tooltip-content">
            <img src={`./src/assets/spells/${spell.id}.png`} alt={spell.name} />
            <h6 className="mb-1 fw-bold">{spell.name}</h6>
            <div className="mb-1">Level: {spell.level}</div>
          </div>
          <div className="tooltip-arrow"></div>
        </div>
      )}
    </span>
  );
}

export default SpellList;
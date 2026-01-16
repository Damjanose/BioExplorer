import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n';
import './HumanBodySVG.css';

interface HumanBodySVGProps {
  onSelectPart?: (partId: string) => void;
  selectedPart?: string;
}

interface OrganInfo {
  id: string;
  icon: string;
  color: string;
  position: { x: number; y: number };
  lineAnchor: { x: number; y: number };
}

const organs: OrganInfo[] = [
  { 
    id: 'brain', 
    icon: '🧠', 
    color: '#ff6bb6', 
    position: { x: 50, y: 8 },
    lineAnchor: { x: 50, y: 12 }
  },
  { 
    id: 'heart', 
    icon: '❤️', 
    color: '#ff4757', 
    position: { x: 54, y: 28 },
    lineAnchor: { x: 52, y: 30 }
  },
  { 
    id: 'lungs', 
    icon: '🫁', 
    color: '#00d4aa', 
    position: { x: 50, y: 32 },
    lineAnchor: { x: 50, y: 34 }
  },
  { 
    id: 'liver', 
    icon: '🫀', 
    color: '#daa520', 
    position: { x: 42, y: 42 },
    lineAnchor: { x: 45, y: 43 }
  },
  { 
    id: 'stomach', 
    icon: '🍽️', 
    color: '#ffa559', 
    position: { x: 56, y: 44 },
    lineAnchor: { x: 54, y: 45 }
  },
  { 
    id: 'kidneys', 
    icon: '🫘', 
    color: '#845ef7', 
    position: { x: 50, y: 50 },
    lineAnchor: { x: 50, y: 51 }
  },
  { 
    id: 'intestines', 
    icon: '🔄', 
    color: '#ffb74d', 
    position: { x: 50, y: 58 },
    lineAnchor: { x: 50, y: 57 }
  },
  { 
    id: 'skeleton', 
    icon: '🦴', 
    color: '#e0e0ff', 
    position: { x: 50, y: 75 },
    lineAnchor: { x: 50, y: 72 }
  },
];

/**
 * Interactive 3D Human Body Component - Award Winning Design
 */
export const HumanBodySVG: React.FC<HumanBodySVGProps> = ({ 
  onSelectPart, 
  selectedPart 
}) => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [hoveredOrgan, setHoveredOrgan] = useState<string | null>(null);
  const [activeOrgan, setActiveOrgan] = useState<string | null>(null);

  const handlePartClick = (partId: string) => {
    setActiveOrgan(partId);
    if (onSelectPart) {
      onSelectPart(partId);
    }
    // Small delay for animation before navigation
    setTimeout(() => {
      navigate(`/body/${partId}`);
    }, 300);
  };

  const getOrganName = (id: string) => t.bodyParts[id as keyof typeof t.bodyParts] || id;
  const getOrganDescription = (id: string) => t.organDescriptions[id as keyof typeof t.organDescriptions] || '';

  const currentOrganId = hoveredOrgan || activeOrgan;
  const currentOrgan = organs.find(o => o.id === currentOrganId);

  const systemNames = [t.systems.nervous, t.systems.circulatory, t.systems.respiratory, t.systems.digestive];

  return (
    <div className="body-explorer">
      {/* Header */}
      <div className="explorer-header">
        <div className="header-decoration left">
          <div className="dna-strand">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="dna-node" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>
        <div className="header-content">
          <span className="header-badge">{t.home.interactive}</span>
          <h2 className="explorer-title">{t.home.explorerTitle}</h2>
          <p className="explorer-subtitle">{t.home.explorerSubtitle}</p>
        </div>
        <div className="header-decoration right">
          <div className="dna-strand">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="dna-node" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>
      </div>

      {/* Main Body Display */}
      <div className="body-display">
        {/* Left Info Panel */}
        <div className="info-panel left-panel">
          <div className="panel-header">
            <span className="panel-icon">📊</span>
            <span>{t.home.bodySystems}</span>
          </div>
          <div className="system-list">
            {systemNames.map((system, i) => (
              <div key={system} className="system-item" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="system-dot" />
                <span>{system}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Central Body */}
        <div className="body-center">
          <div className="body-frame">
            {/* Scanning effect */}
            <div className="scan-line" />
            
            {/* Grid overlay */}
            <div className="grid-overlay" />
            
            {/* Corner brackets */}
            <div className="corner-bracket top-left" />
            <div className="corner-bracket top-right" />
            <div className="corner-bracket bottom-left" />
            <div className="corner-bracket bottom-right" />

            {/* Anatomical Body SVG */}
            <svg viewBox="0 0 200 440" className="anatomy-svg">
              <defs>
                <linearGradient id="bodyFill" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1a3a5c" />
                  <stop offset="50%" stopColor="#0f2a4a" />
                  <stop offset="100%" stopColor="#0a1a30" />
                </linearGradient>
                <linearGradient id="glowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00d4aa" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00d4aa" stopOpacity="0" />
                </linearGradient>
                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="strongGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Human Body Outline - Anatomical Style */}
              <g className="body-anatomy" filter="url(#softGlow)">
                {/* Head */}
                <ellipse cx="100" cy="38" rx="32" ry="36" 
                  fill="url(#bodyFill)" 
                  stroke="#00d4aa" 
                  strokeWidth="1.5"
                  className="body-segment"
                />
                {/* Face details */}
                <ellipse cx="100" cy="42" rx="22" ry="24" 
                  fill="none" 
                  stroke="#00d4aa" 
                  strokeWidth="0.5"
                  strokeDasharray="2 4"
                  opacity="0.4"
                />
                
                {/* Neck */}
                <path d="M88 72 L88 90 Q88 95 92 98 L108 98 Q112 95 112 90 L112 72"
                  fill="url(#bodyFill)"
                  stroke="#00d4aa"
                  strokeWidth="1"
                  className="body-segment"
                />
                
                {/* Shoulders & Torso */}
                <path d="M45 100 
                  Q30 105 25 125 L20 165 Q18 175 22 185 L25 200 
                  Q28 210 35 215 L45 220 
                  L45 285 Q45 295 55 300 L65 305
                  L65 380 Q65 390 70 395 L75 400 L90 400 Q95 398 95 390 L95 305
                  L105 305
                  L105 390 Q105 398 110 400 L125 400 Q130 395 135 390 L135 305
                  L145 300 Q155 295 155 285 L155 220
                  L165 215 Q172 210 175 200 L178 185 Q182 175 180 165 L175 125 
                  Q170 105 155 100
                  L112 98 L88 98 Z"
                  fill="url(#bodyFill)"
                  stroke="#00d4aa"
                  strokeWidth="1.5"
                  className="body-segment"
                />

                {/* Internal organ outlines */}
                <g className="internal-organs" opacity="0.6">
                  {/* Brain area */}
                  <ellipse cx="100" cy="35" rx="18" ry="16" 
                    fill="none" stroke="#ff6bb6" strokeWidth="1" strokeDasharray="3 3"/>
                  
                  {/* Heart */}
                  <path d="M95 135 Q85 125 85 140 Q85 155 100 170 Q115 155 115 140 Q115 125 105 135 Q100 130 95 135"
                    fill="none" stroke="#ff4757" strokeWidth="1" strokeDasharray="3 3"/>
                  
                  {/* Lungs */}
                  <ellipse cx="75" cy="150" rx="18" ry="30" 
                    fill="none" stroke="#00d4aa" strokeWidth="1" strokeDasharray="3 3"/>
                  <ellipse cx="125" cy="150" rx="18" ry="30" 
                    fill="none" stroke="#00d4aa" strokeWidth="1" strokeDasharray="3 3"/>
                  
                  {/* Liver */}
                  <ellipse cx="120" cy="195" rx="25" ry="15" 
                    fill="none" stroke="#daa520" strokeWidth="1" strokeDasharray="3 3"/>
                  
                  {/* Stomach */}
                  <ellipse cx="85" cy="200" rx="18" ry="14" 
                    fill="none" stroke="#ffa559" strokeWidth="1" strokeDasharray="3 3"/>
                  
                  {/* Kidneys */}
                  <ellipse cx="70" cy="220" rx="10" ry="14" 
                    fill="none" stroke="#845ef7" strokeWidth="1" strokeDasharray="3 3"/>
                  <ellipse cx="130" cy="220" rx="10" ry="14" 
                    fill="none" stroke="#845ef7" strokeWidth="1" strokeDasharray="3 3"/>
                  
                  {/* Intestines */}
                  <ellipse cx="100" cy="255" rx="30" ry="20" 
                    fill="none" stroke="#ffb74d" strokeWidth="1" strokeDasharray="3 3"/>
                </g>

                {/* Skeletal hints */}
                <g className="skeleton-hints" opacity="0.3">
                  <line x1="100" y1="98" x2="100" y2="300" stroke="#e0e0ff" strokeWidth="2"/>
                  <line x1="65" y1="305" x2="65" y2="395" stroke="#e0e0ff" strokeWidth="1.5"/>
                  <line x1="135" y1="305" x2="135" y2="395" stroke="#e0e0ff" strokeWidth="1.5"/>
                </g>
              </g>

              {/* Circulatory system hint */}
              <g className="circulatory-system" opacity="0.4">
                <path d="M100 170 L100 300" stroke="#ff4757" strokeWidth="1.5" strokeDasharray="5 5"/>
                <path d="M100 170 L75 150" stroke="#ff4757" strokeWidth="1" strokeDasharray="3 3"/>
                <path d="M100 170 L125 150" stroke="#ff4757" strokeWidth="1" strokeDasharray="3 3"/>
              </g>
            </svg>

            {/* Interactive Hotspots */}
            <div className="organ-markers">
              {organs.map((organ) => (
                <button
                  key={organ.id}
                  className={`organ-marker ${selectedPart === organ.id ? 'selected' : ''} ${hoveredOrgan === organ.id ? 'hovered' : ''} ${activeOrgan === organ.id ? 'active' : ''}`}
                  style={{
                    left: `${organ.position.x}%`,
                    top: `${organ.position.y}%`,
                    '--marker-color': organ.color,
                  } as React.CSSProperties}
                  onClick={() => handlePartClick(organ.id)}
                  onMouseEnter={() => setHoveredOrgan(organ.id)}
                  onMouseLeave={() => setHoveredOrgan(null)}
                  aria-label={`${language === 'al' ? 'Eksploro' : 'Explore the'} ${getOrganName(organ.id)}`}
                >
                  <span className="marker-ring ring-1" />
                  <span className="marker-ring ring-2" />
                  <span className="marker-ring ring-3" />
                  <span className="marker-core" />
                  <span className="marker-icon">{organ.icon}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Info Display - Always visible */}
          <div className="organ-info-display visible">
            <span className="info-icon">{currentOrgan ? currentOrgan.icon : '🔍'}</span>
            <div className="info-content">
              <h4>{currentOrganId ? getOrganName(currentOrganId) : (language === 'al' ? 'Zgjidh një Organ' : 'Select an Organ')}</h4>
              <p>{currentOrganId ? getOrganDescription(currentOrganId) : (language === 'al' ? 'Vendos kursorin ose kliko mbi çdo organ për të mësuar më shumë' : 'Hover or click on any organ to learn more')}</p>
            </div>
            <span className="info-arrow">→</span>
          </div>
        </div>

        {/* Right Info Panel */}
        <div className="info-panel right-panel">
          <div className="panel-header">
            <span className="panel-icon">🔬</span>
            <span>{t.home.quickStats}</span>
          </div>
          <div className="fact-list">
            <div className="fact-item">
              <span className="fact-number">206</span>
              <span className="fact-label">{language === 'al' ? 'Kocka' : 'Bones'}</span>
            </div>
            <div className="fact-item">
              <span className="fact-number">78</span>
              <span className="fact-label">{t.home.organs}</span>
            </div>
            <div className="fact-item">
              <span className="fact-number">600+</span>
              <span className="fact-label">{language === 'al' ? 'Muskuj' : 'Muscles'}</span>
            </div>
            <div className="fact-item">
              <span className="fact-number">60K</span>
              <span className="fact-label">{language === 'al' ? 'Milja enësh' : 'Miles of vessels'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Organ Selection Cards */}
      <div className="organ-cards-section">
        <div className="cards-header">
          <h3>{language === 'al' ? 'Zgjidh një Organ për të Eksploruar' : 'Select an Organ to Explore'}</h3>
          <div className="cards-decoration" />
        </div>
        <div className="organ-cards-grid">
          {organs.map((organ, index) => (
            <button
              key={organ.id}
              className={`organ-explore-card ${selectedPart === organ.id ? 'selected' : ''}`}
              onClick={() => handlePartClick(organ.id)}
              onMouseEnter={() => setHoveredOrgan(organ.id)}
              onMouseLeave={() => setHoveredOrgan(null)}
              style={{ 
                '--card-color': organ.color,
                '--card-delay': `${index * 0.05}s`
              } as React.CSSProperties}
            >
              <div className="card-glow" />
              <span className="card-icon">{organ.icon}</span>
              <span className="card-name">{getOrganName(organ.id)}</span>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="explorer-footer">
        <div className="pulse-indicator">
          <span className="pulse-dot" />
          <span className="pulse-text">{language === 'al' ? 'Modaliteti Interaktiv Aktiv' : 'Interactive Mode Active'}</span>
        </div>
      </div>
    </div>
  );
};

export default HumanBodySVG;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HumanBodySVG.css';

interface HumanBodySVGProps {
  onSelectPart?: (partId: string) => void;
  selectedPart?: string;
}

/**
 * Interactive SVG Human Body Component
 * Allows users to click on different body parts to learn about them
 */
export const HumanBodySVG: React.FC<HumanBodySVGProps> = ({ 
  onSelectPart, 
  selectedPart 
}) => {
  const navigate = useNavigate();

  const handlePartClick = (partId: string) => {
    if (onSelectPart) {
      onSelectPart(partId);
    }
    navigate(`/body/${partId}`);
  };

  const getPartClass = (partId: string) => {
    return `body-part ${selectedPart === partId ? 'selected' : ''}`;
  };

  return (
    <div className="human-body-container">
      <svg
        viewBox="0 0 400 600"
        className="human-body-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Body outline */}
        <g className="body-outline">
          {/* Head */}
          <ellipse cx="200" cy="60" rx="45" ry="55" fill="#f5d0c5" stroke="#333" strokeWidth="2" />
          
          {/* Neck */}
          <rect x="185" y="110" width="30" height="30" fill="#f5d0c5" stroke="#333" strokeWidth="2" />
          
          {/* Torso */}
          <path
            d="M130 140 L270 140 L280 350 L120 350 Z"
            fill="#e8c4b8"
            stroke="#333"
            strokeWidth="2"
          />
          
          {/* Arms */}
          <path
            d="M130 145 L80 180 L60 280 L75 285 L100 200 L130 180"
            fill="#f5d0c5"
            stroke="#333"
            strokeWidth="2"
          />
          <path
            d="M270 145 L320 180 L340 280 L325 285 L300 200 L270 180"
            fill="#f5d0c5"
            stroke="#333"
            strokeWidth="2"
          />
          
          {/* Legs */}
          <path
            d="M140 350 L130 500 L120 580 L160 580 L165 500 L175 380"
            fill="#f5d0c5"
            stroke="#333"
            strokeWidth="2"
          />
          <path
            d="M260 350 L270 500 L280 580 L240 580 L235 500 L225 380"
            fill="#f5d0c5"
            stroke="#333"
            strokeWidth="2"
          />
        </g>

        {/* Interactive organs */}
        <g className="organs">
          {/* Brain */}
          <ellipse
            id="brain"
            cx="200"
            cy="50"
            rx="35"
            ry="30"
            className={getPartClass('brain')}
            onClick={() => handlePartClick('brain')}
          />
          <text x="200" y="55" className="organ-label" pointerEvents="none">
            Brain
          </text>

          {/* Heart */}
          <path
            id="heart"
            d="M185 180 C170 165 150 175 150 195 C150 220 185 240 200 255 C215 240 250 220 250 195 C250 175 230 165 215 180 C205 170 195 170 185 180"
            className={getPartClass('heart')}
            onClick={() => handlePartClick('heart')}
            transform="scale(0.7) translate(90, 70)"
          />
          <text x="200" y="200" className="organ-label" pointerEvents="none">
            Heart
          </text>

          {/* Lungs */}
          <ellipse
            id="lungs-left"
            cx="160"
            cy="200"
            rx="25"
            ry="45"
            className={getPartClass('lungs')}
            onClick={() => handlePartClick('lungs')}
          />
          <ellipse
            id="lungs-right"
            cx="240"
            cy="200"
            rx="25"
            ry="45"
            className={getPartClass('lungs')}
            onClick={() => handlePartClick('lungs')}
          />
          <text x="160" y="205" className="organ-label small" pointerEvents="none">
            Lung
          </text>
          <text x="240" y="205" className="organ-label small" pointerEvents="none">
            Lung
          </text>

          {/* Liver */}
          <ellipse
            id="liver"
            cx="230"
            cy="270"
            rx="35"
            ry="20"
            className={getPartClass('liver')}
            onClick={() => handlePartClick('liver')}
          />
          <text x="230" y="275" className="organ-label" pointerEvents="none">
            Liver
          </text>

          {/* Stomach */}
          <ellipse
            id="stomach"
            cx="175"
            cy="285"
            rx="25"
            ry="20"
            className={getPartClass('stomach')}
            onClick={() => handlePartClick('stomach')}
          />
          <text x="175" y="290" className="organ-label small" pointerEvents="none">
            Stomach
          </text>

          {/* Kidneys */}
          <ellipse
            id="kidney-left"
            cx="155"
            cy="310"
            rx="15"
            ry="20"
            className={getPartClass('kidneys')}
            onClick={() => handlePartClick('kidneys')}
          />
          <ellipse
            id="kidney-right"
            cx="245"
            cy="310"
            rx="15"
            ry="20"
            className={getPartClass('kidneys')}
            onClick={() => handlePartClick('kidneys')}
          />

          {/* Intestines */}
          <ellipse
            id="intestines"
            cx="200"
            cy="340"
            rx="40"
            ry="25"
            className={getPartClass('intestines')}
            onClick={() => handlePartClick('intestines')}
          />
          <text x="200" y="345" className="organ-label small" pointerEvents="none">
            Intestines
          </text>

          {/* Skeleton indicator (on the side) */}
          <rect
            id="skeleton"
            x="300"
            y="250"
            width="60"
            height="80"
            rx="5"
            className={getPartClass('skeleton')}
            onClick={() => handlePartClick('skeleton')}
          />
          <text x="330" y="285" className="organ-label small" pointerEvents="none">
            Skeleton
          </text>
          <text x="330" y="300" className="organ-label tiny" pointerEvents="none">
            (bones)
          </text>
        </g>
      </svg>

      <div className="body-legend">
        <p>👆 Click on any organ to learn more!</p>
      </div>
    </div>
  );
};

export default HumanBodySVG;

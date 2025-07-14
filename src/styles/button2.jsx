import React from 'react';
import styled, { css } from 'styled-components';

const COLORS = {
  start: {
    bg: "#16a34a",
    hover: "#15803d",
  },
  pause: {
    bg: "#dc2626",
    hover: "#b91c1c",
  },
  reset: {
    bg: "#970505ff",
    hover: "#970505ff",
  },
  lap: {
    bg: "#7c3aed",
    hover: "#6d28d9",
  },
  showlap: {
    bg: "#7c3aed",
    hover: "#6d28d9",
  },
  settings: {
    bg: "#474647ff",
    hover: "#474647ff",
  },
  export: {
    bg: "#0e0079ff",
    hover: "#0e0079ff",
  }

};

const AnimatedButton = ({ label, onClick, variant = "start" }) => {
  return (
    <StyledWrapper $variant={variant}>
      <button onClick={onClick}>
        <span>{label}</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  ${({ $variant }) => {
    const color = COLORS[$variant] || COLORS.start;
    return css`
      button {
        outline: none;
        border: none;
        width: 140px;
        height: 50px;
        border-radius: 8px;
        background-color: ${color.bg};
        color: white;
        font-size: 17px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 0.625em 1em 0 rgba(0, 0, 0, 0.25);
      }

      button:hover {
        transform: scale(1.05);
        background-color: ${color.hover};
      }

      button:active {
        transform: scale(0.95);
      }

      span {
        display: inline-block;
      }
    `;
  }}
`;

export default AnimatedButton;

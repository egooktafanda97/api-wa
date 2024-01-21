import React from 'react';
import './Hougles.scss';
export default function Hougles() {
  return (
    <div className="hourglassBackground">
      <div className="hourglassContainer">
        <div className="hourglassCurves" />
        <div className="hourglassCapTop" />
        <div className="hourglassGlassTop" />
        <div className="hourglassSand" />
        <div className="hourglassSandStream" />
        <div className="hourglassCapBottom" />
        <div className="hourglassGlass" />
      </div>
    </div>
  );
}

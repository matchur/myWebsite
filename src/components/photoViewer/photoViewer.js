import React from 'react';
import './photoViewer.css';

function PhotoViewer() {
  return (
    <div className="Photo-viewer">
      <div className="card-swiper">
        <div className="card-groups">
          <div className="card-group" data-index="0" data-status="active">
            <div className="little-card card" />
            <div className="big-card card" />
            <div className="little-card card" />
            <div className="big-card card" />
            <div className="little-card card" />
            <div className="big-card card" />
            <div className="little-card card" />
            <div className="big-card card" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoViewer;

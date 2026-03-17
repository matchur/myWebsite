import React from 'react';

function ImageViewerWindow({ image }) {
  if (!image) {
    return <p>Imagem não encontrada.</p>;
  }

  return (
    <div className="window-section image-viewer95">
      <h2>{image.name}</h2>
      <img src={image.file} alt={image.name} className="image-viewer95__img" />
    </div>
  );
}

export default ImageViewerWindow;

import { useState } from 'react';

interface VideoCardProps {
  id: string;
  title: string;
  link: string;
  description: string;
}

export function VideoCard({ id, title, link, description }: VideoCardProps) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div 
      className="video" 
      onMouseEnter={() => setShowVideo(true)}
      onMouseLeave={() => setShowVideo(false)}
      onDoubleClick={() => window.open(link, '_blank')}
    >
      {showVideo ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <img
          src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
          alt={title}
        />
      )}
      <div className="info">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
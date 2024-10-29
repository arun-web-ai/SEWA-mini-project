interface InstagramReelProps {
  title: string;
  link: string;
  image: string;
  description: string;
}

export function InstagramReel({ title, link, image, description }: InstagramReelProps) {
  return (
    <div className="insta-reel">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} />
      </a>
      <div className="title-box">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}
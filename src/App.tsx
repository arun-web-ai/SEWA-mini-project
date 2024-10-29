import { useState } from 'react';
import { VideoCard } from './components/VideoCard';
import { InstagramReel } from './components/InstagramReel';
import { SearchBar } from './components/SearchBar';
import { videos } from './data/videos';
import { reels } from './data/reels';
import { GraduationCap } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVideos = videos.filter(
    video => 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredReels = reels.filter(
    reel => 
      reel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reel.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <h1 className="flex items-center justify-center gap-3">
        <GraduationCap className="w-10 h-10" />
        CRCE Video Collection
      </h1>

      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map(video => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>

      <h2 className="section-title">CRCE Reels</h2>
      <div className="insta-reel-container">
        {filteredReels.map((reel, index) => (
          <InstagramReel key={index} {...reel} />
        ))}
      </div>
    </div>
  );
}

export default App;
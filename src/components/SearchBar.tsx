interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search videos or reels..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
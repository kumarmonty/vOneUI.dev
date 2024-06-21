import { useState } from 'react';
import Card from './ui/cards';

const PreviewScreen = ({ html_code }: { html_code: string }) => {
  const [setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState<string | null>(null);
  const cardsData = [
    { title: 'Linux Terminal', description: 'I want you to act as a linux terminal...' },
    { title: '`position` Interviewer', description: 'I want you to act as an interviewer...' },
    { title: 'JavaScript Console', description: 'I want you to act as a JavaScript console...' },
    { title: 'Excel Sheet', description: 'I want you to act as a text-based excel...' },
    { title: 'Product Manager', description: 'Please acknowledge my following request...' },
    { title: 'Travel Guide', description: 'I want you to act as a travel guide...' },
    { title: 'Historian', description: 'I want you to act as a historian...' },
    { title: 'Astrologer', description: 'I want you to act as an astrologer...' },
    { title: 'Astrologer', description: 'I want you to act as an astrologer...' },
    { title: 'Astrologer', description: 'I want you to act as an astrologer...' },
    { title: 'Astrologer', description: 'I want you to act as an astrologer...' },
    { title: 'Astrologer', description: 'I want you to act as an astrologer...' },
    { title: 'Astrologer', description: 'I want you to act as an astrologer...' },
    { title: 'Astrologer', description: 'I want you to act as an astrologer...' },
    { title: 'Astrologer', description: 'I want you to act as an astrologer...' },
    { title: 'Astrologer', description: 'I want you to act as an astrologer...' },
    { title: 'Astrologer', description: 'I want you to act as an astrologer...' },
    { title: 'Astrologer', description: 'I want you to act as an astrologer...' },
    { title: 'Astrologer', description: 'I want you to act as an astrologer...' },
    { title: 'Astrologer', description: 'I want you to act as an astrologer...' },
    { title: 'Astrologer', description: 'I want you to act as an astrologer...' },
    { title: 'Astrologer', description: 'I want you to act as an astrologer...' },
    { title: 'Astrologer', description: 'I want you to act as an astrologer...' },
    { title: 'Astrologer', description: 'I want you to act as an astrologer...' },
    { title: 'Astrologer', description: 'I want you to act as an astrologer...' },
  ];
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: e.target.value }),
      });
      const data = await response.json();
      setSearchResults(data.result); // Adjust based on actual API response structure
    } else {
      setSearchResults(null);
    }
  };
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg p-4 relative">
      {searchResults ? (
        <div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            {searchResults}
          </div>
        </div>
      ) : (
        <div className="h-[75vh] overflow-y-auto pr-4">
           <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
        </div>
      )}
    </div>
  );
};

export default PreviewScreen;

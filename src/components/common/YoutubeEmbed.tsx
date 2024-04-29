import { useState } from 'react';

// videoId, title, ButtonDescription
const YouTubeModal = ({ videoId, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        // className="card-title font-bold text-2xl uppercase text-accent dark:text-white hover:-translate-y-2 ease-in-out duration-100"
        onClick={openModal}
      >
        {children}
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 h-full flex items-center justify-center z-50 bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div className="relative w-11/12 max-w-6xl h-auto">
            <div className="bg-white p-6">
              <div className="aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube Embed Video"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YouTubeModal;

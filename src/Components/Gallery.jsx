import React, { useState } from 'react';
import Modal from 'react-modal';

// Import images from your assets folder
import profile1 from "../assets/gallery/1.jpeg";
import profile2 from "../assets/gallery/2.jpeg";
import profile3 from "../assets/gallery/3.jpeg";
import profile4 from "../assets/gallery/4.jpeg";
import profile5 from "../assets/gallery/5.jpeg";
import profile6 from "../assets/gallery/6.jpeg";
import profile7 from "../assets/gallery/7.jpeg";
import profile8 from "../assets/gallery/8.jpeg";
import profile9 from "../assets/gallery/9.jpeg";
import profile10 from "../assets/gallery/10.jpeg";
import profile11 from "../assets/gallery/11.jpeg";
import profile12 from "../assets/gallery/12.jpeg";
import profile13 from "../assets/gallery/13.jpeg";
import profile14 from "../assets/gallery/14.jpeg";
import profile15 from "../assets/gallery/15.jpeg";
import profile16 from "../assets/gallery/16.jpeg";

// Ensure the modal works with accessibility
Modal.setAppElement('#root');

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  // Images array with imported images
  const images = [
    profile1,
    profile2,
    profile3,
    profile12,
    profile15,
    profile6,
    profile7,
    profile8,
    profile9,
    profile10,
    profile11,
    profile4,
    profile13,
    profile16,
    profile5,
    profile14
  ];

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='container mx-auto mt-10   pl-4'>
      <div className="grid lg:grid-cols-4 gap-4 p-4  md:grid-cols-3 sm:grid-cols-2 ">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover cursor-pointer rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105"
              onClick={() => openModal(image)}
            />
          </div>
        ))}
      </div>

      {/* Modal for Enlarged Image */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto mx-auto p-4 bg-white rounded-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <button
          className="absolute top-2 right-2 text-white text-2xl"
          onClick={closeModal}
        >
          ×
        </button>
        <img
          src={modalImage}
          alt="Enlarged"
          className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
        />
      </Modal>
    </div>
  );
};

export default Gallery;

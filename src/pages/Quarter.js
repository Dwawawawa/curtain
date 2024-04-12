import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from './data.js'; 

function Quater() {
    const navigate = useNavigate();
    const [currentRound, setCurrentRound] = useState(0);
    const [selectedImages, setSelectedImages] = useState([]);
    const totalRounds = Math.ceil(data.length / 4);

    const handleSelectImage = (image) => {
        setSelectedImages(prevSelectedImages => [...prevSelectedImages, image]);
        if (currentRound < totalRounds - 1) {
            setCurrentRound(currentRound + 1);
        } else {
            navigate('/choose', { state: { selectedImages } });
        }
    };

    const roundImages = data.slice(currentRound * 4, (currentRound + 1) * 4);

    return (
        <div>
            <h2>Round {currentRound + 1}/{totalRounds}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                {roundImages.map((image) => (
                    <div key={image.id} onClick={() => handleSelectImage(image)}>
                        <img src={image.src} alt={`Option ${image.id}`} style={{ width: '100%', height: 'auto' }} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Quater;
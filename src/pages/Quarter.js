import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col ,Navbar} from 'react-bootstrap';
import data from './data.js'; 

function Quater() {
    const navigate = useNavigate();
    const [currentRound, setCurrentRound] = useState(0);
    const [selectedImages, setSelectedImages] = useState([]);
    const totalRounds = Math.ceil(data.length / 4);

    const handleSelectImage = (image) => {
        setSelectedImages(prevSelectedImages => {
            const newSelectedImages = [...prevSelectedImages, image];
            if (currentRound < totalRounds - 1) {
                setCurrentRound(currentRound + 1);
            } else {
                // 상태 업데이트 함수 내부에서 navigate 호출
                navigate('/choose', { state: { selectedImages: newSelectedImages } });
            }
            return newSelectedImages;
        });
    };
    

    const roundImages = data.slice(currentRound * 4, (currentRound + 1) * 4);

    return (
        <div>
            <Navbar className="bg-body-tertiary" >
                <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor: '#ff4d4d'}}>
                    <Navbar.Brand style={{color: 'white' }}>Round {currentRound + 1}/{totalRounds}</Navbar.Brand>
                </Container>
            </Navbar>

            <Container fluid="md" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                {roundImages.map((image) => (
                    <Row>
                        <Col key={image.id} onClick={() => handleSelectImage(image)}>
                            <img src={image.src} alt={`Option ${image.id}`} style={{ width: '100%', height: 'auto' }} />
                        </Col>
                    </Row>
                ))}
                
                
            </Container>


        </div>
    );
}

export default Quater;
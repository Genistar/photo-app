import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import "./RandomPhoto.scss"

RandomPhoto.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    onImageChangeUrl: PropTypes.func,
    onRandomButtonBlur: PropTypes.func
};
RandomPhoto.defaultProps = {
    name: '',
    imageUrl: '',
    onImageChangeUrl: null,
    onRandomButtonBlur: null
}
const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000)
    return `https://picsum.photos/id/${randomId}/300/300`
}
function RandomPhoto(props) {
    const { name, imageUrl, onImageChangeUrl, onRandomButtonBlur } = props;
    const handleRandomPhotoClick = async () => {
        if (onImageChangeUrl) {
            const randomImageUrl = getRandomImageUrl();
            onImageChangeUrl(randomImageUrl)
        }
    }
    return (
        <div className="random-photo">
            <div className="random-photo__button">
                <Button
                    type='button'
                    name={name}
                    outline
                    color='primary'
                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhotoClick}
                >Random a photo</Button>
            </div>
            <div className="random-photo__photo">
                {imageUrl && <img src={imageUrl} alt="Ooops ... not found. Please click random again!" />}
            </div>
        </div>
    );
}

export default RandomPhoto;
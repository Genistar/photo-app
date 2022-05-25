import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import './PhotoCard.scss'

PhotoCard.propTypes = {
    photo: PropTypes.object,
    onRemovePhoto: PropTypes.func,
    onEditPhoto: PropTypes.func
};

PhotoCard.defaultProps = {
    photo: {},
    onRemovePhoto: null,
    onEditPhoto: null
}

function PhotoCard(props) {
    const { photo, onRemovePhoto, onEditPhoto } = props;
    const onHandleRemove = () => {
        if (onRemovePhoto) onRemovePhoto(photo)
    }
    const onHandleEdit = () => {
        if (onEditPhoto) onEditPhoto(photo)
    }
    return (
        <div className='photo'>
            <img src={photo.photo} alt={photo.title} />
            <div className='photo__overlay'>
                <h3 className='photo__title'>{photo.title}</h3>
                <div className='photo__actions'>
                    <div>
                        <Button outline size='sm' color='light' onClick={onHandleEdit}>Edit</Button>
                    </div>
                    <div>
                        <Button outline size='sm' color='light' onClick={onHandleRemove}>Remove</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoCard;
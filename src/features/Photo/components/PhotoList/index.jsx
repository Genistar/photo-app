import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import PhotoCard from '../PhotoCard';

PhotoList.propTypes = {
    photoList: PropTypes.array,
    onRemovePhoto: PropTypes.func,
    onEditPhoto: PropTypes.func,
};

PhotoList.defaultProps = {
    photoList: [],
    onRemovePhoto: null,
    onEditPhoto: null
}

function PhotoList(props) {
    const { photoList, onRemovePhoto, onEditPhoto } = props
    const list = photoList.map(photo => (
        <Col key={photo.title} xs="12" md="6" lg="3">
            <PhotoCard
                photo={photo}
                onRemovePhoto={onRemovePhoto}
                onEditPhoto={onEditPhoto}
            />
        </Col>
    ))
    return (
        <Row>
            {list}
        </Row>
    );
}

export default PhotoList;
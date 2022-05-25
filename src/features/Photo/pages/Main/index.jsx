import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Banner from 'components/Banner';
import Images from 'constants/images';
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';
import { onRemove } from 'features/Photo/photoSlice';
import { useHistory } from 'react-router-dom';

MainPage.propTypes = {
};

function MainPage(props) {
    const photos = useSelector(state => state.photos);
    const dispatch = useDispatch();
    console.log('List of photo : ', photos);
    const history = useHistory();
    const onRemovePhoto = (photo) => {
        const action = onRemove(photo.id);
        dispatch(action)
        console.log('Remove', photo.id)
    }
    const onEditPhoto = (photo) => {
        const editPhotoUrl = `/photos/${photo.id}`;
        history.push(editPhotoUrl)
    }
    return (
        <div className='photo-main'>
            <Banner title='Your awsome photos' images={Images.PINK_BG} />
            <Container className='text-center'>
                <Link to="/photos/add">Add new photo</Link>
            </Container>
            <PhotoList photoList={photos} onRemovePhoto={onRemovePhoto} onEditPhoto={onEditPhoto} />
        </div>
    );
}

export default MainPage;
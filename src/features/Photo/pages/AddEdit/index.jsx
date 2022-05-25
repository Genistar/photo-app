import React from 'react';
import PropTypes from 'prop-types';
import './AddEdit.scss'
import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, onEdit } from 'features/Photo/photoSlice';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { randomNumber } from 'utils/common';

AddEditPage.propTypes = {

};

function AddEditPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();
    const editPhoto = useSelector(state => state.photos.find(x => x.id === +photoId))
    const addPhoto = !photoId;
    console.log({ photoId })
    const initialValues = addPhoto ? {
        title: '',
        categoryId: null,
        photo: ''
    } : editPhoto
    const handleSubmitPhoto = (values) => {
        return new Promise(resolve => {
            console.log('Form Submit: ', values);

            setTimeout(() => {
                if (addPhoto) {
                    const newPhoto = {
                        ...values,
                        id: randomNumber(10000, 99999)
                    }
                    const action = addPhoto(values);
                    console.log({ action });
                    dispatch(action);
                }
                else {
                    const action = onEdit(values);
                    dispatch(action)
                }

                history.push('/photos');
                resolve(true)
            }, 2000)
        })


    }
    return (
        <div className='photo-edit'>
            <Banner title='Chose your amazing photo' />
            <div className='photo-edit__form'>
                <PhotoForm onSubmit={handleSubmitPhoto} initialValues={initialValues} onAddPhoto={addPhoto} />
            </div>
        </div>
    );
}

export default AddEditPage;
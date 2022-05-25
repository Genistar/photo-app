import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, Button, Spinner } from 'reactstrap';
import Select from 'react-select';
import Images from 'constants/images.js';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import { Formik, Form, FastField } from 'formik';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import * as Yup from 'yup';

PhotoForm.propTypes = {
    onSubmit: PropTypes.func
};
PhotoForm.defaultProps = {
    onSubmit: null
}
function PhotoForm(props) {
    const { initialValues } = props
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('title is required'),
        categoryId: Yup.number().required('CategoryId is required').nullable(),
        photo: Yup.string().when('categoryId', {
            is: 1,
            then: Yup.string().required('photo is required'),
            otherwise: Yup.string().notRequired()
        })
    })
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={props.onSubmit}
            validationSchema={validationSchema}
        >
            {formikProps => {
                const { values, errors, touched, isSubmitting, onAddPhoto } = formikProps;
                console.log({ values, errors, touched })
                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}
                            label="title"
                            placeholder='Eg : Wow natural'
                        />
                        <FastField
                            name="categoryId"
                            component={SelectField}

                            label="Category"
                            placeholder="What's your photo category?"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />
                        <FastField
                            name="photo"
                            component={RandomPhotoField}
                            label="Photo"
                            onErrors={RandomPhotoField}
                        />
                        <FormGroup>
                            <Button type='submit' color={onAddPhoto ? 'primary' : 'success'} >
                                {isSubmitting && <Spinner size='sm' />}
                                {onAddPhoto ? 'Add to album' : 'Update Photo'}</Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    );
}

export default PhotoForm;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import appRoutes from '../constants/appRoutes';
import { setBreadCrumb } from '../data/actions/uiActions';
export default () => {

  const dispatch = useDispatch();
  const history = useHistory()
  const selectedLocation = useSelector(state => state.location.selectedLocation);

  useEffect(() => {
    dispatch(setBreadCrumb([
      { text: 'Home', to: appRoutes.ROOT }
    ]))
  }, [])

  useEffect(() => {
    if (selectedLocation.location)
      history.push(`${appRoutes.CATEGORIES}/${selectedLocation.location}/${selectedLocation.branch}`)
  }, [selectedLocation])

  return (
    !selectedLocation && (
      <>
        <h1>Welcome to Rental Management System by CrownStack..!</h1>
        <h3>Please select Location</h3>
      </>
    )
  )
}
import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import CategoryItem from '../components/categories/CategoryItem';
import appRoutes from '../constants/appRoutes';
import { setBreadCrumb } from '../data/actions/uiActions';
import { getCatgeoriesFromLocationList } from '../util/utils';
export default () => {

  const dispatch = useDispatch()
  const { subcategory, selectedLocation, selectedBranch } = useParams();
  const locationList = useSelector(state => state.location.locationList);

  const categories = getCatgeoriesFromLocationList(locationList, selectedLocation, selectedBranch)
  const subcategories = categories.find(item => item.name === subcategory).subcategories

  useEffect(() => {
    dispatch(setBreadCrumb([
      { text: 'Home', to: appRoutes.ROOT },
      { text: `${selectedLocation} / ${selectedBranch}`, to: `${appRoutes.CATEGORIES}/${selectedLocation}/${selectedBranch}` },
      { text: subcategory, to: `${appRoutes.CATEGORIES}/${subcategory}/${selectedLocation}/${selectedBranch}` }
    ]))
  }, [])
  return (
    <>
      <h1>Sub Categories</h1>
      <Grid container spacing={1}>
        {subcategories.map(category => (
          <Grid item xs={6} sm={4} md={3} lg={3} key={category.name}>
            <CategoryItem
              name={category.name}
              image={category.image ? `subcategory/${category.image}` : null}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
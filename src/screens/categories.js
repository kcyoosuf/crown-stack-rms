import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import CategoryItem from '../components/categories/CategoryItem';
import appRoutes from '../constants/appRoutes';
import { setBreadCrumb } from '../data/actions/uiActions';
import { getCatgeoriesFromLocationList } from '../util/utils';
export default () => {

  const history = useHistory();
  const dispatch = useDispatch()
  const { selectedLocation, selectedBranch } = useParams();
  const locationList = useSelector(state => state.location.locationList);
  const categories = getCatgeoriesFromLocationList(locationList, selectedLocation, selectedBranch)

  const onCategoryClick = subcategory => {
    history.push(`${appRoutes.CATEGORIES}/${subcategory}/${selectedLocation}/${selectedBranch}`)
  }

  useEffect(() => {
    dispatch(setBreadCrumb([
      { text: 'Home', to: appRoutes.ROOT },
      { text: `${selectedLocation} / ${selectedBranch}`, to: `${appRoutes.CATEGORIES}/${selectedLocation}/${selectedBranch}` }
    ]))
  }, [])

  return (
    <>
      <h1>Categories</h1>
      <Grid container spacing={1}>
        {categories.map(category => (
          <Grid item xs={6} sm={4} md={3} lg={3} key={category.name}>
            <CategoryItem
              name={category.name}
              image={category.image}
              onClick={() => onCategoryClick(category.name)}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
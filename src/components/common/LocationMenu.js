import React, { useEffect } from "react";
import { Menu, MenuItem } from "@material-ui/core";
import NestedMenuItem from "material-ui-nested-menu-item";
import { useDispatch, useSelector } from "react-redux";
import { getLocationList, setLocation } from "../../data/actions/locationActions";
import { useHistory } from "react-router";
import appRoutes from "../../constants/appRoutes";

export const LocationMenu = ({ menuPosition, setMenuPosition }) => {

  const dispatch = useDispatch();
  const history = useHistory()
  const locationList = useSelector(state => state.location.locationList)

  const handleItemClick = (location) => {
    history.push(`${appRoutes.CATEGORIES}/${location.location}/${location.branch}`)
    dispatch(setLocation(location))
    setMenuPosition(null);
  };

  useEffect(() => {
    dispatch(getLocationList())
  }, [dispatch])

  return (
    <div>
      <Menu
        open={!!menuPosition}
        onClose={() => setMenuPosition(null)}
        anchorReference="anchorPosition"
        anchorPosition={menuPosition}
      >
        {locationList.map(location => (
          location.branches.length > 0 ? (
            <NestedMenuItem
              key={location.name}
              label={location.name}
              parentMenuOpen={!!menuPosition}
            >
              {location.branches.map(branch => (
                <MenuItem key={branch.name} onClick={() => handleItemClick({ location: location.name, branch: branch.name })}>{branch.name}</MenuItem>
              ))}
            </NestedMenuItem>
          ) : (
              <MenuItem key={location.name} onClick={handleItemClick}>{location.name}</MenuItem>
            )
        ))}
      </Menu>
    </div>
  );
};

export default LocationMenu;
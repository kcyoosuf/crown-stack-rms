import { Breadcrumbs } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import Link from '@material-ui/core/Link';

const BreadCrumb = () => {

  const breadcrumb = useSelector(state => state.ui.breadcrump)

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumb.map(item => {
        return (
          <Link color="inherit" href={item.to} >
            {item.text}
          </Link>
        )
      })}
    </Breadcrumbs >
  );
}

export default BreadCrumb;


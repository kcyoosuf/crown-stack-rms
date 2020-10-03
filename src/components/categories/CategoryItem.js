import { Box } from '@material-ui/core';
import React from 'react';
import colors from '../../theme/colors';
const CategoryItem = ({ image, name, onClick }) => {
  return (
    <Box
      boxShadow={1}
      height={300}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      css={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      <Box maxHeight={240}>
        {image && <img src={`/images/${image}`} width='100%' height='100%' alt={name}/>}
      </Box>
      <Box textAlign="center" bgcolor={colors.green} py={2} color={colors.white}>
        {name}
      </Box>
    </Box>
  );
}

export default CategoryItem;
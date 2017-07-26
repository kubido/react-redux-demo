import React from 'react';

export default ({match}) => {
  return(
    <div>This is news Detail : {match.params.id}</div>
  )
}

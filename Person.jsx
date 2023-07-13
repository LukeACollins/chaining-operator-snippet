import React from 'react';
import avatar from '../../../assets/default-avatar.svg';

function Person({ name, nickName = 'no nick name', images }) {
  const styles = {
    div: {
      width: '80vw',
      maxWidth: '600px',
      display: 'grid',
      border: '1px solid blue',
      placeContent: 'center',
      marginBottom: '1.5rem',
      padding: '1rem',
    },
    img: {
      display: 'block',
      width: '200px',
      height: '200px',
      objectFit: 'cover',
    },
  };

  // const image = images && images[0] && images[0].small && images[0].small.url;

  const image = images?.[0]?.small?.url;

  return (
    <div style={styles.div}>
      <img style={styles.img} src={image || avatar} alt={name} />
      <h4>{name}</h4>
      <p>{nickName + ' for ' + name}</p>
    </div>
  );
}
export default Person;

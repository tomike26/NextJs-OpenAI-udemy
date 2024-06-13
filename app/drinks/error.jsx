'use client';

const error = (error) => {
    console.log(error)
    return <div className='error'>{error.error.message}</div>;
  };
  export default error;
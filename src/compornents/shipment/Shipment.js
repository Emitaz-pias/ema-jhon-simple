import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';



const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
     const loggedInUser = useContext(UserContext)
    return (
        <form onSubmit={handleSubmit()}>
          <input name="name" defaultValue={loggedInUser.displayName} {...register("name")} />
          {errors.name && <span>Name is required</span>}
          <input type="submit" />
        </form>
      );
};

export default Shipment;
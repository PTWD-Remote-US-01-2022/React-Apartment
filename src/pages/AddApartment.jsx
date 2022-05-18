import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddApartment = () => {
  const navigateTo = useNavigate();

  const defaultFormData = {
    img: '',
    title: '',
    pricePerDay: 0,
  };

  const [formData, setFormData] = useState(defaultFormData);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendDataToApi = async () => {
    const { data } = await axios.post(
      'https://ironbnb-m3.herokuapp.com/apartments/',
      formData
    );

    navigateTo('/apartments');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      sendDataToApi();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Add An Apartment</h1>
      <form onSubmit={submitHandler}>
        <label>Image Url: </label>
        <input
          type="text"
          name="img"
          value={formData.img}
          onChange={changeHandler}
        />
        <br />
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={changeHandler}
        />
        <br />
        <label>Price per day:</label>
        <input
          type="number"
          name="pricePerDay"
          value={formData.pricePerDay}
          onChange={changeHandler}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddApartment;

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Apartments = () => {
  const [apartments, setApartments] = useState([]);

  const getApartmentsData = async () => {
    const { data } = await axios.get(
      'https://ironbnb-m3.herokuapp.com/apartments/'
    );
    setApartments(() => data);
  };

  useEffect(() => {
    try {
      getApartmentsData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <h1>Apartments List</h1>

      {apartments.map((apartment) => {
        return (
          <div key={apartment._id}>
            <img src={apartment.img} alt="Apartment" />
            <p>{apartment.title}</p>
            <button>
              <Link to={apartment._id}>More Info</Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Apartments;

// "img": "https://www.aveliving.com/AVE/media/Property_Images/Florham%20Park/hero/flor-apt-living-(2)-hero.jpg?ext=.jpg",
// "pricePerDay": 450,
// "_id": "628419fc53724d00160a52cf",
// "title": "Luxury Apartment",
// "createdAt": "2022-05-17T21:56:12.571Z",
// "updatedAt": "2022-05-17T21:56:12.571Z",
// "__v": 0

import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlacesList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creatorID: 'u1',
  },
  {
    id: 'p2',
    title: 'Taj Mahal',
    description: 'One of the 7 wonders of the world',
    imageUrl:
      'https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-0-20151104113424.jpg',
    address: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creatorID: 'u2',
  },
];

const UserPlaces = () => {
  const userID = useParams().userID;
  const loadedPlaces = DUMMY_PLACES.filter(
    (place) => place.creatorID === userID
  );
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;

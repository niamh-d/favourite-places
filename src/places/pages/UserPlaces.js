import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description:
      "A 102-story Art Deco skyscraper in Midtown Manhattan, New York City.",
    address: "20 W 34th St., New York, NY 10001, United States",
    imageURL:
      "https://marvel-b1-cdn.bc0a.com/f00000000179470/www.esbnyc.com/sites/default/files/styles/small_feature/public/2019-10/home_banner-min.jpg?itok=uZt-03Vw",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Alexander Nevsky Cathedral",
    description:
      "An orthodox cathedral on Toompea hill in central Tallinn, Estonia.",
    address: "Lossi plats 10, 10130 Tallinn",
    imageURL:
      "https://static.visitestonia.com/images/3746801/1600_900_false_false_54b4bcf394aaacea26ca36b57d4efc22.jpg",
    location: {
      lat: 59.4357589,
      lng: 24.7370364,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;

import React from 'react';
import UserPlant from "./components/UserPlant";

import './App.css';

var testData =
    [
        {
            "userPlantRowKey": "5b6c39c1-88df-4970-b2e6-23fc6232f531",
            "userRowKey": "039c9b79-8dfc-4e9a-85ec-33f350f3bd2e",
            "plantRowKey": "9e1cd828-a87a-45ac-bd4f-8558bcd3ff1d",
            "plantName": "Sansevieria",
            "plantPhotoUri": "https://upload.wikimedia.org/wikipedia/commons/9/91/Snake_plant.jpg",
            "plantWikipediaUri": "https://en.wikipedia.org/wiki/Sansevieria",
            "ownershipDate": "2021-08-27T00:00:00",
            "lastWatered": "2021-06-27T00:00:00",
            "lastRepotted": "2021-08-27T00:00:00",
            "wateringPeriodInDays": 15,
            "repottingPeriodInDays": 365,
            "wateringDueInDays": -54,
            "wateringDue": true,
            "repottingDueInDays": 357,
            "repottingDue": false
        },
        {
            "userPlantRowKey": "a7374e56-8641-49bf-a243-428844c45117",
            "userRowKey": "039c9b79-8dfc-4e9a-85ec-33f350f3bd2e",
            "plantRowKey": "01a72ee5-55dc-4c00-85f5-9361c8998c5f",
            "plantName": "Monstera",
            "plantPhotoUri": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Starr_080731-9572_Monstera_deliciosa.jpg/1280px-Starr_080731-9572_Monstera_deliciosa.jpg",
            "plantWikipediaUri": "https://en.wikipedia.org/wiki/Monstera",
            "ownershipDate": "2021-08-27T00:00:00",
            "lastWatered": "2021-08-27T00:00:00",
            "lastRepotted": "2018-02-27T00:00:00",
            "wateringPeriodInDays": 10,
            "repottingPeriodInDays": 365,
            "wateringDueInDays": 2,
            "wateringDue": false,
            "repottingDueInDays": -920,
            "repottingDue": true
        }
    ]

    fetch('https://plants-api.azurewebsites.net/users/039c9b79-8dfc-4e9a-85ec-33f350f3bd2e/plants')
    .then(response => response.json())
    .then(data => console.log(data));

const UserPlants = (props) => (
    <div>
        {testData.map(userPlant => <UserPlant key={userPlant.userPlantRowKey} {...userPlant}/>)}
    </div>
)

export default function App() {
    // const [userPlants, setUserPlants] = useState();
    return (
        <UserPlants />
    );
}

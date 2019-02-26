import * as React from 'react';
import { PlaceDetails } from './utils/places';

export const PlaceSearchResult: React.SFC<PlaceDetails> = details => (
    <li className="search-result">
        <img
            className="icon"
            src={details.icon}
        />
        <h3>{details.name}</h3>
        <p>
            <a href={`https://maps.google.com/?cid=${details.id}`}>
                {details.vicinity}
            </a>
            <br />
            <a href={details.website}>
                {details.website}
            </a>
        </p>
    </li>
);

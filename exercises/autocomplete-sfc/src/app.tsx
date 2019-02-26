import * as React from 'react';
import { PlaceSearchResult } from './place-search-result';
import { PlaceDetails, PlaceSummary, fetchPlaceSummaries, fetchPlaceDetails } from './utils/places';

interface IAppState {
  results: PlaceDetails[];
}

export class App extends React.Component<{}, IAppState> {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }
  async componentDidMount() {
    let placeSummaries: PlaceSummary[] = await fetchPlaceSummaries('donut');
    let results: PlaceDetails[] = await fetchPlaceDetails(placeSummaries.map(p => p.place_id));
    this.setState({ results });
  }
  render() {
    console.log(this.state.results);
    let placeResults = this.state.results.map(pr => {
      return <PlaceSearchResult {...pr} />;
    });
    return (
      <ul className='results'>
        {placeResults}
      </ul>
    );
  }
};

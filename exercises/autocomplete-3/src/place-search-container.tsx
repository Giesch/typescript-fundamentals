import * as React from 'react';
import { autocomplete } from './autocomplete';
import { shortUrl } from './utils/string';
import { PlaceDetails } from './utils/places';
import { PlaceSearchResult } from './place-search-result';
import { PlaceSearchResultList } from './place-search-result-list';


interface SearchContainerState {
  inProgress: boolean;
  results: PlaceDetails[];
  term: string;
}

export class PlaceSearchContainer
  extends React.Component<{}, SearchContainerState> {
  constructor() {
    super();
    this.state = {
      inProgress: false,
      results: [],
      term: ''
    };
    // Event handler for changes to search term
    this.beginSearch = this.beginSearch.bind(this);
  }

  /**
   * Event handler for changes to the serch term
   *
   * @param {InputEvent} evt from the search field
   *
   * @memberof PlaceSearch
   * @return {undefined}
   */
  async beginSearch(term: string): Promise<void> {
    // Initiate a search using the ./autocomplete.ts module
    // When the promise it returns resolves,
    // update your state accordingly
    this.setState({
      ...this.state,
      inProgress: true,
      term
    });
    const results = await autocomplete(term);
    this.setState({
      ...this.state,
      inProgress: false,
      results
    });
  }

  /**
   * Render the html for this component
   *
   * @param {JSX.Element} elem element
   * @param {Object} container component state
   * @returns {undefined}
   *
   * @memberof PlaceSearch
   */
  render() {
    const childProps = {
      ...this.state,
      onSearchTermChanged: this.beginSearch
    };
    return (
      <PlaceSearchResultList {...childProps} />
    );
  }
}

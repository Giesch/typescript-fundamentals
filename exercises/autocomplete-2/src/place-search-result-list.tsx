import * as React from 'react';
import { PlaceSearchResult } from './place-search-result';
import { IAppState } from './app';

interface ListProps extends IAppState {
  doSearch?: (search: string) => void;
}

export const PlaceSearchResultList: React.SFC<ListProps> = (props) => {
  const { doSearch = () => { } } = props;

  return (
    <div>
      <input
        defaultValue="Do a search!"
        onChange={(e) => doSearch(e.target.value)}>
      </input>
      <br />

      <span>
        {props.inProgress ? 'Search In Progress' : ''}
      </span>

      <ul>
        {props.results.map(r => <PlaceSearchResult {...r} />)}
      </ul>
    </div>
  )
}

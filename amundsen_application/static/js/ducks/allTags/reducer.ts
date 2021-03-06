import { Tag } from 'interfaces';

import { GetAllTags, GetAllTagsRequest, GetAllTagsResponse } from './types';

/* ACTIONS */
export function getAllTags(): GetAllTagsRequest {
  return { type: GetAllTags.REQUEST };
};

/* REDUCER */
export interface AllTagsReducerState {
  allTags: Tag[];
  isLoading: boolean;
};

export const initialState: AllTagsReducerState = {
  allTags: [],
  isLoading: false,
};

export default function reducer(state: AllTagsReducerState = initialState, action): AllTagsReducerState {
  switch (action.type) {
    case GetAllTags.REQUEST:
      return { ...state, isLoading: true };
    case GetAllTags.FAILURE:
      return initialState;
    case GetAllTags.SUCCESS:
      return { ...state, allTags: (<GetAllTagsResponse>action).payload.tags, isLoading: false };
    default:
      return state;
  }
};

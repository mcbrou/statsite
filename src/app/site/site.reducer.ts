import { EntityState } from '@ngrx/entity';
import { Site } from './site';
import { SiteActionType, SiteAction } from './site.actions';
import { initialState, entityAdapter, SitesState } from './site.state';

export function reducer(state = initialState, action: SiteAction ): SitesState {
    switch (action.type) {
        case SiteActionType.Add: {
            console.log('payload');
            console.log(action.payload);
            return entityAdapter.upsertOne(action.payload, state);
        };
        default: {
            return state;
        }
    }
}

import { EntityState } from '@ngrx/entity';
import { Site } from './site';
import { SiteActionType, SiteAction } from './site.actions';
import { initialState, entityAdapter } from './site.state';

export function reducer(state = initialState, action: SiteAction ) : EntityState<Site> {
    switch (action.type) {
        case SiteActionType.Add: {
            console.log('payload');
            console.log(action.payload);
            return entityAdapter.addOne(action.payload, state);
        };
        default: {
            return state;
        }
    }
}
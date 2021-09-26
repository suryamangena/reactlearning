/* Create A Reducer
 *
 * You need to create a reducer called "appReducer" that accepts two arguments:
 * - First, an array containing information about ice cream 
 * - Second, an object with a 'DELETE_FLAVOR' `type` key
 * (i.e., the object contains information to delete the flavor from the state)
 *
 * The action your reducer will receive will look like this:
 * { type: 'DELETE_FLAVOR', flavor: 'Vanilla' }
 *
 * And the initial state will look something like this (as such, refrain 
 * from passing in default values for any parameters!):
 * [{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }];
*/

function appReducer(state =[], action){
    if (action.type === 'DELETE_FLAVOR') {
        return state.concat([action.flavor])
    }
    return state;
}

function createStore(){
    let state = [{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }];
    const getState = () => state;    

    return {
        getState
    }
}

const deleteFlavor = { type: 'DELETE_FLAVOR', flavor: 'Vanilla' };

const store = createStore();
console.log(appReducer(store.getState(), deleteFlavor))

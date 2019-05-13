/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-13 23:33:59
 * @modify date 2019-05-13 23:33:59
 * @desc [description]
 */

const initialState = {
    ifFetching: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "value":
            return {
                ...state
            };
            break;

        default:
            return {
                ...state
            };
            break;
    }
};

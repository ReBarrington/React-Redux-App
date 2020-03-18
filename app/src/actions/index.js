// ACTION FILE!!
export const GET_DATA = "GET_DATA";

export const getData = () => {
    // no payload because this triggers getting data, not updating data. 
    return {
        type: GET_DATA
        // after this we want it to trigger a RECEIVE_DATA or RECEIVE_ERROR
    };
};


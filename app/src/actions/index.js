// ACTION FILE!!
export const GET_DATA = "GET_DATA";

export const getData = () => {
    // no payload because this triggers getting data, not updating data. 
    return {
        type: GET_DATA
    };
};


const Logger = store => next => action => {
    let result;
    console.groupCollapsed("dispatching", action.type);
    console.log("prev state: ", store.getState());
    console.log("action: ", action);
    result = next(action);
    console.log("next state: ", store.getState());
    console.groupEnd();
    return result;
};

export default Logger;
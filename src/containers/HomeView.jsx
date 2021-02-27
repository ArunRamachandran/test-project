import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setInitialState } from '../actions/actions';

export const HomeView = () => {
    // const appState = useSelector(state => state.appData);
    const dispatch = useDispatch();
    // console.log("state : ", appState);

    // useEffect(() => {
    //     dispatch(setInitialState());
    // }, [])

    return (
        <div className="home-container">
            Home View Container
        </div>
    )
}
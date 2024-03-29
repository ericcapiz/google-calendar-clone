import React,{useEffect, useState} from 'react';
import GlobalContext from './GlobalContext';
import dayjs from 'dayjs';

const ContextWrapper = (props) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    const [daySelected, setDaySelected] = useState(null);
    const [showEventModal, setShowEventModal] = useState(false);


    useEffect(()=>{
        if(smallCalendarMonth !== null){
            setMonthIndex(smallCalendarMonth)
        }
    },[smallCalendarMonth])
    return (
        <GlobalContext.Provider value={{monthIndex, setMonthIndex, smallCalendarMonth, setSmallCalendarMonth, daySelected, setDaySelected, showEventModal, setShowEventModal}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default ContextWrapper

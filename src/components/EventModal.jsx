import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const EventModal = () => {
    const {setShowEventModal} = useContext(GlobalContext);
    return (
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
            <form className="bg-white rounded-lg shadow-2xl w-1/4">
                <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
                    <span className="material-icons-outlined text-gray-400">
                        drag_handle
                    </span>
                    <button onClick={()=>setShowEventModal(false)}> 
                        <span className="material-icons-outlined text-gray-400">
                            close
                        </span>
                    </button>
                </header>
            </form>
        </div>
    )
}

export default EventModal

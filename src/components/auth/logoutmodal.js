import React from "react";


const LogoutModal = ({onCancel,onConfirm})=>{
    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white h-[50%] p-8 rounded-md flex flex-col justify-center items-center">
                <p className="text-lg font-semibold mb-4">Are you sure you want to logout?</p>
                    <div className="flex jusify-end">
                    <button onClick={onCancel} className="px-4 py-2 mr-2 bg-gray-300 rounded-md">Cancel</button>
                    <button onClick={onConfirm} className="px-4 py-2 bg-[#DE0202] text-white rounded-md">Logout</button>                    </div>
            </div>
        </div>
    )
}

export default LogoutModal;
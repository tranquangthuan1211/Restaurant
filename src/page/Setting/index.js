import React from 'react'
import { useNavigate } from "react-router-dom";
import "./styles.css"
import { IoCloseCircle } from "react-icons/io5";

export default function Setting() {
    const navigate = useNavigate();
    const handleClose = () => {
        navigate('/')
    }
  return (
    <div className='setting'>
        <div className='content-setting'>
            <div className='menu_setting'>
                <h1 className='center_setting'>Trung Tâm tài khoản</h1>
                <div className='infor_setting'>
                    <h1 className='name_setting'>Tài Khoản</h1>
                    <h1 className='name_setting'>Đổi mật khẩu</h1>
                </div>
            </div>
            <div className='content_changePass'>
                <div>
                    <h1>Đổi mật khẩu</h1>
                </div>
                <div>
                    <input 
                        placeholder='Mật khẩu hiện tại'
                        className='input_form'
                    />
                    <input 
                        placeholder='Mật khẩu mới'
                        className='input_form'
                    />
                    <input 
                        placeholder='Nhập mật khẩu mới'
                        className='input_form'
                    />
                    <button className='button'>Xác nhận thay đổi</button>
                </div>
            </div>
            <IoCloseCircle className='icon_close' onClick={handleClose} />
        </div>
    </div>
  )
}

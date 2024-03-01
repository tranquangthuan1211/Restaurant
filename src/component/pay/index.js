import React from 'react'

export default function Pay(props) {
  const Acount_pay = {
    BANK_ID:"VCB",
    ACCOUNT_NO:"0977123456"
  }
  const QR = `https://img.vietqr.io/image/${Acount_pay.BANK_ID}-${Acount_pay.ACCOUNT_NO}-compact2.png?amount=${props.price}&addInfo="Chuyen tien"&accountName="Tran Quang Thuan"`
  return (
    <img style={{width:'400px', height:'400px'}} src={QR} alt='qr chuyen tien'/>
  )
}

export default async function handler(req, res) {

  if(req.method !== 'POST'){
    return res.status(405).json({
      error:'Method not allowed'
    })
  }
const {

lat,
lng,
accuracy,

ip,

device,
platform,
screen,

massageName,
skill,
phone

} = req.body


const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN 
const CHAT_ID = process.env.CHAT_ID


const text = `

📍 KHÁCH MỚI TRUY CẬP WEBSITE

🌍 IP:
${ip}

📱 Thiết bị:
${device}

💻 Hệ điều hành:
${platform}

🖥 Màn hình:
${screen}

🎯 Sai số GPS:
${accuracy} mét

📍 Google Maps:
https://maps.google.com/?q=${lat},${lng}

💆 Kỹ thuật viên:
${massageName || 'Chưa chọn'}

⭐ Dịch vụ:
${skill || 'Chưa chọn'}

📞 Số điện thoại:
${phone || 'Chưa nhập'}

📍 Vị trí khách:
https://maps.google.com/?q=${lat},${lng}

`

  try{

    await fetch(

      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,

      {

        method:'POST',

        headers:{
          'Content-Type':'application/json'
        },

        body:JSON.stringify({

          chat_id:CHAT_ID,

          text

        })

      }

    )

    return res.status(200).json({
      success:true
    })

  }catch(error){

    return res.status(500).json({
      success:false
    })

  }

}
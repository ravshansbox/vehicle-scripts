import axios from 'axios'
import * as remeda from 'remeda'

const intervals = (() => {
  const result = []
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const formattedHour = hour.toString().padStart(2, '0')
      const formattedMinute = minute.toString().padStart(2, '0')
      result.push(`${formattedHour}:${formattedMinute}:00`)
    }
  }
  return result
})()

const shuffledIntervals = remeda.shuffle(intervals)

function postIqbol(owner, interval) {
  return axios
    .post(
      'https://oldmy.gov.uz:4433/uz/vehicle-certification/default/index?retry=2&taskId=186962517',
      {
        '_csrf-myap':
          'HOvjrJZgdMqgG_WmIMLsHjLxRWFUdggqzViEr6gRqnhbkoDl-lcys-0vvs5ysohQYrlwUxoSXGiEB_GZ5mjoKQ==',
        'VehicleCertificationModel[pinfl]': '30307882110041',
        'VehicleCertificationModel[full_name]':
          'ERGASHEV IQBOLJON MAMURJONOVICH',
        'VehicleCertificationModel[passport_number]': 'AD9078134',
        'VehicleCertificationModel[vin_model]':
          'Автотранспортное средство кат. M1, марки BYD SONG PLUS Champion VIN: LGXCE4CB4S0285875',
        'VehicleCertificationModel[date]': '28.04.2025',
        'VehicleCertificationModel[hour]': interval,
        actionBook: 'submit'
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Origin: 'https://oldmy.gov.uz',
          Cookie:
            '_pk_id.1.d579=40149437781441b3.1744217882.; smart_top=1; _pk_ses.1.d579=1; pevaOun6hphKuMxXIGRaDhmAzaVL3uQfLKMMfkB2G=c9d1ae770ec56af020bfe917a7cb063d1f25d0351a1cea8d70e769a49a14ef00a%3A2%3A%7Bi%3A0%3Bs%3A41%3A%22pevaOun6hphKuMxXIGRaDhmAzaVL3uQfLKMMfkB2G%22%3Bi%3A1%3Bs%3A689%3A%22eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzUxMiJ9.eyJpc3MiOiJteTMuZ292LnV6IiwiYXVkIjoiTXlHb3YgQVBJIiwianRpIjoiMjhmYjk0NjktMjkxMS0zYjBjLTliZDMtYjU4NWU1NThjY2Q4Iiwic3ViIjoiMDlkYTg5NzAtZjBhMi00ZjI4LTk4ZWUtYmEwMzQ0NDJkMWE1IiwiaWF0IjoxNzQ0NDc0ODk4LCJuYmYiOjE3NDQ0NzQ4OTgsImV4cCI6MTc0NDQ3Njk5OCwidV91aWQiOiIwOWRhODk3MC1mMGEyLTRmMjgtOThlZS1iYTAzNDQ0MmQxYTUiLCJzX3VpZCI6IjI4ZmI5NDY5LTI5MTEtM2IwYy05YmQzLWI1ODVlNTU4Y2NkOCIsImFjY2Vzc190eXBlIjoiY2l0aXplbiIsInRpbiI6MCwidXNlcl90eXBlIjoiSSIsInBsYXRmb3JtIjoid2ViIiwiY29tcGFueV9pZCI6bnVsbH0.AZUH6gCXzHpBLVTD0VvZ6Q6Zcfxtl0YaakgnTWLqXOIAOO9EpKevNi3gfNpgVo8vuAPi6apkklI-F2qF87T1IV6uACZjCoVi7qCOn4nz3scBlCsnOyzrZkj1geA-FNDc3NbF2iZXkhQ_evK6kxxtS46eH35tk6rb3OrJORPcrB1UaBEr%22%3B%7D; epigu-common=r672rhpakop9kikhh3pmditr43; _identity-common=4536b9f44753759ec66bb068fc3b819ff545aa9043a4a990480d2e3f2774a8fea%3A2%3A%7Bi%3A0%3Bs%3A16%3A%22_identity-common%22%3Bi%3A1%3Bs%3A21%3A%22%5B10554013%2Ctrue%2C86400%5D%22%3B%7D; _csrf-myap=5cf25a40216a32607c92008e7fab9343db3cbbe5b85e870818f21dd24808f0bea%3A2%3A%7Bi%3A0%3Bs%3A10%3A%22_csrf-myap%22%3Bi%3A1%3Bs%3A32%3A%22GycIl7FyM4KhRpdNPH52NdTBI_u6NyBQ%22%3B%7D; _language=c42fec7cd3531209cc9f8f603970ef73f63f4ae9accb0e76f765fe336aa2f53ca%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_language%22%3Bi%3A1%3Bs%3A2%3A%22uz%22%3B%7D'
        }
      }
    )
    .then(response => response.data)
    .then(data => {
      if (
        data.includes(
          'Навбатга қўйиш имкони бўлмади, кейинроқ қайта уриниб кўринг'
        )
      ) {
        console.log('problem', owner, interval)
      } else {
        console.log('success', owner, interval)
        throw new Error(owner)
      }
    })
}

function postRustam(owner, interval) {
  return axios
    .post(
      'https://oldmy.gov.uz:4433/uz/vehicle-certification/default/index?retry=2&taskId=186962136',
      {
        '_csrf-myap':
          'cCdlZSLA5rMvrarfvVrgaSVRofymCJfeelrBvz2Btk07ST0vcraD1HCVxrrsNpYBExLttv5-wLc0N4LObLf1Pw==',
        'VehicleCertificationModel[pinfl]': '40602952110015',
        'VehicleCertificationModel[full_name]':
          'SAMANDAROV RUSTAM KARIMBAYEVICH',
        'VehicleCertificationModel[passport_number]': 'AD2404006',
        'VehicleCertificationModel[vin_model]':
          'Автотранспортное средство кат. М1 марки: BYD SONG PLUS VIN:LGXCE4CB0S0289566',
        'VehicleCertificationModel[date]': '28.04.2025',
        'VehicleCertificationModel[hour]': interval,
        actionBook: 'submit'
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Origin: 'https://oldmy.gov.uz',
          Cookie:
            '_pk_id.1.d579=40149437781441b3.1744217882.; smart_top=1; _pk_ses.1.d579=1; pevaOun6hphKuMxXIGRaDhmAzaVL3uQfLKMMfkB2G=681563bd7c17d2c83730248e0c1669b4fcc8595dcaee10ee1bd68a07d978afc4a%3A2%3A%7Bi%3A0%3Bs%3A41%3A%22pevaOun6hphKuMxXIGRaDhmAzaVL3uQfLKMMfkB2G%22%3Bi%3A1%3Bs%3A689%3A%22eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzUxMiJ9.eyJpc3MiOiJteTMuZ292LnV6IiwiYXVkIjoiTXlHb3YgQVBJIiwianRpIjoiNzY0NWNlYWItNTM4NC0zYjJlLWJmNzEtNmE4NDllMGRlM2UyIiwic3ViIjoiOGE1M2Q2NzUtYzNjMy00NjY3LTllMjktYjQzZDUzODRkZDg1IiwiaWF0IjoxNzQ0NDc2OTc1LCJuYmYiOjE3NDQ0NzY5NzUsImV4cCI6MTc0NDQ3OTA3NSwidV91aWQiOiI4YTUzZDY3NS1jM2MzLTQ2NjctOWUyOS1iNDNkNTM4NGRkODUiLCJzX3VpZCI6Ijc2NDVjZWFiLTUzODQtM2IyZS1iZjcxLTZhODQ5ZTBkZTNlMiIsImFjY2Vzc190eXBlIjoiY2l0aXplbiIsInRpbiI6MCwidXNlcl90eXBlIjoiSSIsInBsYXRmb3JtIjoid2ViIiwiY29tcGFueV9pZCI6bnVsbH0.AWMwpD7zQtbq2KRAz1A-ULKn29AwAIzi4IGylugI81ecGUQoXIG9_-fO4ixpQcwj1MY9LPuV4sUS_gcdKoywauJ0AQwKeK5am4sPmfHdzsg84QL9Jpfszi00VrPAI2c5g71yaeIA2hCyXJ4WL3M3jogjvzObJiZil8G94Jcq8PeZ7pWK%22%3B%7D; epigu-common=vmr9qf1jbcsc6vkrla9rjpj0bn; _identity-common=9d601b8111330c3d178b02ee4967f88ee2561e1b2a69ba71259cacde3b958ae5a%3A2%3A%7Bi%3A0%3Bs%3A16%3A%22_identity-common%22%3Bi%3A1%3Bs%3A19%3A%22%5B133496%2Ctrue%2C86400%5D%22%3B%7D; _csrf-myap=363284b3d4ad5711fd879c7200854d5dca0a2a6de457b13ed9be54f29afbcf79a%3A2%3A%7Bi%3A0%3Bs%3A10%3A%22_csrf-myap%22%3Bi%3A1%3Bs%3A32%3A%22KnXJPveg_8leQlvh6CLJXvWiNmCqQ6Cr%22%3B%7D; _language=c42fec7cd3531209cc9f8f603970ef73f63f4ae9accb0e76f765fe336aa2f53ca%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_language%22%3Bi%3A1%3Bs%3A2%3A%22uz%22%3B%7D'
        }
      }
    )
    .then(response => response.data)
    .then(data => {
      if (
        data.includes(
          'Навбатга қўйиш имкони бўлмади, кейинроқ қайта уриниб кўринг'
        )
      ) {
        console.log('problem', owner, interval)
      } else {
        console.log('success', owner, interval)
        throw new Error(owner)
      }
    })
}

function postNilufar(owner, interval) {
  return axios
    .post(
      'https://oldmy.gov.uz:4433/uz/vehicle-certification/default/index?retry=2&taskId=187208462',
      {
        '_csrf-myap':
          'N3TUmEcYl5-N5AGcAfy1V8vYKUjOlxBznyNOrDLp-HUPML-sLi7F3dqHT99TiocEobxgIfvBZhfOETj5B5GNTA==',
        'VehicleCertificationModel[pinfl]': '40602952110015',
        'VehicleCertificationModel[full_name]':
          'SALOMOVA NILUFAR MAMURJON QIZI',
        'VehicleCertificationModel[passport_number]': 'AD6703547',
        'VehicleCertificationModel[vin_model]':
          'Автотранспортное средство кат. M1, марки BYD SONG PLUS Champion VIN: LGXCE4CB8S0285863',
        'VehicleCertificationModel[date]': '28.04.2025',
        'VehicleCertificationModel[hour]': interval,
        actionBook: 'submit'
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Origin: 'https://oldmy.gov.uz',
          Cookie:
            '_pk_id.1.d579=9826e05df7b52e72.1742880705.; smart_top=1; _pk_ref.1.d579=%5B%22%22%2C%22%22%2C1744474370%2C%22https%3A%2F%2Fwww.google.com%2F%22%5D; epigu-common=u6j1dc3qujlhgrtamn33elc8o0; _identity-common=23747907e6fd31bc6f9226ba00cf6a0527350cc7d3002268038cf059b4d5be42a%3A2%3A%7Bi%3A0%3Bs%3A16%3A%22_identity-common%22%3Bi%3A1%3Bs%3A21%3A%22%5B11571900%2Ctrue%2C86400%5D%22%3B%7D; _csrf-myap=a5b67b30c5af52be501ed3797ff3da435c528d4cd9226b36223bdf1ed28a26b2a%3A2%3A%7Bi%3A0%3Bs%3A10%3A%22_csrf-myap%22%3Bi%3A1%3Bs%3A32%3A%228Dk4i6RBWcNCRv2SjdIi5VvdQ2vU5xu9%22%3B%7D; _language=c42fec7cd3531209cc9f8f603970ef73f63f4ae9accb0e76f765fe336aa2f53ca%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_language%22%3Bi%3A1%3Bs%3A2%3A%22uz%22%3B%7D'
        }
      }
    )
    .then(response => response.data)
    .then(data => {
      if (
        data.includes(
          'Навбатга қўйиш имкони бўлмади, кейинроқ қайта уриниб кўринг'
        )
      ) {
        console.log('problem', owner, interval)
      } else {
        console.log('success', owner, interval)
        throw new Error(owner)
      }
    })
}

function postAhmedova(owner, interval) {
  return axios
    .post(
      'https://oldmy.gov.uz:4433/uz/vehicle-certification/default/index?retry=2&taskId=186962136',
      {
        '_csrf-myap':
          'xK8nKdXhTinK5YJRvXZO4nCJhNvKhzNXUz7SlZhy3sn07UZNkqwIGpK28CGEBjSBHL3rnp_YRSMUCuDs2y3ukA==',
        'VehicleCertificationModel[pinfl]': '40705580190074',
        'VehicleCertificationModel[full_name]':
          'AXMEDOVA TAMARA DJUMANIYAZOVNA',
        'VehicleCertificationModel[passport_number]': 'AB2086436',
        'VehicleCertificationModel[vin_model]':
          'Автотранспортное средство кат. M1, марки BYD SONG PLUS VIN: LGXCE4CB6S0281276',
        'VehicleCertificationModel[date]': '28.04.2025',
        'VehicleCertificationModel[hour]': interval,
        actionBook: 'submit'
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Origin: 'https://oldmy.gov.uz',
          Cookie:
            '_pk_id.1.d579=40149437781441b3.1744217882.; smart_top=1; _pk_ses.1.d579=1; pevaOun6hphKuMxXIGRaDhmAzaVL3uQfLKMMfkB2G=52e369b8772d91ee8ba285bf1013b9c0a3b75737da8e616f5d6fb7b0649e8e0ea%3A2%3A%7Bi%3A0%3Bs%3A41%3A%22pevaOun6hphKuMxXIGRaDhmAzaVL3uQfLKMMfkB2G%22%3Bi%3A1%3Bs%3A689%3A%22eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzUxMiJ9.eyJpc3MiOiJteTMuZ292LnV6IiwiYXVkIjoiTXlHb3YgQVBJIiwianRpIjoiYmQyODE2ODctMmE0OC0zMGUzLWFiYzctYzQ5NzZjMTI0YTNhIiwic3ViIjoiYjhjNDU5ZDMtMTNlZS00Njk2LWE4OTUtNWEyNmE1Mjc3MTBkIiwiaWF0IjoxNzQ0NDc3MDk0LCJuYmYiOjE3NDQ0NzcwOTQsImV4cCI6MTc0NDQ3OTE5NCwidV91aWQiOiJiOGM0NTlkMy0xM2VlLTQ2OTYtYTg5NS01YTI2YTUyNzcxMGQiLCJzX3VpZCI6ImJkMjgxNjg3LTJhNDgtMzBlMy1hYmM3LWM0OTc2YzEyNGEzYSIsImFjY2Vzc190eXBlIjoiY2l0aXplbiIsInRpbiI6MCwidXNlcl90eXBlIjoiSSIsInBsYXRmb3JtIjoid2ViIiwiY29tcGFueV9pZCI6bnVsbH0.AEobWH78a2n0THjKyCmlZtztFpU9jfoQtwaNiZA2morsD_2dKIwxOy8lGa5EeDdqIQyDD3AYh54Y8zXrf7m8tjhSAV0mLDqGaCkSVTdlN0Kcxnw6Lg2UbvWN9vE828GDLgcjh-m7c3-1k2NA0PcLiNuTow3cj3RaOeWi2dSNTVgGM7Ai%22%3B%7D; epigu-common=uocr1f6ed1decg7kcgq8sk93gu; _identity-common=16d89f969898e6ef916f255d31050c173a0ed87940be2271dcc13a2607f457a1a%3A2%3A%7Bi%3A0%3Bs%3A16%3A%22_identity-common%22%3Bi%3A1%3Bs%3A19%3A%22%5B887935%2Ctrue%2C86400%5D%22%3B%7D; _csrf-myap=362fc28c14c0bc129bc57346c7ee8b7859c4b586d052c60da5f28ef0fc562f98a%3A2%3A%7Bi%3A0%3Bs%3A10%3A%22_csrf-myap%22%3Bi%3A1%3Bs%3A32%3A%220BadGMF3XSrp9pzcl4oEU_vtG42yC_0Y%22%3B%7D; _language=c42fec7cd3531209cc9f8f603970ef73f63f4ae9accb0e76f765fe336aa2f53ca%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_language%22%3Bi%3A1%3Bs%3A2%3A%22uz%22%3B%7D'
        }
      }
    )
    .then(response => response.data)
    .then(data => {
      if (
        data.includes(
          'Навбатга қўйиш имкони бўлмади, кейинроқ қайта уриниб кўринг'
        )
      ) {
        console.log('problem', owner, interval)
      } else {
        console.log('success', owner, interval)
        throw new Error(owner)
      }
    })
}

// (async () => {
//   for (const interval of shuffledIntervals) {
//     await postIqbol("iqbol", interval);
//   }
// })();

// (async () => {
//   for (const interval of shuffledIntervals) {
//     await postNilufar("nilufar", interval);
//   }
// })();

// (async () => {
//   for (const interval of shuffledIntervals) {
//     await postRustam("rustam", interval);
//   }
// })();

// (async () => {
//   for (const interval of shuffledIntervals) {
//     await postAhmedova("ahmedova", interval);
//   }
// })();

import axios from 'axios'
import * as remeda from 'remeda'

const date = '29.04.2025'

const slots = []
for (let hour = 0; hour < 24; hour++) {
  for (let minute = 0; minute < 60; minute += 15) {
    const formattedHour = hour.toString().padStart(2, '0')
    const formattedMinute = minute.toString().padStart(2, '0')
    slots.push(`${formattedHour}:${formattedMinute}:00`)
  }
}

const items = [
  {
    enabled: false,
    taskId: '186962517',
    csrf: 'HOvjrJZgdMqgG_WmIMLsHjLxRWFUdggqzViEr6gRqnhbkoDl-lcys-0vvs5ysohQYrlwUxoSXGiEB_GZ5mjoKQ==',
    pinfl: '30307882110041',
    fullName: 'ERGASHEV IQBOLJON MAMURJONOVICH',
    passportNumber: 'AD9078134',
    vinModel:
      'Автотранспортное средство кат. M1, марки BYD SONG PLUS Champion VIN: LGXCE4CB4S0285875',
    cookie:
      '_pk_id.1.d579=40149437781441b3.1744217882.; smart_top=1; _pk_ses.1.d579=1; pevaOun6hphKuMxXIGRaDhmAzaVL3uQfLKMMfkB2G=c9d1ae770ec56af020bfe917a7cb063d1f25d0351a1cea8d70e769a49a14ef00a%3A2%3A%7Bi%3A0%3Bs%3A41%3A%22pevaOun6hphKuMxXIGRaDhmAzaVL3uQfLKMMfkB2G%22%3Bi%3A1%3Bs%3A689%3A%22eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzUxMiJ9.eyJpc3MiOiJteTMuZ292LnV6IiwiYXVkIjoiTXlHb3YgQVBJIiwianRpIjoiMjhmYjk0NjktMjkxMS0zYjBjLTliZDMtYjU4NWU1NThjY2Q4Iiwic3ViIjoiMDlkYTg5NzAtZjBhMi00ZjI4LTk4ZWUtYmEwMzQ0NDJkMWE1IiwiaWF0IjoxNzQ0NDc0ODk4LCJuYmYiOjE3NDQ0NzQ4OTgsImV4cCI6MTc0NDQ3Njk5OCwidV91aWQiOiIwOWRhODk3MC1mMGEyLTRmMjgtOThlZS1iYTAzNDQ0MmQxYTUiLCJzX3VpZCI6IjI4ZmI5NDY5LTI5MTEtM2IwYy05YmQzLWI1ODVlNTU4Y2NkOCIsImFjY2Vzc190eXBlIjoiY2l0aXplbiIsInRpbiI6MCwidXNlcl90eXBlIjoiSSIsInBsYXRmb3JtIjoid2ViIiwiY29tcGFueV9pZCI6bnVsbH0.AZUH6gCXzHpBLVTD0VvZ6Q6Zcfxtl0YaakgnTWLqXOIAOO9EpKevNi3gfNpgVo8vuAPi6apkklI-F2qF87T1IV6uACZjCoVi7qCOn4nz3scBlCsnOyzrZkj1geA-FNDc3NbF2iZXkhQ_evK6kxxtS46eH35tk6rb3OrJORPcrB1UaBEr%22%3B%7D; epigu-common=r672rhpakop9kikhh3pmditr43; _identity-common=4536b9f44753759ec66bb068fc3b819ff545aa9043a4a990480d2e3f2774a8fea%3A2%3A%7Bi%3A0%3Bs%3A16%3A%22_identity-common%22%3Bi%3A1%3Bs%3A21%3A%22%5B10554013%2Ctrue%2C86400%5D%22%3B%7D; _csrf-myap=5cf25a40216a32607c92008e7fab9343db3cbbe5b85e870818f21dd24808f0bea%3A2%3A%7Bi%3A0%3Bs%3A10%3A%22_csrf-myap%22%3Bi%3A1%3Bs%3A32%3A%22GycIl7FyM4KhRpdNPH52NdTBI_u6NyBQ%22%3B%7D; _language=c42fec7cd3531209cc9f8f603970ef73f63f4ae9accb0e76f765fe336aa2f53ca%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_language%22%3Bi%3A1%3Bs%3A2%3A%22uz%22%3B%7D',
  },
  {
    enabled: true,
    taskId: '187699016',
    csrf: 'Kh4nYIwaQhFEEG87za8zyenj4ptMLr_okiMd44S_i7p9X0ZYzl9xVDJ0CWmd9XWh35OryhhG9an_QFvSse7O9w==',
    pinfl: '40602952110015',
    fullName: 'SAMANDAROV RUSTAM KARIMBAYEVICH',
    passportNumber: 'AD2404006',
    vinModel:
      'Автотранспортное средство кат. M1 марки: BYD SONG PLUS VIN:LGXCE4CB0S0289566',
    cookie:
      '_pk_id.1.d579=40149437781441b3.1744217882.; smart_top=1; pevaOun6hphKuMxXIGRaDhmAzaVL3uQfLKMMfkB2G=63c40b91ee7eafe173f56cd233c4b553126066b059a68cf04745d2b811537f6ea%3A2%3A%7Bi%3A0%3Bs%3A41%3A%22pevaOun6hphKuMxXIGRaDhmAzaVL3uQfLKMMfkB2G%22%3Bi%3A1%3Bs%3A689%3A%22eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzUxMiJ9.eyJpc3MiOiJteTMuZ292LnV6IiwiYXVkIjoiTXlHb3YgQVBJIiwianRpIjoiOTNkOTJiNWMtYjAyNC0zMTdjLTg1ZGMtOWRlYmZmYTM0OGI0Iiwic3ViIjoiOGE1M2Q2NzUtYzNjMy00NjY3LTllMjktYjQzZDUzODRkZDg1IiwiaWF0IjoxNzQ0NzA3MDA2LCJuYmYiOjE3NDQ3MDcwMDYsImV4cCI6MTc0NDcwOTEwNiwidV91aWQiOiI4YTUzZDY3NS1jM2MzLTQ2NjctOWUyOS1iNDNkNTM4NGRkODUiLCJzX3VpZCI6IjkzZDkyYjVjLWIwMjQtMzE3Yy04NWRjLTlkZWJmZmEzNDhiNCIsImFjY2Vzc190eXBlIjoiY2l0aXplbiIsInRpbiI6MCwidXNlcl90eXBlIjoiSSIsInBsYXRmb3JtIjoid2ViIiwiY29tcGFueV9pZCI6bnVsbH0.AAyRzRPN6WVHuhhjQa23W3Q0keJqi_HbDLKM-OEb19Z7qR72qEMkpFO1Rdi8VvPlrYUKD-RHxXUZ1Yiz3U5rmYSlATi5UMoW3j-vlZFIcV_tLFDXaaY4Ya2bKVvBl80xP4nX1XhF6dywebsftprBfeke-ydXfhedEo9uLobtlAfaY2dS%22%3B%7D; epigu-common=glmu14jnkeaajkkiv4ggdt7rad; _identity-common=9d601b8111330c3d178b02ee4967f88ee2561e1b2a69ba71259cacde3b958ae5a%3A2%3A%7Bi%3A0%3Bs%3A16%3A%22_identity-common%22%3Bi%3A1%3Bs%3A19%3A%22%5B133496%2Ctrue%2C86400%5D%22%3B%7D; _csrf-myap=4e756e28cfaa55e3f401c23908a20692288564b7229c834a6e86c184f561a3dea%3A2%3A%7Bi%3A0%3Bs%3A10%3A%22_csrf-myap%22%3Bi%3A1%3Bs%3A32%3A%22WAa8BE3EvdfRPZFh6pIQThJAmcF15QEM%22%3B%7D; _language=c42fec7cd3531209cc9f8f603970ef73f63f4ae9accb0e76f765fe336aa2f53ca%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_language%22%3Bi%3A1%3Bs%3A2%3A%22uz%22%3B%7D; _pk_ses.1.d579=1',
  },
  {
    enabled: false,
    taskId: '187208462',
    csrf: 'N3TUmEcYl5-N5AGcAfy1V8vYKUjOlxBznyNOrDLp-HUPML-sLi7F3dqHT99TiocEobxgIfvBZhfOETj5B5GNTA==',
    pinfl: '40602952110015',
    fullName: 'SALOMOVA NILUFAR MAMURJON QIZI',
    passportNumber: 'AD6703547',
    vinModel:
      'Автотранспортное средство кат. M1, марки BYD SONG PLUS Champion VIN: LGXCE4CB8S0285863',
    cookie:
      '_pk_id.1.d579=9826e05df7b52e72.1742880705.; smart_top=1; _pk_ref.1.d579=%5B%22%22%2C%22%22%2C1744474370%2C%22https%3A%2F%2Fwww.google.com%2F%22%5D; epigu-common=u6j1dc3qujlhgrtamn33elc8o0; _identity-common=23747907e6fd31bc6f9226ba00cf6a0527350cc7d3002268038cf059b4d5be42a%3A2%3A%7Bi%3A0%3Bs%3A16%3A%22_identity-common%22%3Bi%3A1%3Bs%3A21%3A%22%5B11571900%2Ctrue%2C86400%5D%22%3B%7D; _csrf-myap=a5b67b30c5af52be501ed3797ff3da435c528d4cd9226b36223bdf1ed28a26b2a%3A2%3A%7Bi%3A0%3Bs%3A10%3A%22_csrf-myap%22%3Bi%3A1%3Bs%3A32%3A%228Dk4i6RBWcNCRv2SjdIi5VvdQ2vU5xu9%22%3B%7D; _language=c42fec7cd3531209cc9f8f603970ef73f63f4ae9accb0e76f765fe336aa2f53ca%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_language%22%3Bi%3A1%3Bs%3A2%3A%22uz%22%3B%7D',
  },
  {
    enabled: true,
    taskId: '187301450',
    csrf: 'xK8nKdXhTinK5YJRvXZO4nCJhNvKhzNXUz7SlZhy3sn07UZNkqwIGpK28CGEBjSBHL3rnp_YRSMUCuDs2y3ukA==',
    pinfl: '40705580190074',
    fullName: 'AXMEDOVA TAMARA DJUMANIYAZOVNA',
    passportNumber: 'AB2086436',
    vinModel:
      'Автотранспортное средство кат. M1, марки BYD SONG PLUS VIN: LGXCE4CB6S0281276',
    cookie:
      '_pk_id.1.d579=40149437781441b3.1744217882.; smart_top=1; _pk_ses.1.d579=1; pevaOun6hphKuMxXIGRaDhmAzaVL3uQfLKMMfkB2G=52e369b8772d91ee8ba285bf1013b9c0a3b75737da8e616f5d6fb7b0649e8e0ea%3A2%3A%7Bi%3A0%3Bs%3A41%3A%22pevaOun6hphKuMxXIGRaDhmAzaVL3uQfLKMMfkB2G%22%3Bi%3A1%3Bs%3A689%3A%22eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzUxMiJ9.eyJpc3MiOiJteTMuZ292LnV6IiwiYXVkIjoiTXlHb3YgQVBJIiwianRpIjoiYmQyODE2ODctMmE0OC0zMGUzLWFiYzctYzQ5NzZjMTI0YTNhIiwic3ViIjoiYjhjNDU5ZDMtMTNlZS00Njk2LWE4OTUtNWEyNmE1Mjc3MTBkIiwiaWF0IjoxNzQ0NDc3MDk0LCJuYmYiOjE3NDQ0NzcwOTQsImV4cCI6MTc0NDQ3OTE5NCwidV91aWQiOiJiOGM0NTlkMy0xM2VlLTQ2OTYtYTg5NS01YTI2YTUyNzcxMGQiLCJzX3VpZCI6ImJkMjgxNjg3LTJhNDgtMzBlMy1hYmM3LWM0OTc2YzEyNGEzYSIsImFjY2Vzc190eXBlIjoiY2l0aXplbiIsInRpbiI6MCwidXNlcl90eXBlIjoiSSIsInBsYXRmb3JtIjoid2ViIiwiY29tcGFueV9pZCI6bnVsbH0.AEobWH78a2n0THjKyCmlZtztFpU9jfoQtwaNiZA2morsD_2dKIwxOy8lGa5EeDdqIQyDD3AYh54Y8zXrf7m8tjhSAV0mLDqGaCkSVTdlN0Kcxnw6Lg2UbvWN9vE828GDLgcjh-m7c3-1k2NA0PcLiNuTow3cj3RaOeWi2dSNTVgGM7Ai%22%3B%7D; epigu-common=uocr1f6ed1decg7kcgq8sk93gu; _identity-common=16d89f969898e6ef916f255d31050c173a0ed87940be2271dcc13a2607f457a1a%3A2%3A%7Bi%3A0%3Bs%3A16%3A%22_identity-common%22%3Bi%3A1%3Bs%3A19%3A%22%5B887935%2Ctrue%2C86400%5D%22%3B%7D; _csrf-myap=362fc28c14c0bc129bc57346c7ee8b7859c4b586d052c60da5f28ef0fc562f98a%3A2%3A%7Bi%3A0%3Bs%3A10%3A%22_csrf-myap%22%3Bi%3A1%3Bs%3A32%3A%220BadGMF3XSrp9pzcl4oEU_vtG42yC_0Y%22%3B%7D; _language=c42fec7cd3531209cc9f8f603970ef73f63f4ae9accb0e76f765fe336aa2f53ca%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_language%22%3Bi%3A1%3Bs%3A2%3A%22uz%22%3B%7D',
  },
  {
    enabled: false,
    taskId: '186962283',
    csrf: 'Fe8stq5SEEXkCmpfW2pJ8byMXTWTjJId500tqQn_rNotvGjs7R9HI55rIBAYPnHFy-glBqP1pV-NJ0SafK6VjA==',
    pinfl: '30501902110033',
    fullName: 'ERGASHEV SHERZODBEK MAMURJONOVICH',
    passportNumber: 'AA7285326',
    vinModel:
      'Автотранспортное средство кат. M1, марки BYD SONG PLUS Champion VIN: LGXCE4CB3S0281252',
    cookie:
      '_pk_id.1.d579=40149437781441b3.1744217882.; smart_top=1; _pk_ses.1.d579=1; pevaOun6hphKuMxXIGRaDhmAzaVL3uQfLKMMfkB2G=433b81c4e71ff96eec6a5b8697087268852e0d69dc86ee2afee02936ffe1f376a%3A2%3A%7Bi%3A0%3Bs%3A41%3A%22pevaOun6hphKuMxXIGRaDhmAzaVL3uQfLKMMfkB2G%22%3Bi%3A1%3Bs%3A689%3A%22eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzUxMiJ9.eyJpc3MiOiJteTMuZ292LnV6IiwiYXVkIjoiTXlHb3YgQVBJIiwianRpIjoiNzY5NjY2YTUtYTk4Yy0zZDM2LWFmZDUtZmQ2NjViOGZmNDU4Iiwic3ViIjoiYmVlZWM3NzEtMjA5Yi00MTllLThhNWQtYjA2YjU0Mzg3MWMxIiwiaWF0IjoxNzQ0NDc3MjExLCJuYmYiOjE3NDQ0NzcyMTEsImV4cCI6MTc0NDQ3OTMxMSwidV91aWQiOiJiZWVlYzc3MS0yMDliLTQxOWUtOGE1ZC1iMDZiNTQzODcxYzEiLCJzX3VpZCI6Ijc2OTY2NmE1LWE5OGMtM2QzNi1hZmQ1LWZkNjY1YjhmZjQ1OCIsImFjY2Vzc190eXBlIjoiY2l0aXplbiIsInRpbiI6MCwidXNlcl90eXBlIjoiSSIsInBsYXRmb3JtIjoid2ViIiwiY29tcGFueV9pZCI6bnVsbH0.AOVMfqj1ThwttDL6P0hdRizq8JNN_AIp1QkMPUv-2EfA8zsV4kk6K5eocLw3dWoJ9tPJ5jeOIJ3ZwoiEQkFLYi5BAAL4J81J3vSuS_NIqAzcf5Bj5zzpFd6W7dWN9WHEMmSr8P05qS1Nt2KVaMzCb88aw1Fxkx_J7FksJECZs0fKwojU%22%3B%7D; epigu-common=fq7vj8qmb8r9qns1e8s610tg2h; _identity-common=47765cb5e4a3f001b14152e301b6ae8e865d2fb981da8750db023f1f750da3c7a%3A2%3A%7Bi%3A0%3Bs%3A16%3A%22_identity-common%22%3Bi%3A1%3Bs%3A21%3A%22%5B11564832%2Ctrue%2C86400%5D%22%3B%7D; _csrf-myap=4bb542ea04326351414f6afab59ce7d75d6efb6cf4dae3f760668d265260e68ca%3A2%3A%7Bi%3A0%3Bs%3A10%3A%22_csrf-myap%22%3Bi%3A1%3Bs%3A32%3A%228SDZCMWfzaJOCT84wdx30y7Bjji3uQ9V%22%3B%7D; _language=c42fec7cd3531209cc9f8f603970ef73f63f4ae9accb0e76f765fe336aa2f53ca%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_language%22%3Bi%3A1%3Bs%3A2%3A%22uz%22%3B%7D',
  },
  {
    enabled: false,
    taskId: '187096817',
    csrf: 'a2Tw0HTHqcim1pcJx1Gg2XF7sS2550NiFCV3vyKjoEEgBZ6pJ5Ph-P-Apn-hE-G2OjDuQMCXOjshbzb3aNLzOQ==',
    pinfl: '41604717090014',
    fullName: 'URAZMETOVA SAODAT SABURBAYEVNA',
    passportNumber: 'AD4067374',
    vinModel:
      'Автотранспортное средство кат. M1, марки BYD SONG PLUS Champion VIN: LGXCE4CB5S0278126',
    cookie:
      '_pk_id.1.d579=40149437781441b3.1744217882.; smart_top=1; _pk_ses.1.d579=1; pevaOun6hphKuMxXIGRaDhmAzaVL3uQfLKMMfkB2G=2615381644a9b66e8b8174d8db4edc7d6a0194d995d9ea08eb97c27739ff123aa%3A2%3A%7Bi%3A0%3Bs%3A41%3A%22pevaOun6hphKuMxXIGRaDhmAzaVL3uQfLKMMfkB2G%22%3Bi%3A1%3Bs%3A689%3A%22eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzUxMiJ9.eyJpc3MiOiJteTMuZ292LnV6IiwiYXVkIjoiTXlHb3YgQVBJIiwianRpIjoiNWYyMWIxY2UtZWJmMS0zOGM0LWI1MjMtMmJkZjJiOWQ0MjhkIiwic3ViIjoiN2IyYzg5MWQtOWM1My00NzdhLThiODYtYWYzZjc5ZDgwNDQwIiwiaWF0IjoxNzQ0NDc3Mzk2LCJuYmYiOjE3NDQ0NzczOTYsImV4cCI6MTc0NDQ3OTQ5NiwidV91aWQiOiI3YjJjODkxZC05YzUzLTQ3N2EtOGI4Ni1hZjNmNzlkODA0NDAiLCJzX3VpZCI6IjVmMjFiMWNlLWViZjEtMzhjNC1iNTIzLTJiZGYyYjlkNDI4ZCIsImFjY2Vzc190eXBlIjoiY2l0aXplbiIsInRpbiI6MCwidXNlcl90eXBlIjoiSSIsInBsYXRmb3JtIjoid2ViIiwiY29tcGFueV9pZCI6bnVsbH0.ANNKEfZL9Gwwr-KxcVuJ6NxEzrPggkEgDJ-C8L6-rn1wzyXss2ufESk7gYb4bMvgV9vzMSOoRg-Y0sE1IugyHFSpAEFXq6AKsaNLWiiuRLeYWa4dtDCuJX95usI2VmFpffcIELbkab9NH1LYH1b3Vn5gyAs4NyLCILlBybFq5wR4M8Dh%22%3B%7D; epigu-common=mus7eeagva0bdlhe5pku6tsgm0; _identity-common=ec45a2ab6e66b427b970137dfd3d8e9acfce1b355cd28cf8a3ab02e0e7fa7f66a%3A2%3A%7Bi%3A0%3Bs%3A16%3A%22_identity-common%22%3Bi%3A1%3Bs%3A20%3A%22%5B8266057%2Ctrue%2C86400%5D%22%3B%7D; _csrf-myap=74e711257ee6915e287796fd666b73590ba9f0eb814acbf59f0b30265fa25bd0a%3A2%3A%7Bi%3A0%3Bs%3A10%3A%22_csrf-myap%22%3Bi%3A1%3Bs%3A32%3A%22KanySTH0YV1vfBAoKK_mypyY5JAHJqSx%22%3B%7D; _language=c42fec7cd3531209cc9f8f603970ef73f63f4ae9accb0e76f765fe336aa2f53ca%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_language%22%3Bi%3A1%3Bs%3A2%3A%22uz%22%3B%7D',
  },
]

const errorRegex = /<div class="alert alert-danger">(.+?)<\/div>/s
const commentRegex = /<\!--.*?-->/g

async function post({
  taskId,
  csrf,
  pinfl,
  fullName,
  passportNumber,
  vinModel,
  date,
  slot,
  cookie,
  owner,
}) {
  const url = `https://oldmy.gov.uz:4433/uz/vehicle-certification/default/index?retry=2&taskId=${taskId}`
  const body = {
    actionBook: 'submit',
    '_csrf-myap': csrf,
    'VehicleCertificationModel[pinfl]': pinfl,
    'VehicleCertificationModel[full_name]': fullName,
    'VehicleCertificationModel[passport_number]': passportNumber,
    'VehicleCertificationModel[vin_model]': vinModel,
    'VehicleCertificationModel[date]': date,
    'VehicleCertificationModel[hour]': slot,
  }
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Origin: 'https://oldmy.gov.uz',
    Cookie: cookie,
  }
  const { data } = await axios.post(url, body, { headers })
  const regexResp = data.match(errorRegex)
  if (
    // data.includes('Навбатга қўйиш имкони бўлмади, кейинроқ қайта уриниб кўринг')
    regexResp.length > 1
  ) {
    const errorMessage = regexResp[1].replace(commentRegex, '').trim()
    console.log('failure', date, slot, fullName.padEnd(40, '.'), errorMessage)
    throw new Error(`${owner} ${date} ${slot}`)
  } else {
    console.log('success', date, slot, fullName)
  }
}

for (const { enabled, ...item } of items) {
  if (!enabled) continue
  ;(async () => {
    for (const slot of remeda.shuffle(slots)) {
      try {
        await post({ ...item, date, slot })
        break
      } catch (error) {
        continue
      }
    }
  })()
}

domain = 'https://localhost:7269';

// let result = {
//     "dishes": [{
//         "id": "a6d5cfc1-71c2-43c7-8ff1-8894e30b870c",
//         "name": "Кітті",
//         "description": "Ніжна шинка, стиглі томати та картопля фрі, сир моцарела на вершковому соусі.",
//         "veightOrCm": 830,
//         "price": 125,
//         "linkToImage": "2.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "435740cc-9469-4116-a6b3-2b06621c9fba",
//         "name": "Мисливська",
//         "description": "Ніжна шинка, мисливські ковбаски, солодка цибуля з сиром моцарела на червоному соусі",
//         "veightOrCm": 830,
//         "price": 125,
//         "linkToImage": "3.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "6940b67a-cd29-4a35-9b91-24b7de2a9ecb",
//         "name": "Чікен Чіз",
//         "description": "Ароматне куряче філе з ніжною шинкою, томатами, вершками, сиром горгонзола та моцарела.",
//         "veightOrCm": 830,
//         "price": 125,
//         "linkToImage": "4.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "7acb9922-af0f-413f-8397-b60427c37604",
//         "name": "М'ясна чилі",
//         "description": "Пікантна салямі, прикопчений балик та бекон, з сиром моцарела, перцем чилі на червону соусі",
//         "veightOrCm": 830,
//         "price": 125,
//         "linkToImage": "5.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "82ebf5cf-27b8-452c-8737-6cfb22d2a2d1",
//         "name": "Монтана",
//         "description": "Прикопчений балик, стиглі томати, бринза та сир моцарела на вершковому соусі.",
//         "veightOrCm": 830,
//         "price": 85,
//         "linkToImage": "6.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "eb534587-fa59-4313-a87f-9dfad8df89e8",
//         "name": "Класико",
//         "description": "Ніжна шинка та печериці, сир моцарела на вершковому соусі.",
//         "veightOrCm": 830,
//         "price": 85,
//         "linkToImage": "7.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "58ae3cae-dea9-4023-ae2c-0b47c871a57f",
//         "name": "Базиліката",
//         "description": "Ароматне куряче філе, томати, сир моцарела та базилік на червоному соусі.",
//         "veightOrCm": 830,
//         "price": 85,
//         "linkToImage": "8.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "97ef3296-36e7-443f-92df-d36fb1deca88",
//         "name": "Пікантне",
//         "description": "Солодка цибуля та болгарський перець, балик та перець чилі з сиром моцарела на червоному соусі.",
//         "veightOrCm": 830,
//         "price": 85,
//         "linkToImage": "9.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "e11cf18c-317e-4237-a9fc-ab797d2c26c9",
//         "name": "4 зірки",
//         "description": "Ніжна шинка, бекон та салямі, пікантний чилі, томати, червона цибуля та печериці з сиром моцарела на червоному соусі.",
//         "veightOrCm": 830,
//         "price": 90,
//         "linkToImage": "10.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "cd6114a5-aa8b-4301-87ae-6c484af8c4ec",
//         "name": "4 види сиру",
//         "description": "Пікантні горгонзола та пармезан, бринза та моцарела на вершковому соусі.",
//         "veightOrCm": 830,
//         "price": 100,
//         "linkToImage": "11.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "ef36f85c-2ad1-4832-9063-0eb88f8ed15c",
//         "name": "4 види м'яса",
//         "description": "Салямі, підкопчений балик, ніжна шинка, мисливські ковбаски, соус барбекю та сир моцарела на червоному соусі.",
//         "veightOrCm": 830,
//         "price": 105,
//         "linkToImage": "12.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "28614dd7-c93f-4779-a11d-49f4aed3e6f5",
//         "name": "4 пори року",
//         "description": "Ніжна шинка, салямі, підкопчений балик та печериці з сиром моцарела на червоному соусі",
//         "veightOrCm": 830,
//         "price": 105,
//         "linkToImage": "13.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "a725d689-b06d-4d02-9e6c-ceff1beab436",
//         "name": "Курка BBQ",
//         "description": "Ароматна курка, прикопчений бекон та червона цибуля, соус барбекю,сир моцарела на червоному соусі.",
//         "veightOrCm": 830,
//         "price": 95,
//         "linkToImage": "14.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "b5beaeb7-bb01-404c-9585-b1af3ac70fff",
//         "name": "Капрезе",
//         "description": "Ароматне куряче філе та томати, базилік,соус песто, моцарела на вершковому соусі.",
//         "veightOrCm": 830,
//         "price": 95,
//         "linkToImage": "15.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "7c0748ec-7251-47be-bab2-4bea600402e3",
//         "name": "Кальята",
//         "description": "Ніжна шинка з печерицями та сиром моцарела на сирному соусі.",
//         "veightOrCm": 830,
//         "price": 90,
//         "linkToImage": "16.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "5f868d9e-d69b-4ce8-9311-7d2aa2b0938f",
//         "name": "З білими грибами",
//         "description": "Запашні білі гриби, сир моцарела на вершковому соусі.",
//         "veightOrCm": 830,
//         "price": 90,
//         "linkToImage": "17.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "bde07aba-7df2-4877-afab-2af5d545619e",
//         "name": "Джо",
//         "description": "Фарш з ніжної телятини на основі свіжих овочів з сиром моцарела.",
//         "veightOrCm": 830,
//         "price": 120,
//         "linkToImage": "18.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "7f091981-cd39-46d2-aa6b-2c4f0a2393a0",
//         "name": "Вершкова з лососем",
//         "description": "Лосось, соковиті томати та бринза з сиром моцарела на вершковому соусі.",
//         "veightOrCm": 830,
//         "price": 120,
//         "linkToImage": "19.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "07d35e73-41ce-4355-b836-0258350dcfde",
//         "name": "Прімо мікс",
//         "description": "Стиглі томати та кукурудза, ароматна курка та шинка, ніжна бринза та горгонзола з соусом песто та базиліком, сир моцарела та вершки.",
//         "veightOrCm": 830,
//         "price": 100,
//         "linkToImage": "20.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "31d7609a-9aa3-41da-bdc1-563d6147ab48",
//         "name": "Чізаро",
//         "description": "Прикопчений балик,солодкий болгарський перець та цибуля з сиром моцарела на сирному соусі.",
//         "veightOrCm": 830,
//         "price": 90,
//         "linkToImage": "21.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "b2993386-bd2c-4f14-b3f6-7b5e6f6e3ceb",
//         "name": "Ніжна курка",
//         "description": "Ароматне куряче філе, томати, кукурудза з сиром моцарела на вершковому соусі.",
//         "veightOrCm": 830,
//         "price": 90,
//         "linkToImage": "22.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "6cde9695-14e7-43f1-8ef1-5e8aae975be0",
//         "name": "Мексиканська",
//         "description": "Прикопчений бекон, кукурудза, червона цибуля та перець чилі з сиром моцарела на червоному соусі.",
//         "veightOrCm": 830,
//         "price": 85,
//         "linkToImage": "23.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "9d3c4efc-fef1-495b-b9b6-134b2c588940",
//         "name": "Груша-горгонзола",
//         "description": "Пікантні горгонзола та пармезан, соковита груша та моцарела на вершковому соусі.",
//         "veightOrCm": 830,
//         "price": 100,
//         "linkToImage": "24.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "6cd24ac2-a284-40fb-8b8e-0148e3354960",
//         "name": "Гавайська",
//         "description": "Ніжна шинка, ананас, кукурудза з вершками та сиром моцарела",
//         "veightOrCm": 830,
//         "price": 95,
//         "linkToImage": "25.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "58f89897-3707-4ae3-bdad-b5d7d1be7351",
//         "name": "Мирина",
//         "description": "Ароматна курка і шинка з томатами, вершками та сиром моцарела",
//         "veightOrCm": 830,
//         "price": 105,
//         "linkToImage": "26.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "f68207bc-fca6-4444-9ef4-b0158ac67a89",
//         "name": "Гурман",
//         "description": "Тріо з підкопченого балику, салямі, курки з сиром моцарела на червоному соусі",
//         "veightOrCm": 830,
//         "price": 105,
//         "linkToImage": "27.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "e7c74bd5-f0fc-48bb-8adb-fdbae408720a",
//         "name": "Сицилійська",
//         "description": "Салямі, ніжна шинка та солодка кукурудза з сиром моцарела на червоному соусі",
//         "veightOrCm": 830,
//         "price": 95,
//         "linkToImage": "28.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "fac3c9ba-9f79-4343-9b3d-ec2434abea78",
//         "name": "Маргарита",
//         "description": "Стиглі томати, сир моцарела на червоному соусі з орегано",
//         "veightOrCm": 830,
//         "price": 75,
//         "linkToImage": "29.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "62527dfa-c71a-47a1-97d3-9c44b96a6b8c",
//         "name": "Овочева",
//         "description": "Печериці, стиглі томати, кукурудза та маслини з лимонним соусом на червоному соусі.",
//         "veightOrCm": 830,
//         "price": 95,
//         "linkToImage": "31.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "f07c7f85-6812-416d-8b9d-37d601e6c0ae",
//         "name": "Мелані",
//         "description": "Ароматне куряче філе з картоплею фрі, стиглими томатами, вершками і сиром моцарела",
//         "veightOrCm": 830,
//         "price": 105,
//         "linkToImage": "32.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "cc193c97-fe70-4d1a-ae78-265feb07a113",
//         "name": "Цезар",
//         "description": "Цезар",
//         "veightOrCm": 830,
//         "price": 115,
//         "linkToImage": "33.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "1c3a39c2-78e6-443b-959a-0ea6c44ec0f5",
//         "name": "Пепероні",
//         "description": "Салямі, перець чилі з сиром моцарела на червоному соусі",
//         "veightOrCm": 830,
//         "price": 90,
//         "linkToImage": "34.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "2f7c29c3-204e-4fb5-a2f6-f743e2fd46e9",
//         "name": "Пепе-Цезар",
//         "description": "Дві найяскравіші піци об'єдналися разом аби подвоїти ваше задоволення",
//         "veightOrCm": 830,
//         "price": 120,
//         "linkToImage": "35.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "9ff6175d-3cb5-4b51-8249-8430f31da457",
//         "name": "Капрічіоза",
//         "description": "Ніжна шинка, печериці, кукурудза з сиром моцарела на червоному соусі",
//         "veightOrCm": 830,
//         "price": 90,
//         "linkToImage": "36.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "3d9f9893-aa37-45d1-b7e5-a26aa0390668",
//         "name": "Американська",
//         "description": "Ароматне куряче філе, червона цибуля, кукурудза з сиром моцарела на червоному соусі",
//         "veightOrCm": 830,
//         "price": 90,
//         "linkToImage": "37.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "3fe13096-75f4-444f-8b17-5cc7243c3138",
//         "name": "Вершкова Маргарита",
//         "description": "Стиглі томати, сир моцарела на вершковому соусі з орегано",
//         "veightOrCm": 830,
//         "price": 75,
//         "linkToImage": "38.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "ae4eb9bb-02fe-45cc-81bc-51802e9aaefe",
//         "name": "Карбонара",
//         "description": "Ніжна шинка та печериці, з прикопченим беконом, вершками та сиром моцарела",
//         "veightOrCm": 830,
//         "price": 110,
//         "linkToImage": "39.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "88fff215-a634-47f4-8771-1f1265139a69",
//         "name": "Дон Бекон",
//         "description": "Ароматне куряче філе, з солодкою цибулею, з прикопченим беконом, вершками та сиром моцарела",
//         "veightOrCm": 830,
//         "price": 105,
//         "linkToImage": "40.jpg",
//         "tags": "pizza"
//     }, {
//         "id": "9802eef6-fff9-4b21-8d73-cda7e64bf977",
//         "name": "Все й одразу",
//         "description": "Картопля фрі,стріпси курячі,курячі крильця лагідні та чилі,моцарелла фрі,соус гостро-солодкий,соус ягідний,соус Цезар",
//         "veightOrCm": 830,
//         "price": 280,
//         "linkToImage": "41.jpg",
//         "tags": "snacks"
//     }, {
//         "id": "803f52fb-6566-4b6c-85c9-2e4b4fd3c7ed",
//         "name": "Курячі стріпси",
//         "description": "Смужки соковитого курячого філе у легкій паніровці",
//         "veightOrCm": 200,
//         "price": 85,
//         "linkToImage": "42.jpg",
//         "tags": "snacks"
//     }, {
//         "id": "2e5bae4a-08f1-4024-9216-2fb95ccfcb96",
//         "name": "Курячі крильця лагідні",
//         "description": "Легкі та ніжні на смак курячі крильця",
//         "veightOrCm": 250,
//         "price": 85,
//         "linkToImage": "43.jpg",
//         "tags": "snacks"
//     }, {
//         "id": "243bb4b5-11a1-4720-8c67-d29a8b4963d7",
//         "name": "Курячі крильця чилі",
//         "description": "Курячі крильця у гострій глазурі",
//         "veightOrCm": 250,
//         "price": 85,
//         "linkToImage": "44.jpg",
//         "tags": "snacks"
//     }, {
//         "id": "12c60a3e-7b0c-4212-873f-6ea8192f273e",
//         "name": "Картопля фрі",
//         "description": "Хрустка картопля фрі з золотою скоринкою",
//         "veightOrCm": 110,
//         "price": 35,
//         "linkToImage": "45.jpg",
//         "tags": "snacks"
//     }, {
//         "id": "3f57e578-f7a0-4d63-8345-b9ef9f01fa14",
//         "name": "Картопля по-селянськи",
//         "description": null,
//         "veightOrCm": 150,
//         "price": 35,
//         "linkToImage": "46.jpg",
//         "tags": "snacks"
//     }, {
//         "id": "499d6861-f184-44b7-b24d-6f56916b96c3",
//         "name": "Картопля по-селянськи з беконом та смаженими грибами",
//         "description": null,
//         "veightOrCm": 200,
//         "price": 50,
//         "linkToImage": "47.jpg",
//         "tags": "snacks"
//     }, {
//         "id": "841fab86-0841-4e78-bf9d-5592fdd5893f",
//         "name": "Моцарела фрі з ягідним соусом",
//         "description": "Ніжна моцера у поєднанні з кисло-солодким ягідним соусом",
//         "veightOrCm": 140,
//         "price": 60,
//         "linkToImage": "48.jpg",
//         "tags": "snacks"
//     }, {
//         "id": "8365e56d-be2d-41d2-8f45-c1bde7db7d65",
//         "name": "Цезар-рол",
//         "description": "Лаваш, капуста пекінська, томати, огірок, соус Цезар, сир тостовий, смажене куряче філе у сухарях",
//         "veightOrCm": 350,
//         "price": 90,
//         "linkToImage": "49.jpg",
//         "tags": "snacks"
//     }, {
//         "id": "674fb020-2053-4dca-957c-32966e853c8a",
//         "name": "Курка-шаурма",
//         "description": "Лаваш, капуста, морква, смажене куряче філе, огірок, помідор, соус Лимонний",
//         "veightOrCm": 350,
//         "price": 90,
//         "linkToImage": "50.jpg",
//         "tags": "snacks"
//     }, {
//         "id": "7dbc3bab-8f6a-48c2-8ea5-c07ddd1eec68",
//         "name": "Грецький",
//         "description": "Томати, огірки, перець болгарський, маслини, червона цибуля, бринза, заправка з оливкової олії та лимона, орегано",
//         "veightOrCm": 230,
//         "price": 80,
//         "linkToImage": "51.jpg",
//         "tags": "snacks"
//     }, {
//         "id": "b4c01eed-8e05-4854-aea1-84facaea8b69",
//         "name": "Цезар",
//         "description": "Смажене куряче філе, томати, хрусткі листя Aйсбергу, пармезан, соус Цезар, хрумкі тости.",
//         "veightOrCm": 230,
//         "price": 95,
//         "linkToImage": "52.jpg",
//         "tags": "snacks"
//     }, {
//         "id": "949cfed3-1298-4d51-a50a-96fdbec54dea",
//         "name": "Легкий салат з сиром горгонзола",
//         "description": "Салат айзберг, горгонзола, томати, груша, грецький горіх, заправка оливкова",
//         "veightOrCm": 170,
//         "price": 65,
//         "linkToImage": "53.jpg",
//         "tags": "snacks"
//     }, {
//         "id": "d6967379-b8f5-4b06-9fe0-2b55575dd8ed",
//         "name": "Паста Карбонара",
//         "description": "Тальятеле, обсмажений бекон, вершковий соус, яйце пашот та пармезан",
//         "veightOrCm": 260,
//         "price": 90,
//         "linkToImage": "54.jpg",
//         "tags": "snacks"
//     }, {
//         "id": "f4c925c4-53cb-409f-83ac-1f5bed99b9c8",
//         "name": "Паста Квадро Формаджо",
//         "description": "Тальятеле, пармезан, горгонзола, моцарела, бринза, вершковий соус",
//         "veightOrCm": 265,
//         "price": 95,
//         "linkToImage": "55.jpg",
//         "tags": "snacks"
//     }, {
//         "id": "0f4de685-7bc9-460f-80d8-e99a1bb09394",
//         "name": "Паста з куркою та грибами",
//         "description": "Тальятеле, курка, печериці, пармезан, вершковий соус",
//         "veightOrCm": 270,
//         "price": 80,
//         "linkToImage": "56.jpg",
//         "tags": "snacks"
//     }, {
//         "id": "8a1da6bf-6d35-46f4-876a-90a4134944d9",
//         "name": "Хрумкі тости",
//         "description": null,
//         "veightOrCm": 90,
//         "price": 10,
//         "linkToImage": "57.jpg",
//         "tags": "snacks"
//     }, {
//         "id": "21b16ad6-16a1-49f6-a1c9-fbecbf5c5138",
//         "name": "Каліфорнія з вугром",
//         "description": "Рис, вугор, авокадо, ікра тобіко, норі, огірок свіжий",
//         "veightOrCm": 209,
//         "price": 155,
//         "linkToImage": "58.jpg",
//         "tags": "sushi"
//     }, {
//         "id": "75f22327-0fa6-49f8-a835-06d6dacd52ef",
//         "name": "Філадельфія з вугром",
//         "description": "Рис, сир Філадельфія, авокадо, норі, вугор, соус Унагі, кунжут білий",
//         "veightOrCm": 243,
//         "price": 155,
//         "linkToImage": "59.jpg",
//         "tags": "sushi"
//     }, {
//         "id": "39ac3f5b-6c26-451f-85f7-7716d98de4df",
//         "name": "Каліфорнія з лососем",
//         "description": "Рис, лосось, авокадо, ікра тобіко, норі, огірок свіжий",
//         "veightOrCm": 209,
//         "price": 145,
//         "linkToImage": "60.jpg",
//         "tags": "sushi"
//     }, {
//         "id": "6dd13860-24c4-49bd-9362-82626569e817",
//         "name": "Філадельфія з лососем",
//         "description": "Рис, сир Філадельфія, авокадо, норі, лосось",
//         "veightOrCm": 223,
//         "price": 145,
//         "linkToImage": "61.jpg",
//         "tags": "sushi"
//     }, {
//         "id": "3b681b51-3a2a-4e98-b768-47a50df3873c",
//         "name": "Макі з вугром",
//         "description": "Рис, вугор, норі, соус Унагі, кунжут білий, огірок свіжий",
//         "veightOrCm": 165,
//         "price": 105,
//         "linkToImage": "62.jpg",
//         "tags": "sushi"
//     }, {
//         "id": "7f787abb-d3ea-46ce-808d-e4f7cde49269",
//         "name": "Макі з лососем",
//         "description": "Рис, лосось, авокадо, норі",
//         "veightOrCm": 150,
//         "price": 100,
//         "linkToImage": "63.jpg",
//         "tags": "sushi"
//     }, {
//         "id": "978450e1-eaa3-429e-93c4-8ddfaaf60f64",
//         "name": "Бургер «Цезар»",
//         "description": "Хрустка булочка та Айзберг, стиглі томати, котлета куряча, сир тостовий, смажене куряче яйце, соус Цезар",
//         "veightOrCm": 407,
//         "price": 125,
//         "linkToImage": "64.jpg",
//         "tags": "burger"
//     }, {
//         "id": "17871ac0-21ed-4b12-b72d-1767fc687110",
//         "name": "Бургер «Нью Йорк»",
//         "description": "Хрустка булочка та Айзберг, свіжі томати, котлета зі свинини, сир тостовий, цибуля синя, соус Цезар",
//         "veightOrCm": 372,
//         "price": 125,
//         "linkToImage": "65.jpg",
//         "tags": "burger"
//     }, {
//         "id": "135a944d-1d53-4915-b9c4-1cf9d5363ed1",
//         "name": "Бургер «Баварський»",
//         "description": "Підсмажена булочка та котлета зі свинини, огірок маринований, цибуля синя, сир тостовий, стиглі томат, соус Баварський",
//         "veightOrCm": 362,
//         "price": 125,
//         "linkToImage": "66.jpg",
//         "tags": "burger"
//     }, {
//         "id": "79ac827c-0ae8-4c39-92ac-1894335ae6e4",
//         "name": "Чікенбургер",
//         "description": "Підсмажена булочка та котлета куряча, обсмажений бекон, хрусткий салат Айсберг, свіжі томати, сир тостовий, огірок свіжий, соус Баварський",
//         "veightOrCm": 407,
//         "price": 130,
//         "linkToImage": "67.jpg",
//         "tags": "burger"
//     }, {
//         "id": "316d2236-2c49-456b-abcc-a98e7873a260",
//         "name": "Чізбургер",
//         "description": "Підсмажена булочка та котлета куряча, подвійний тостовий сир, майонез та кетчуп",
//         "veightOrCm": 264,
//         "price": 105,
//         "linkToImage": "68.jpg",
//         "tags": "burger"
//     }, {
//         "id": "c76a21ce-9b9c-4452-b085-094f654c52e1",
//         "name": "Кока-кола",
//         "description": null,
//         "veightOrCm": 300,
//         "price": 25,
//         "linkToImage": "69.jpg",
//         "tags": "drinks"
//     }, {
//         "id": "8cc11dd8-de24-42ce-9d5f-30a1f2adf378",
//         "name": "Пепсі",
//         "description": null,
//         "veightOrCm": 300,
//         "price": 25,
//         "linkToImage": "70.jpg",
//         "tags": "drinks"
//     }, {
//         "id": "dc7ae78e-7a2f-41e0-a9a9-e2083fe10524",
//         "name": "Пепсі-кола",
//         "description": null,
//         "veightOrCm": 500,
//         "price": 25,
//         "linkToImage": "71.jpg",
//         "tags": "drinks"
//     }, {
//         "id": "43efd2ea-c02a-47e1-8eaa-2649d0a4ace7",
//         "name": "Кока-кола",
//         "description": null,
//         "veightOrCm": 500,
//         "price": 25,
//         "linkToImage": "72.jpg",
//         "tags": "drinks"
//     }, {
//         "id": "a4f878ac-30c5-464f-bc7c-5889aae0435f",
//         "name": "Фанта",
//         "description": null,
//         "veightOrCm": 500,
//         "price": 25,
//         "linkToImage": "73.jpg",
//         "tags": "drinks"
//     }, {
//         "id": "ed1aba6c-7458-41e2-a416-81fbe5c71ddc",
//         "name": "Спрайт",
//         "description": null,
//         "veightOrCm": 500,
//         "price": 25,
//         "linkToImage": "74.jpg",
//         "tags": "drinks"
//     }, {
//         "id": "d81bc9cb-4d32-4918-9897-c79d08fd9c23",
//         "name": "Холодний чай",
//         "description": null,
//         "veightOrCm": 500,
//         "price": 25,
//         "linkToImage": "75.jpg",
//         "tags": "drinks"
//     }, {
//         "id": "871e68fb-088f-4f70-a4e8-400855b4d4e7",
//         "name": "Миргородська",
//         "description": null,
//         "veightOrCm": 500,
//         "price": 25,
//         "linkToImage": "76.jpg",
//         "tags": "drinks"
//     }, {
//         "id": "29622c7e-eaaf-4c84-8b09-fb3a81f9d1fc",
//         "name": "Моршинська с/г",
//         "description": null,
//         "veightOrCm": 500,
//         "price": 25,
//         "linkToImage": "77.jpg",
//         "tags": "drinks"
//     }, {
//         "id": "ad7d3558-678d-41a4-9463-ae6a45404ba8",
//         "name": "Моршинська н/г",
//         "description": null,
//         "veightOrCm": 500,
//         "price": 25,
//         "linkToImage": "68.jpg",
//         "tags": "drinks"
//     }, {
//         "id": "65e50109-bf06-4bdb-9f0e-14f7ecf4ab5a",
//         "name": "Сік Rich Екзотичний Нектар",
//         "description": null,
//         "veightOrCm": 1000,
//         "price": 80,
//         "linkToImage": "69.jpg",
//         "tags": "drinks"
//     }, {
//         "id": "7b3b7b3b-2429-4421-ace2-c3e9ac44e656",
//         "name": "Сік Rich Яблучний",
//         "description": null,
//         "veightOrCm": 1000,
//         "price": 80,
//         "linkToImage": "70.jpg",
//         "tags": "drinks"
//     }, {
//         "id": "1ea75b59-6060-441c-9e45-7211a2121b52",
//         "name": "Сік Rich Томатний",
//         "description": null,
//         "veightOrCm": 1000,
//         "price": 80,
//         "linkToImage": "71.jpg",
//         "tags": "drinks"
//     }, {
//         "id": "c327cc41-7d87-445c-b2d6-7781820daa7e",
//         "name": "Сік Rich Апельсиновий",
//         "description": null,
//         "veightOrCm": 1000,
//         "price": 80,
//         "linkToImage": "72.jpg",
//         "tags": "drinks"
//     }, {
//         "id": "d1c84098-fdc1-4aad-814e-9a64fa4262eb",
//         "name": "Сік Rich Полуниця-банан",
//         "description": null,
//         "veightOrCm": 1000,
//         "price": 80,
//         "linkToImage": "73.jpg",
//         "tags": "drinks"
//     }, {
//         "id": "8a934612-4d72-4c13-81d4-b180d201cb93",
//         "name": "Львівське 1715",
//         "description": null,
//         "veightOrCm": 500,
//         "price": 35,
//         "linkToImage": "74.jpg",
//         "tags": "drinks"
//     }, {
//         "id": "a5ebd12f-f3f2-4923-8c9a-06ba05c9e0b7",
//         "name": "Кроненбург",
//         "description": null,
//         "veightOrCm": 500,
//         "price": 45,
//         "linkToImage": "75.jpg",
//         "tags": "drinks"
//     }]
// }

$(document).ready(function () {



    ////////////////запрос
    // $.ajax({
    //     url: domain + '/api/dish',
    //     type:'get',
    //     dataType: 'json',
    //     success: function(result){
    //         console.log("исходный json объект");
    //         console.log(result);
    //         console.log('');
    //         console.log("перебор");
    //         let specId = 1
    //         for(key in result['dishes']){
    //             if (result['dishes'][key]['tags'] == "pizza"){
    //                 let newCard = '<div class="col-3"> <div class="product-item" data-id=" ' + result['dishes'][key]['id'] + '"> <div class="product-image"><div class="img-wrap"> <img src="images/ '+ result['dishes'][key]['linkToImage'] +'"> </div> </div> <div class="product-name-descr"> <h3 class="product-title"> '+ result['dishes'][key]['name'] +'</h3><div class="product-descr">'+ result['dishes'][key]['description'] +'</div></div><div class="product-price"><span class="price">  '+ result['dishes'][key]['price'] +'₴</span><span class="weight">830 г</span><span class="add-to-cart " id="b '+ specId+'">в кошик</span><div class="amountBlock " id="q '+ specId+'"><span class="minus">-</span><input type="text" value="0" readonly data-id=" '+ specId +'"><span class="plus">+</span></div></div></div></div>'
    //                 $("#pizza-place").append(newCard)
    //                 specId++
    //             } else if (result['dishes'][key]['tags'] == "pizza") {}
    //             console.log(result['dishes'][key]);
    //             console.log(result['dishes'][key]['id']);
    //             console.log(result['dishes'][key]['name']);
    //             console.log(result['dishes'][key]['description']);
    //             console.log(result['dishes'][key]['veightOrCm']);
    //             console.log(result['dishes'][key]['price']);
    //             console.log(result['dishes'][key]['linkToImage']);
    //             console.log(result['dishes'][key]['tags']);
    //         }
    //     }
    // });

    ///////////////////генерация

    // let specId = 1
    // for (key in result['dishes']) {
    //     if (result['dishes'][key]['tags'] == "pizza") {
    //         let pizza = '<div class="col-3"> <div class="product-item" data-id="' + result['dishes'][key]['id'] + '"> <div class="product-image"><div class="img-wrap"> <img src="images/' + result['dishes'][key]['linkToImage'] + '"> </div> </div> <div class="product-name-descr"> <h3 class="product-title">' + result['dishes'][key]['name'] + '</h3><div class="product-descr">' + result['dishes'][key]['description'] + '</div></div><div class="product-price"><span class="price">' + result['dishes'][key]['price'] + ' ₴</span><span class="weight">' + result['dishes'][key]['veightOrCm'] + ' г</span><span class="add-to-cart " id="b' + specId + '">в кошик</span><div class="amountBlock " id="q' + specId + '"><span class="minus">-</span><input type="text" value="0" readonly data-id="' + specId + '"><span class="plus">+</span></div></div></div></div>'
    //         $("#pizza-place").append(pizza)
    //         specId++
    //     } else if (result['dishes'][key]['tags'] == "snacks") {
    //         let snack = '<div class="col-3"><div class="product-item" data-id="' + result['dishes'][key]['id'] + '"><div class="product-image"> <div class="img-wrap"> <img src="images/' + result['dishes'][key]['linkToImage'] + '" alt=" ' + result['dishes'][key]['name'] + '"></div></div><div class="product-name-descr"><h3 class="product-title">' + result['dishes'][key]['name'] + '</h3><div class="product-descr">' + result['dishes'][key]['description'] + '</div></div> <div class="product-price"><span class="price"> ' + result['dishes'][key]['price'] + ' ₴</span><span class="weight"> ' + result['dishes'][key]['veightOrCm'] + ' г</span><span class="add-to-cart " id="b ' + specId + '">в кошик</span><div class="amountBlock " id="q' + specId + '"><span class="minus">-</span><input type="text" value="0" readonly data-id="' + specId + '"><span class="plus">+</span></div></div></div></div>'
    //         $("#snack-place").append(snack)
    //         specId++
    //     } else if (result['dishes'][key]['tags'] == "sushi") {
    //         let sushi = '<div class="col-3"><div class="product-item" data-id="' + result['dishes'][key]['id'] + '"><div class="product-image"> <div class="img-wrap"> <img src="images/' + result['dishes'][key]['linkToImage'] + '" alt=" ' + result['dishes'][key]['name'] + '"></div></div><div class="product-name-descr"><h3 class="product-title">' + result['dishes'][key]['name'] + '</h3><div class="product-descr">' + result['dishes'][key]['description'] + '</div></div> <div class="product-price"><span class="price"> ' + result['dishes'][key]['price'] + ' ₴</span><span class="weight"> ' + result['dishes'][key]['veightOrCm'] + ' г</span><span class="add-to-cart " id="b ' + specId + '">в кошик</span><div class="amountBlock " id="q' + specId + '"><span class="minus">-</span><input type="text" value="0" readonly data-id="' + specId + '"><span class="plus">+</span></div></div></div></div>'
    //         $("#sushi-place").append(sushi)
    //         specId++
    //     } else if (result['dishes'][key]['tags'] == "drinks") {

    //         let drink = '<div class="col-3"> <div class="product-item" data-id="' + result['dishes'][key]['id'] + '"><div class="product-image"><div class="img-wrap"><img src="images/' + result['dishes'][key]['linkToImage'] + '" alt="' + result['dishes'][key]['name'] + '"></div></div><h3 class="product-title">' + result['dishes'][key]['name'] + '</h3><div class="product-liter"><span class="liter">' + result['dishes'][key]['veightOrCm'] + ' мл</span></div><div class="product-price"><span class="price">' + result['dishes'][key]['price'] + ' ₴</span><span class="add-to-cart " id="b' + specId + '">в кошик</span><div class="amountBlock " id="q' + specId + '"><span class="minus">-</span><input type="text" value="0" readonly data-id="' + specId + '"><span class="plus">+</span></div></div></div></div>'
    //         $("#drink-place").append(drink)
    //         specId++

    //     } else if (result['dishes'][key]['tags'] == "burger") {
    //         let burger = '<div class="col-3"><div class="product-item" data-id="' + result['dishes'][key]['id'] + '"><div class="product-image"> <div class="img-wrap"> <img src="images/' + result['dishes'][key]['linkToImage'] + '" alt=" ' + result['dishes'][key]['name'] + '"></div></div><div class="product-name-descr"><h3 class="product-title">' + result['dishes'][key]['name'] + '</h3><div class="product-descr">' + result['dishes'][key]['description'] + '</div></div> <div class="product-price"><span class="price"> ' + result['dishes'][key]['price'] + ' ₴</span><span class="weight"> ' + result['dishes'][key]['veightOrCm'] + ' г</span><span class="add-to-cart " id="b ' + specId + '">в кошик</span><div class="amountBlock " id="q' + specId + '"><span class="minus">-</span><input type="text" value="0" readonly data-id="' + specId + '"><span class="plus">+</span></div></div></div></div>'
    //         $("#burger-place").append(burger)
    //         specId++
    //     }
    // }

    refreshPage("")

    jQuery(".price-in-bag").on('DOMSubtreeModified', function () {
        if (!($(this).text() == null || $(this).text() == undefined || $(this).text() == "")) {
            //console.log($(this).text())
            if ($(this).text() == 0) {
                jQuery(".price-in-bag").addClass("hidden")
                $("#popup-cart").hide().removeClass("open")
            }
        }
    })

    // window.onstorage = event =>{
    //     bufferCart = JSON.parse(localStorage.getItem("cart"))
    //     for (let key in bufferCart) {
    //         console.log(bufferCart[key])
    //         console.log(JSON.parse(event.oldValue)[key])
    //         if(JSON.parse(event.oldValue)[key] == undefined){
    //             console.log(key)
    //             cart = JSON.parse(localStorage.getItem("cart"))
    //             refreshCart(key)
    //             //$(`div[data-id=${key}]`).find('.description').find(".item-count").find(".spinner").find("input").addEventListener("click",refreshPage())
    //             refreshPrice()
    //         }
    //     }
    // }
    window.onstorage = event => {
        //console.log(event.oldValue)
        refreshPage(JSON.parse(event.oldValue))
    }





    var $menu = $("#menu");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $menu.addClass("fixed");
        } else if ($(this).scrollTop() <= 100 && $menu.hasClass("fixed") && !$("#popup-cart").hasClass("open")) {
            $menu.removeClass("fixed");
        }

    });

    if ($("html").scrollTop() > 50) {
        $menu.addClass("fixed");
    }

    jQuery("body").on("click", ".product-item .add-to-cart", (function () {

        $input = jQuery(this).hide().next(".amountBlock").find("input"), $input.val("1"), $input.change(), addToCart($(this))


        if (jQuery(".price-in-bag").hasClass("hidden")) {
            jQuery(".price-in-bag").removeClass("hidden").text("1")
        } else {
            incBag()
        }
    })), jQuery("body").on("click", ".page-index .plus", (function (e) {
        let o = jQuery(this).parent().find("input"),
            t = parseInt(o.val()) + 1;
        incBag()
        $(".cart-item-list").find(`input[data-id = "${o.attr('data-id')}"]`).val(t)

        let price = $(this).parent().parent().find(".price").text()
        console.log(price)
        let orderPrice = $(".js-popup-summary").find("#currentPrice").text()
        orderPrice = parseInt(orderPrice.substring(0, orderPrice.length - 4)) + parseInt(price.substring(0, price.length - 2))
        orderPrice = orderPrice.toString() + " грн"
        $(".js-popup-summary").find("#currentPrice").text(orderPrice)
        let id = $(this).parent().parent().parent().data("id")
        cart[id].amount++
        localStorage.cart = JSON.stringify(cart);
        return o.val(t), o.change(), !1
    })), jQuery("body").on("click", ".page-index .minus", (function (e) {
        e.preventDefault();
        let o = jQuery(this).parent().find("input");
        var t = parseInt(o.val()) - 1;
        decBag()
        $(".cart-item-list").find(`input[data-id = "${o.attr('data-id')}"]`).val(t)

        let price = $(this).parent().parent().find(".price").text()
        console.log(price)
        let orderPrice = $(".js-popup-summary").find("#currentPrice").text()
        orderPrice = parseInt(orderPrice.substring(0, orderPrice.length - 4)) - parseInt(price.substring(0, price.length - 2))
        orderPrice = orderPrice.toString() + " грн"
        $(".js-popup-summary").find("#currentPrice").text(orderPrice)
        let id = $(this).parent().parent().parent().data("id")

        cart[id].amount--

        if (cart[id].amount <= 0) {
            delete cart[id]
            $(".cart-item-list").find(`input[data-id = "${o.attr('data-id')}"]`).parent().parent().parent().parent().remove()
        }
        localStorage.cart = JSON.stringify(cart);

        return t = t < 1 ? 0 : t, o.val(t), o.change(), !1
    })), $(document).on("input change", ".page-index .amountBlock input", (function (e) {
        let o = $("#b" + $(this).data("id")),
            t = $("#q" + $(this).data("id"));
        $(this).val() <= 0 ? (o.css("display", "block"), o.removeClass("disabled"), t.removeClass("shown")) : (o.addClass("disabled"), t.addClass("shown"));
    })), jQuery("body").on("click", ".bag-ico-box", (function () {
        if (!$(".price-in-bag").hasClass("hidden")) {
            var $menu = $("#menu");
            if ($("html").scrollTop() < 50) {
                if ($("#popup-cart").hasClass("open")) {
                    $menu.removeClass("fixed");
                    $("#popup-cart").removeClass("open").css("display", "none")
                } else {
                    $menu.addClass("fixed");
                    $("#popup-cart").addClass("open").css("display", "block")
                }
            } else if ($("#popup-cart").hasClass("open")) {
                $("#popup-cart").removeClass("open").css("display", "none")
            } else {
                $("#popup-cart").addClass("open").css("display", "block")
            }
        }
    })), jQuery("#popup-cart").on("click", ".spin-btn.add-count.js-increment-cart", (function () {
        let o = jQuery(this).parent().find("input"),
            t = parseInt(o.val()) + 1;

        let price = $(this).parent().parent().parent().find(".item-price").text()
        let orderPrice = $(".js-popup-summary").find("#currentPrice").text()
        orderPrice = parseInt(orderPrice.substring(0, orderPrice.length - 4)) + parseInt(price.substring(0, price.length - 2))
        orderPrice = orderPrice.toString() + " грн"
        $(".js-popup-summary").find("#currentPrice").text(orderPrice)

        $(".page-index").find(`input[data-id = "${o.attr('data-id')}"]`).val(t)
        incBag()
        let id = $(this).parent().parent().parent().parent().data("id")

        cart[id].amount++
        localStorage.cart = JSON.stringify(cart);
        //console.log(cart)
        return o.val(t), o.change(), !1
    })), jQuery("#popup-cart").on("click", ".spin-btn.remove-count.js-decrement-cart", (function () {
        let o = jQuery(this).parent().find("input"),
            t = parseInt(o.val()) - 1;

        let price = $(this).parent().parent().parent().find(".item-price").text()
        let orderPrice = $(".js-popup-summary").find("#currentPrice").text()
        orderPrice = parseInt(orderPrice.substring(0, orderPrice.length - 4)) - parseInt(price.substring(0, price.length - 2))
        orderPrice = orderPrice.toString() + " грн"
        $(".js-popup-summary").find("#currentPrice").text(orderPrice)
        let id = $(this).parent().parent().parent().parent().data("id")

        cart[id].amount--


        decBag()
        $(".page-index").find(`input[data-id = "${o.attr('data-id')}"]`).val(t)
        if (t == 0) {
            $(this).parent().parent().parent().parent().remove()
            console.log($(".page-index").find(`input[data-id = "${o.attr('data-id')}"]`).parent().removeClass("shown"))
            $(".page-index").find(`input[data-id = "${o.attr('data-id')}"]`).parent().removeClass("shown").parent().find(".add-to-cart").removeClass("disabled").css("display", "block")
            delete cart[id]
        }
        //console.log(cart)
        localStorage.cart = JSON.stringify(cart);
        return o.val(t), o.change(), !1
    })), jQuery("#popup-cart").on("click", "a.remove", (function () {

        let count = jQuery(".price-in-bag").text()
        let id = $(this).parent().find(".description").find(".item-count").find(".spinner").find("input").attr("data-id")
        $(".page-index").find(`input[data-id = "${id}"]`).val(0)
        $(".page-index").find(`input[data-id = "${id}"]`).parent().removeClass("shown").parent().find(".add-to-cart").removeClass("disabled").css("display", "block")
        count = count - $(this).parent().find(".description").find(".item-count").find(".spinner").find("input").val()
        jQuery(".price-in-bag").text(count)
        jQuery(this).parent().remove()


        let price = $(this).parent().find(".description").find(".item-price").text()
        let itemCount = $(this).parent().find(".description").find(".item-count").find(".spinner").find("input").val()
        let orderPrice = $(".js-popup-summary").find("#currentPrice").text()

        o = parseInt(orderPrice.substring(0, orderPrice.length - 4)) - (parseInt(price.substring(0, price.length - 2)) * parseInt(itemCount))
        orderPrice = o.toString() + " грн"
        $(".js-popup-summary").find("#currentPrice").text(orderPrice)

        let itemId = $(this).parent().data("id")
        delete cart[itemId]
        localStorage.cart = JSON.stringify(cart);
        console.log($(this))
    })), jQuery("#menu").on("click", "a", (function () {
        if ($("#popup-cart").hasClass("open")) {
            $("#popup-cart").removeClass("open").hide()
        }
        let elem = $(this).attr("id")
        let offset = $(elem).offset()
        offset.top = offset.top - 30
        window.scrollTo(offset)
    })), $("#popup-cart").mouseup(function (e) {
        if ($("#popup-cart").hasClass("open")) {
            var div = $(".cart-container");
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                $("#popup-cart").hide().removeClass("open");
            }
        }
    })

    // , $(".price-in-bag").change(function() {
    //     alert( "Handler for .change() called." );
    //    })



    $("button").click(function () {
        //$("html").scrollTop($("html").scrollTop() - 60);
        // let offset = $("#burger").offset()
        // console.log(offset.top)
        // offset.top = offset.top - 45
        // window.scrollTo(offset)
    });
});

function addPitsa() {

    let i = document.getElementsByClassName("#pizza .pr-container .row");
    let e =
        '<div class="col-3"> <div class="product-item"><div class="product-image">        <div class="img-wrap">            <img src="images/1-01.jpg"/>        </div>    </div>    <div class="product-name-descr">  <h3 class="product-title"> pitsa1 </h3>        <div class="product-descr"> i love big pitsa and i cannot lie </div>    </div>    <div class="product-price">        <div class="pw-wrap">            <span class="price">від 50 ₴</span>        </div>        <div class="cart-wrap">            <span class="add-to-cart no-plus" data-group="pizza">вибрати</span>        </div>    </div></div></div>';
    i.append(e)
}

function addToCart(element) {


    let name = element.parent().parent().find("h3").text()
    let price = element.parent().parent().find(".product-price").find(".price").text()
    let img = element.parent().parent().find(".product-image").find(".img-wrap").find("img").attr("src")
    let id = element.parent().find("input").attr("data-id")
    let idItem = element.parent().parent().attr("data-id")


    let amount = 1
    cart[idItem] = {
        "title": name,
        "amount": amount,
        "price": price,
        "imgSrc": img,
    }
    localStorage.cart = JSON.stringify(cart)

    let card = '<div class="cart-item" data-id="' + idItem + '"> <div class="img"> <img src="' + img + '"> </div> <div class="description"> <div class="item-title">' + name + '<span class="subtitle"></span> </div> <div class="item-count"> <div class="spinner" data-product-id="9283"> <div class="spin-btn remove-count js-decrement-cart"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 100 100"> <path d="M72 50c0 1.1-.9 2-2 2H30c-1.1 0-2-.9-2-2s.9-2 2-2h40c1.1 0 2 .9 2 2zm16 0c0 21-17 38-38 38S12 71 12 50s17-38 38-38 38 17 38 38zm-4 0c0-18.8-15.2-34-34-34S16 31.2 16 50s15.2 34 34 34 34-15.2 34-34z" /> <path fill="#00F" d="M1364-1210V474H-420v-1684h1784m8-8H-428V482h1800v-1700z" /> </svg> </div> <input type="text" class="count-field" data-id="' + id + '" value="' + amount + '" readonly=""> <div  class=" spin-btn add-count js-increment-cart"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 100 100"> <path d="M72 50c0 1.1-.9 2-2 2H52v18c0 1.1-.9 2-2 2s-2-.9-2-2V52H30c-1.1 0-2-.9-2-2s.9-2 2-2h18V30c0-1.1.9-2 2-2s2 .9 2 2v18h18c1.1 0 2 .9 2 2zm16 0c0 21-17 38-38 38S12 71 12 50s17-38 38-38 38 17 38 38zm-4 0c0-18.8-15.2-34-34-34S16 31.2 16 50s15.2 34 34 34 34-15.2 34-34z" /> <path fill="#00F" d="M1504-1210V474H-280v-1684h1784m8-8H-288V482h1800v-1700z" /> </svg> </div>  </div> </div> <div class="item-price">' + price + '</div> </div> <a class="remove js-remove-from-cart" data-id="9283" data-current-quantity="1" data-contain-ids="" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 64 64"> <path d="M17.586 46.414c.391.391.902.586 1.414.586s1.023-.195 1.414-.586L32 34.828l11.586 11.586c.391.391.902.586 1.414.586s1.023-.195 1.414-.586a2 2 0 0 0 0-2.828L34.828 32l11.586-11.586a2 2 0 1 0-2.828-2.828L32 29.172 20.414 17.586a2 2 0 1 0-2.828 2.828L29.172 32 17.586 43.586a2 2 0 0 0 0 2.828z" /> <path d="M32 64c8.547 0 16.583-3.329 22.626-9.373C60.671 48.583 64 40.547 64 32s-3.329-16.583-9.374-22.626C48.583 3.329 40.547 0 32 0S15.417 3.329 9.374 9.373C3.329 15.417 0 23.453 0 32s3.329 16.583 9.374 22.626C15.417 60.671 23.453 64 32 64zM12.202 12.202C17.49 6.913 24.521 4 32 4s14.51 2.913 19.798 8.202C57.087 17.49 60 24.521 60 32s-2.913 14.51-8.202 19.798C46.51 57.087 39.479 60 32 60s-14.51-2.913-19.798-8.202C6.913 46.51 4 39.479 4 32s2.913-14.51 8.202-19.798z" /> </svg> </a> </div>'
    let i = $(".cart-item-list");
    i.append(card)

    //parseInt(price.substring(0,price.length - 2)) * amount
    let currentPrice = parseInt($("#currentPrice").text().substring(0, $("#currentPrice").text().length - 4))

    $("#currentPrice").text((currentPrice + (parseInt(price.substring(0, price.length - 2)) * amount)).toString() + " грн")


    // //let id = $(this)

    // let name = $(this).parent().parent().find("h3").text()
    // let price = $(this).parent().parent().find(".product-price").find(".price").text()
    // let img = $(this).parent().parent().find(".product-image").find(".img-wrap").find("img").attr("src")
    // //let amount = $(this).parent().parent().find(".product-price").find(".amountBlock").find("input").val()
    // console.log(name)
    // console.log(price)
    // console.log(img)
    // //console.log(amount)
}

function refreshCart(element) {
    let amount = $(element).find(".product-price").find(".amountBlock.shown").find("input").val()
    let idItem = $(element).attr("data-id")
    let name = element.find(".product-name-descr").find("h3").text()
    if (name == "") {
        name = element.find("h3").text()
    }
    let price = element.find(".product-price").find(".price").text()
    let img = element.find(".product-image").find(".img-wrap").find("img").attr("src")
    let id = element.find(".product-price").find(".amountBlock").find("input").attr("data-id")
    let card = '<div class="cart-item" data-id="' + idItem + '"> <div class="img"> <img src="' + img + '"> </div> <div class="description"> <div class="item-title">' + name + '<span class="subtitle"></span> </div> <div class="item-count"> <div class="spinner" data-product-id="9283"> <div class="spin-btn remove-count js-decrement-cart"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 100 100"> <path d="M72 50c0 1.1-.9 2-2 2H30c-1.1 0-2-.9-2-2s.9-2 2-2h40c1.1 0 2 .9 2 2zm16 0c0 21-17 38-38 38S12 71 12 50s17-38 38-38 38 17 38 38zm-4 0c0-18.8-15.2-34-34-34S16 31.2 16 50s15.2 34 34 34 34-15.2 34-34z" /> <path fill="#00F" d="M1364-1210V474H-420v-1684h1784m8-8H-428V482h1800v-1700z" /> </svg> </div> <input type="text" class="count-field" data-id="' + id + '" value="' + amount + '" readonly=""> <div  class=" spin-btn add-count js-increment-cart"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 100 100"> <path d="M72 50c0 1.1-.9 2-2 2H52v18c0 1.1-.9 2-2 2s-2-.9-2-2V52H30c-1.1 0-2-.9-2-2s.9-2 2-2h18V30c0-1.1.9-2 2-2s2 .9 2 2v18h18c1.1 0 2 .9 2 2zm16 0c0 21-17 38-38 38S12 71 12 50s17-38 38-38 38 17 38 38zm-4 0c0-18.8-15.2-34-34-34S16 31.2 16 50s15.2 34 34 34 34-15.2 34-34z" /> <path fill="#00F" d="M1504-1210V474H-280v-1684h1784m8-8H-288V482h1800v-1700z" /> </svg> </div>  </div> </div> <div class="item-price">' + price + '</div> </div> <a class="remove js-remove-from-cart" data-id="9283" data-current-quantity="1" data-contain-ids="" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 64 64"> <path d="M17.586 46.414c.391.391.902.586 1.414.586s1.023-.195 1.414-.586L32 34.828l11.586 11.586c.391.391.902.586 1.414.586s1.023-.195 1.414-.586a2 2 0 0 0 0-2.828L34.828 32l11.586-11.586a2 2 0 1 0-2.828-2.828L32 29.172 20.414 17.586a2 2 0 1 0-2.828 2.828L29.172 32 17.586 43.586a2 2 0 0 0 0 2.828z" /> <path d="M32 64c8.547 0 16.583-3.329 22.626-9.373C60.671 48.583 64 40.547 64 32s-3.329-16.583-9.374-22.626C48.583 3.329 40.547 0 32 0S15.417 3.329 9.374 9.373C3.329 15.417 0 23.453 0 32s3.329 16.583 9.374 22.626C15.417 60.671 23.453 64 32 64zM12.202 12.202C17.49 6.913 24.521 4 32 4s14.51 2.913 19.798 8.202C57.087 17.49 60 24.521 60 32s-2.913 14.51-8.202 19.798C46.51 57.087 39.479 60 32 60s-14.51-2.913-19.798-8.202C6.913 46.51 4 39.479 4 32s2.913-14.51 8.202-19.798z" /> </svg> </a> </div>'
    let i = $(".cart-item-list");
    i.append(card)
    let currentPrice = parseInt($("#currentPrice").text().substring(0, $("#currentPrice").text().length - 4))
    $("#currentPrice").text((currentPrice + (parseInt(price.substring(0, price.length - 2)) * amount)).toString() + " грн")
}

// function changeAmount(element, amount) {
//     console.log(element.parent().parent().parent().find("h3").text())
//     $("")
// }

function incBag() {
    let count = jQuery(".price-in-bag").text()
    count++
    jQuery(".price-in-bag").text(count)
}

function decBag() {
    let count = jQuery(".price-in-bag").text()
    count--
    jQuery(".price-in-bag").text(count)
}

function refreshPage(oldValue) {
    $("#currentPrice").text("0 грн")
    $(".cart-item-list").empty()
    $(".price-in-bag").text("0")
    if (Object.keys(oldValue).length > 0) {
        for (let key in oldValue) {
            $(`div[data-id=${key}]`).find(".product-price").find(".add-to-cart").show().removeClass("disabled")
            $(`div[data-id=${key}]`).find(".product-price").find(".amountBlock").removeClass("shown").find("input").val(0)
        }
    }



    if (JSON.parse(localStorage.getItem("cart")) == null) {
        cart = {}
    } else {
        cart = JSON.parse(localStorage.getItem("cart"))
        if (Object.keys(cart).length > 0) {
            //console.log(cart)
            //console.log(Object.keys(cart).length)
            $(".price-in-bag").removeClass("hidden")
            for (let key in cart) {
                if (cart.hasOwnProperty(key)) {
                    $(`div[data-id=${key}]`).find(".product-price").find(".add-to-cart").hide()
                    $(`div[data-id=${key}]`).find(".product-price").find(".amountBlock").addClass("shown").find("input").val(cart[key].amount)
                    let count = $(".price-in-bag").text()
                    let amount = parseInt(count) + cart[key].amount
                    $(".price-in-bag").text(amount.toString())
                    refreshCart($(`div[data-id=${key}]`))
                }
            }
        }
    }
}
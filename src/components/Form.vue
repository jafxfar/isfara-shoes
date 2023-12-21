<template>
    <div class="mx-28 mb-8 xl:flex lg:flex hidden flex-row">
        <div class=" my-16 mx-4 p-3 flex flex-col w-2/5 gap-4 bg-white border-2  rounded-lg border-primary">
            <div class="flex justify-start items-start my-2">
                <h1 class="text-xl font-medium">Оформить заказ</h1>
            </div>
            <form @submit="sendData" name="submit-to-google-sheet">
                <input type="text" id="full_name"
                    class="py-2 my-2 px-4 w-full border border-primary rounded-lg placeholder:text-sm focus:outline-none"
                    placeholder="Введите ваше имя" v-model="full_name" required />
                <input :class="{ 'error': error }" type="text"
                    class="py-2 my-2 px-4 w-full border border-primary rounded-lg placeholder:text-sm focus:outline-none"
                    placeholder="Введите ваш номер" v-model="phone" id="phone" required />
                <input id="product" name="product" :class="{ 'error': error }" type="text"
                    class="py-2 my-2 px-4 w-full border border-primary rounded-lg placeholder:text-sm focus:outline-none"
                    placeholder="Введите артикул обуви" v-model="vendor_code" required />
                <div class="text-red-600 " v-if="error">{{ error }}</div>
                <div class="flex flex-row w-full gap-4">
                    <button type="submit" class="bg-primary text-white font-bold my-2 py-2 w-full rounded-lg">
                        Оформить
                    </button>
                </div>
            </form>
        </div>
        <div class="my-16 mx-4 p-3 flex flex-col w-3/5">
            <h1 class="text-4xl font-semibold">Скачайте каталог нашей продукции или заполните форму и мы сами вам позвоним!
            </h1>
            <button @click="downloadPdf" class="px-4 py-2 bg-primary text-xl text-white rounded-lg w-2/5 mt-8">Скачать
                каталог</button>
        </div>
    </div>
    <!-- mob -->
    <div class="xl:hidden lg:hidden  flex w-full flex-wrap">
        <div class="mx-4 w-full flex flex-row">
            <h1 class="w-11/12 text-xl font font-semibold">Каталог</h1>
            <button @click="downloadPdf">
                <span class="flex justify-end">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="download">
                            <path id="Vector"
                                d="M4 16.3074V17.3074C4 18.103 4.31607 18.8661 4.87868 19.4287C5.44129 19.9913 6.20435 20.3074 7 20.3074H17C17.7956 20.3074 18.5587 19.9913 19.1213 19.4287C19.6839 18.8661 20 18.103 20 17.3074V16.3074M16 12.3074L12 16.3074M12 16.3074L8 12.3074M12 16.3074V4.30737"
                                stroke="#D8BC59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>
                </span>
            </button>
        </div>
        <div class="mx-4 my-2 w-full">
            <p>Скачайте каталог нашей продукции или заполните форму и мы сами вам позвоним </p>
            <form @submit="sendData">
                <input type="text"
                    class="py-2.5 px-4 mt-2 mb-1 w-full border border-primary rounded-lg placeholder:text-sm focus:outline-none "
                    placeholder="Введите ваше имя" v-model="full_name" id="full_name">
                <input :class="{ 'error': error }" v-model="phone" id="phone" @input="validateInput" type="text"
                    class="py-2.5 px-4 mt-1 mb-2 w-full border border-primary rounded-lg placeholder:text-sm focus:outline-none"
                    placeholder="Введите ваш номер" />
                <input id="product" name="product" :class="{ 'error': error }" type="text"
                    class="py-2 my-2 px-4 w-full border border-primary rounded-lg placeholder:text-sm focus:outline-none"
                    placeholder="Введите артикул обуви" v-model="product" required />
                <div class="text-red-600 " v-if="error">{{ error }}</div>
                <div class="flex flex-row w-full gap-4">
                    <button type="submit"
                        class="bg-primary text-white font-bold py-2.5 w-full text-md rounded-lg">
                        Оформить
                    </button>
                </div>
            </form>
        </div>
    </div>
    <!--  -->
</template>

<script>
import axios from 'axios'
export default {
    name: 'the-form',
    data() {
        return {
            inputValue: '',
            isFormVisable: false,
            isModalVisible: false,
            cardNumber: '',
            amount: null,
            phoneNumber: "",
            error: "",
            full_name: '',
            phone: '',
            vendor_code: '',
        }
    },
    methods: {
        validateInput() {
            const value = this.phoneNumber;
            const isValid = /^[0-9+]*$/.test(value);

            if (!isValid) {
                this.error = "Введите номер";
            } else {
                this.error = "";
            }
        },

        sendData() {
            const apiUrl = 'http://92.63.177.68:9990/api/feedback';

            const userData = {
                full_name: this.full_name,
                phone: this.phone,
                vendor_code: this.vendor_code,
            };

            const config = {
                headers: {
                    Authorization: 'Bearer 6928026295:AAEwg49YbfesszTEFlvCXDDmw_y-WFx4zzU',
                    'Content-Type': 'application/json',
                    // Другие необходимые заголовки
                },
            };

            axios.post(apiUrl, userData, config)
                .then(response => {
                    console.log('Success:', response.data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
        downloadPdf() {
            const pdfUrl = 'https://disk.yandex.ru/i/F-Ybie86Fjnhpw'; // Укажите путь к вашему PDF-файлу
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'document.pdf'; // Имя файла PDF
            link.target = '_blank'; // Открывать в новой вкладке
            link.click();
        },
    }
}
</script>


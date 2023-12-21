<template>
    <div class=" flex xl:flex-row lg:flex-row flex-col justify-center gap-4 xl:mt-4 lg:mt-4 mt-0 xl:mx-16 lg:mx-16 mx-0">
        <div class="relative xl:w-1/2 lg:w-1/2  w-full md:w-1/2 overflow-hidden">
            <transition name="fade" mode="out-in">
                <img :src="currentImage" :alt="altText" key="currentImage" class="w-full">
            </transition>
            <button @click="prevSlide"
                class="rotate-180 prev-btn absolute top-1/2 transform -translate-y-1/2 left-1 px-1 py-0.5 cursor-pointer">
                <svg class="xl:w-12 lg:w-12 w-8" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="" height="" viewBox="0 0 306 306"
                    style="enable-background:new 0 0 306 306;" xml:space="preserve">
                    <g>
                        <g id="keyboard-arrow-right">
                            <polygon points="58.65,267.75 175.95,153 58.65,35.7 94.35,0 247.35,153 94.35,306" />
                        </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                </svg></button>
            <button @click="nextSlide"
                class="next-btn absolute top-1/2 transform -translate-y-1/2 right-1 px-1 py-0.5  cursor-pointer">
                <svg class="xl:w-12 lg:w-12 w-8" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="" height="" viewBox="0 0 306 306"
                    style="enable-background:new 0 0 306 306;" xml:space="preserve">
                    <g>
                        <g id="keyboard-arrow-right">
                            <polygon points="58.65,267.75 175.95,153 58.65,35.7 94.35,0 247.35,153 94.35,306" />
                        </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                </svg>
            </button>
        </div>

        <div
            class="flex xl:bg-one lg:bg-one bg-white xl:rounded-2xl lg:rounded-2xl rounded-none flex-col font-medium xl:py-8 lg:py-8 py-0 xl:px-8 lg:px-8 px-4 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full">
            <h1 class="xl:text-3xl lg:text-3xl text-md xl:font-semibold lg:font-semibold font-semibold my-4">Зимняя обувь
            </h1>
            <div class="flex flex-row gap-12 ">
                <div class="">
                    <p class="text-gray-400 font-normal text-sm">Артикл:</p>
                    <h4 class="text-sm">201-40</h4>
                </div>
                <div class="">
                    <p class="text-gray-400 font-normal text-sm">Размеры: </p>
                    <h4 class="text-sm">39-44</h4>
                </div>
            </div>
            <div class="my-2">
                <p class="text-gray-400 font-normal text-sm">Описание: </p>
                <h4 class="text-sm">Верхний материал - натуральная телячья кожа
                    Подкладка - байка/мех шерстяной
                    Подошва - ТЭП (термоэластопласт)</h4>
            </div>
        </div>
    </div>



    <div class="xl:flex lg:flex hidden flex-col flex-wrap mx-16 my-8">
        <div class="flex flex-row flex-wrap  justify-between m-4">
            <h3 class="text-xl font-medium">Наша продукция</h3>
            <router-link to="/product">
                <button class="px-4 py-2 rounded-lg text-white bg-primary flex flex-row">
                    Посмотреть все
                    <svg class="my-1" width="16" height="17" viewBox="0 0 16 17" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="chevron-right">
                            <path id="Vector" fill-rule="evenodd" clip-rule="evenodd"
                                d="M5.83482 12.3995C5.68484 12.2495 5.60059 12.046 5.60059 11.8339C5.60059 11.6218 5.68484 11.4183 5.83482 11.2683L8.46922 8.63391L5.83482 5.99951C5.68909 5.84863 5.60845 5.64654 5.61028 5.43679C5.6121 5.22703 5.69623 5.02638 5.84456 4.87805C5.99289 4.72973 6.19354 4.64559 6.40329 4.64377C6.61305 4.64195 6.81513 4.72258 6.96601 4.86831L10.166 8.06831C10.316 8.21833 10.4002 8.42178 10.4002 8.63391C10.4002 8.84604 10.316 9.04949 10.166 9.19951L6.96601 12.3995C6.81599 12.5495 6.61255 12.6337 6.40042 12.6337C6.18828 12.6337 5.98484 12.5495 5.83482 12.3995Z"
                                fill="white" />
                        </g>
                    </svg>
                </button>
            </router-link>
        </div>
        <div class="flex justify-center flex-row gap-4">
            <router-link to="/product-single-two">
                <img src="@/assets/product/cross/2.png" alt="5">
                <h1 class="text-black">Артикул:904-22</h1>
                <p class="text-black">Размеры:39-44</p>
            </router-link>
            <router-link to="/product-single-nine">
                <img src="@/assets/product/cross/9.png" alt="6">
                <h1 class="text-black">Артикул:822-12</h1>
                <p class="text-black">Размеры:39-44</p>
            </router-link>
            <router-link to="/product-single-five">
                <img src="@/assets/product/cross/5.png" alt="7">
                <h1 class="text-black">Артикул:910-15</h1>
                <p class="text-black">Размеры:39-44</p>
            </router-link>
            <router-link to="/product-single-seventeen">
                <img src="@/assets/product/cross/17.png" alt="8">
                <h1 class="text-black">Артикул:722-10</h1>
                <p class="text-black">Размеры:39-44</p>
            </router-link>
        </div>
    </div>
    <!-- mob -->
    <div class="xl:hidden lg:hidden flex flex-col mx-4 mt-4">
        <h3 class="text-lg font-semibold my-2">Другие товары</h3>
        <div class="flex flex-row gap-2">
            <router-link to="/product-single-five">
                <img src="@/assets/product/cross/5.png" alt="7">
                <h1 class="text-black">Артикул:910-15</h1>
                <p class="text-black">Размеры:39-44</p>
            </router-link>
            <router-link to="/product-single-seventeen">
                <img src="@/assets/product/cross/17.png" alt="8">
                <h1 class="text-black">Артикул:722-10</h1>
                <p class="text-black">Размеры:39-44</p>
            </router-link>
        </div>
        <div class="mr-4">
            <router-link class="xl:hidden lg:hidden flex justify-center flex-row w-full mt-4" to="/product">
                <button
                    class="bg-primary flex flex-row items-center justify-center text-white font-semibold py-2 w-full rounded-lg">
                    <p class="text-md">Посмотреть еще</p>
                    <svg class="mt-1 ml-1 flex justify-center items-center" width="16" height="17" viewBox="0 0 16 17"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="chevron-right">
                            <path id="Vector" fill-rule="evenodd" clip-rule="evenodd"
                                d="M5.83482 12.3995C5.68484 12.2495 5.60059 12.046 5.60059 11.8339C5.60059 11.6218 5.68484 11.4183 5.83482 11.2683L8.46922 8.63391L5.83482 5.99951C5.68909 5.84863 5.60845 5.64654 5.61028 5.43679C5.6121 5.22703 5.69623 5.02638 5.84456 4.87805C5.99289 4.72973 6.19354 4.64559 6.40329 4.64377C6.61305 4.64195 6.81513 4.72258 6.96601 4.86831L10.166 8.06831C10.316 8.21833 10.4002 8.42178 10.4002 8.63391C10.4002 8.84604 10.316 9.04949 10.166 9.19951L6.96601 12.3995C6.81599 12.5495 6.61255 12.6337 6.40042 12.6337C6.18828 12.6337 5.98484 12.5495 5.83482 12.3995Z"
                                fill="white" />
                        </g>
                    </svg>
                </button>
            </router-link>
        </div>
    </div>
    <!--  -->
</template>

<script>
import one from "@/assets/product/cross/20b.png"
import two from "@/assets/product/cross/20.png"

export default {
    name: 'product-single-one',
    data() {
        return {
            images: [two, one],

            currentSlide: 0,
        }
    },
    computed: {
        currentImage() {
            return this.images[this.currentSlide];
        },
        altText() {
            return `Image ${this.currentSlide + 1}`;
        },
    },
    methods: {
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
        },
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.images.length;
        },
    },
    mounted() {
        window.scrollTo(0, 0);
    }
}
</script>
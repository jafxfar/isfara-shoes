<template>
    <h1 class="xl:text-3xl lg:text-3xl text-2xl  font-semibold xl:mx-24 lg:mx-12 mx-4">Наша продукция</h1>
    <div class="flex flex-wrap justify-center text-left">

        <div class="flex flex-col  xl:my-8 lg:my-8 my-4">
            <div class="xl:flex lg:flex hidden flex-col  my-8">
                <div class="flex flex-row justify-between mx-24 my-4">
                    <h3 class="text-2xl font-medium">Кроссовки</h3>
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
                <div class="flex flex-col xl:mx-2 lg:mx-2 mx-6">
                    <div class="flex flex-wrap justify-center items-center mb-8 xl:w-full lg:w-full w-full">
                        <div v-for="product in CrossProducts" :key="product.id"
                            class="flex justify-center xl:m-3 lg:mx-3 mx-2 my-4 bg-none rounded-lg shadow-none w-40 xl:w-1/5 lg:w-1/5 md:w-1/3 relative">
                            <router-link :to="product.link">
                                <img :src="product.image" class="w-full h-28 xl:h-48 lg:h-48 object-cover mb-2" />
                                <h1>Артикул:{{ product.articul }}</h1>
                                <h1>Размеры:{{ product.size }} </h1>

                                <div class="xl:text-md lg:text-md text-sm text-black py-1"></div>
                                <div class="text-black text-sm pb-1"></div>
                            </router-link>
                        </div>
                    </div>

                </div>
            </div>
            <div class="xl:flex lg:flex hidden flex-col  my-8">
                <div class="flex flex-row justify-between mx-24 my-4">
                    <h3 class="text-xl font-medium">Классическая обувь</h3>
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
                <div class="flex flex-col xl:mx-2 lg:mx-2 mx-6">
                    <div class="flex flex-wrap justify-center items-center mb-8 xl:w-full lg:w-full w-full">
                        <div v-for="product in ClassProducts" :key="product.id"
                            class="flex justify-center xl:m-3 lg:mx-3 mx-2 my-4 bg-none rounded-lg shadow-none w-40 xl:w-1/5 lg:w-1/5 md:w-1/3 relative">
                            <router-link :to="product.link">
                                <img :src="product.image" class="w-full h-28 xl:h-48 lg:h-48 object-cover mb-2" />
                                <h1>Артикул:{{ product.articul }}</h1>
                                <h1>Размеры:{{ product.size }} </h1>

                            </router-link>
                        </div>
                    </div>

                </div>
            </div>

            <!-- mob  -->
            <div class="xl:hidden lg:hidden flex flex-col mx-4 mt-4">
                <div class="flex flex-row gap-2">
                    <router-link to="/product-single-one">
                        <img src="@/assets/product/cross/one.png" alt="7">
                        <h1 class="text-black">Артикул:910-15</h1>
                        <p class="text-black">Размеры:39-44</p>
                    </router-link>
                    <router-link to="/product-single-nineteen">
                        <img src="@/assets/product/cross/19.png" alt="8">
                        <h1 class="text-black">Артикул:280-10</h1>
                        <p class="text-black">Размеры:39-44</p>
                    </router-link>
                </div>
            </div>
            <div class="xl:hidden lg:hidden flex flex-col mx-4 mt-4">
                <div class="flex flex-row gap-2">
                    <router-link to="/product-single-eight">
                        <img src="@/assets/product/cross/8.png" alt="7">
                        <h1 class="text-black">Артикул:860-12</h1>
                        <p class="text-black">Размеры:39-44</p>
                    </router-link>
                    <router-link to="/product-single-fiveteen">
                        <img src="@/assets/product/cross/15.png" alt="8">
                        <h1 class="text-black">Артикул:701-10</h1>
                        <p class="text-black">Размеры:39-44</p>
                    </router-link>
                </div>
            </div>
            <router-link class="xl:hidden lg:hidden flex justify-center flex-row w-11/12 ml-4 mt-4 mr-2" to="/product">
                <button
                    class="bg-primary flex flex-row items-center justify-center text-white font-semibold py-2 w-full rounded-lg">
                    <p class="text-md">Продукция</p>
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
            <!--  -->


        </div>
    </div>
</template>

<script>
import one from "@/assets/product/cross/one.png"
import two from "@/assets/product/cross/2.png"
import three from "@/assets/product/cross/3.png"
import four from "@/assets/product/cross/4.png"


import eight from "@/assets/product/cross/8.png"
import fiveteen from "@/assets/product/cross/15.png"
import sixteen from "@/assets/product/cross/16.png"
import seventeen from "@/assets/product/cross/17.png"
export default {
    name: 'the-example',
    data() {
        return {
            CrossProducts: [
                { id: 'one', image: one, link: '/product-single-one', articul: ' 904-15', size: ' 39-44' },
                { id: 'two', image: two, link: '/product-single-two', articul: ' 904-22', size: ' 39-44' },
                { id: 'three', image: three, link: '/product-single-three', articul: ' 906-15', size: ' 39-44' },
                { id: 'four', image: four, link: '/product-single-four', articul: ' 903-15', size: ' 39-44' },
            ],
            ClassProducts: [
                { id: 'eight', image: eight, link: '/product-single-eight', articul: ' 860-12', size: ' 39-44' },
                { id: 'fiveteen', image: fiveteen, link: '/product-single-fiveteen', articul: ' 701-10', size: ' 39-44' },
                { id: 'sixteen', image: sixteen, link: '/product-single-sixteen', articul: ' 702-10', size: ' 39-44' },
                { id: 'seventeen', image: seventeen, link: '/product-single-seventeen', articul: ' 722-10', size: ' 39-44' },
            ],
        }
    }
}
</script>
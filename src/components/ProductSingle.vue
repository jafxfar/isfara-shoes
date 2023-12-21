<template>
    <div class=" flex xl:flex-row lg:flex-row flex-col justify-center gap-4 xl:mt-4 lg:mt-4 mt-0 xl:mx-16 lg:mx-16 mx-0">
        <div class="xl:w-1/2 lg:w-1/2 w-full">
            <img class="xl:w-11/12 lg:w-11/12 w-full" :src="mainImageSrc" alt="Main Image">

            <!-- Thumbnail Images -->
            <div class="xl:flex lg:flex hidden flex-row mt-2 xl:gap-3 lg:gap-2">
                <img v-for="(image, index) in thumbnailImages" :key="index" :src="image" :width="thumbnailWidth"
                    class="w-21.6%" @click="changeMainImage(index)" alt="">
            </div>
            <!-- mob -->
            <div class="xl:hidden lg:hidden flex flex-row mt-2 gap-2 mx-4   ">
                <img src="../assets/IMG_8563.png" width="23.1%" class="" alt="">
                <img src="../assets/IMG_8563.png" width="23.1%" alt="">
                <img src="../assets/IMG_8563.png" width="23.1%" alt="">
                <img src="../assets/IMG_8563.png" width="23.1%" alt="">
            </div>
            <!--  -->
        </div>

        <div
            class="flex xl:bg-one lg:bg-one bg-white xl:rounded-2xl lg:rounded-2xl rounded-none flex-col font-medium xl:py-8 lg:py-8 py-0 xl:px-8 lg:px-8 px-4 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full">
            <h1 class="xl:text-3xl lg:text-3xl text-md xl:font-semibold lg:font-semibold font-semibold my-4">Air-jordan 3
                generation</h1>
            <div class="flex flex-row gap-12 ">
                <div class="">
                    <p class="text-gray-400 font-normal text-sm">Размеры </p>
                    <h4 class="text-sm">36-45</h4>
                </div>
                <div class="">
                    <p class="text-gray-400 font-normal text-sm">Артикл:</p>
                    <h4 class="text-sm">1999-99</h4>
                </div>
                <div class="">
                    <p class="text-gray-400 font-normal text-sm">Размеры: </p>
                    <h4 class="text-sm">36-45</h4>
                </div>
            </div>
            <div class="my-2">
                <p class="text-gray-400 font-normal text-sm">Описание: </p>
                <h4 class="text-sm">Тут будет опудет описание для обув Lorem ipsum dolor sit amet consectetur,
                    adipisicing
                    elit. Alias neque tempore enim cum doloremque beatae harum nulla vero quasi quo.?</h4>
            </div>
        </div>
    </div>



    <div class="xl:flex lg:flex hidden flex-col flex-wrap mx-16 my-8">
        <div class="flex flex-row flex-wrap  justify-between m-4">
            <h3 class="text-xl font-medium"><span class="text-gray-400">Тип:</span> El-Classico per i ricchi</h3>
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
            <router-link to="/product-single">
                <img src="../assets/IMG_8563.png" alt="5">
                <h1 class="text-gray-400">Название: <span class="text-black"> Al-Fredo</span></h1>
                <p class="text-gray-400">Сезон: <span class="text-black"> Осенний</span></p>
            </router-link>
            <router-link to="/product-single">
                <img src="../assets/IMG_8601.png" alt="6">
                <h1 class="text-gray-400">Название: <span class="text-black"> Al-Fredo</span></h1>
                <p class="text-gray-400">Сезон: <span class="text-black"> Осенний</span></p>
            </router-link>
            <router-link to="/product-single">
                <img src="../assets/IMG_8571.png" alt="7">
                <h1 class="text-gray-400">Название: <span class="text-black"> Al-Fredo</span></h1>
                <p class="text-gray-400">Сезон: <span class="text-black"> Осенний</span></p>
            </router-link>
            <router-link to="/product-single">
                <img src="../assets/2023-11-0115.30.png" alt="8">
                <h1 class="text-gray-400">Название: <span class="text-black"> Al-Fredo</span></h1>
                <p class="text-gray-400">Сезон: <span class="text-black"> Осенний</span></p>
            </router-link>
        </div>
    </div>
    <!-- mob -->
    <div class="xl:hidden lg:hidden flex flex-col mx-4 mt-4">
        <h3 class="text-lg font-semibold my-2">Похожие товары</h3>
        <div class="flex flex-row gap-2">
            <router-link to="/product-single">
                <img src="../assets/IMG_8601.png" alt="5">
                <h1 class="text-black text-sm">Air-jordan 3 generation</h1>
                <p class="text-black text-sm">280 сомони</p>
            </router-link>
            <router-link to="/product-single">
                <img src="../assets/IMG_8601.png" alt="5">
                <h1 class="text-black text-sm">Air-jordan 3 generation</h1>
                <p class="text-black text-sm">280 сомони</p>
            </router-link>
        </div>
    </div>
    <!--  -->
</template>

<script>
export default {
    name: 'product-single',
    data() {
        return {
            SimpleProducts: [
                { title: 'Air-jordan 3 generation', subtitle: '280 сомони', liked: false, imageUrl: '/path/to/product3.jpg' },
                { title: 'Air-jordan 3 generation', subtitle: '280 сомони', liked: false, imageUrl: '/path/to/product3.jpg' },
                { title: 'Air-jordan 3 generation', subtitle: '280 сомони', liked: false, imageUrl: '/path/to/product3.jpg' },
                { title: 'Air-jordan 3 generation', subtitle: '280 сомони', liked: false, imageUrl: '/path/to/product3.jpg' },
            ],
            mainImageSrc: 'C:/Users/ASUS/Desktop/isfara_shoes/src/assets/IMG_8624.png',
            thumbnailImages: [
                'C:/Users/ASUS/Downloads/image1.png', // Replace with the absolute paths of your thumbnail images
                'C:/Users/ASUS/Downloads/image2.png',
                'C:/Users/ASUS/Downloads/image3.png',
                'C:/Users/ASUS/Downloads/image4.png'
            ],
            thumbnailWidth: '21.6%' // Adjust the width of thumbnails as needed
        }
    },
    methods: {
        changeMainImage(index) {
            // Update the main image source when a thumbnail is clicked
            this.mainImageSrc = this.thumbnailImages[index];
        }
    }
}
</script>
<template>
      <div class=" product bg-gray-100 ">
            <h1 class="xl:text-4xl lg:text-4xl text-3xl font-semibold xl:mx-16 lg:mx-12 mx-6 xl:mb-8 lg:mb-8 my-4">Продукция
            </h1>
            <div class="flex flex-col xl:mx-16 lg:mx-16 mx-6">
                  <h1 class="text-2xl font-medium">Кроссовки</h1>
                  <div class="flex flex-wrap justify-center items-center mb-8 xl:w-full lg:w-full w-full">
                        <div v-for="product in CrossProducts" :key="product.id"
                              class="flex justify-center xl:m-3 lg:mx-3 mx-2 my-4 bg-none rounded-lg shadow-none w-36 xl:w-1/5 lg:w-1/5 md:w-1/3 relative">
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
            <div class="flex flex-col xl:mx-16 lg:mx-16 mx-6">
                  <h1 class="text-2xl font-medium">Мокасины и Лоферы</h1>
                  <div class="flex flex-wrap justify-center items-center mb-8 xl:w-full lg:w-full w-full">
                        <div v-for="product in MokasProducts" :key="product.id"
                              class="flex justify-center xl:m-3 lg:mx-3 mx-2 my-4 bg-none rounded-lg shadow-none w-36 xl:w-1/5 lg:w-1/5 md:w-1/3 relative">
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
            <div class="flex flex-col xl:mx-16 lg:mx-16 mx-6">
                  <h1 class="text-2xl font-medium">Классическая обувь</h1>
                  <div class="flex flex-wrap justify-center items-center mb-8 xl:w-full lg:w-full w-full">
                        <div v-for="product in ClassProducts" :key="product.id"
                              class="flex justify-center xl:m-3 lg:mx-3 mx-2 my-4 bg-none rounded-lg shadow-none w-36 xl:w-1/5 lg:w-1/5 md:w-1/3 relative">
                              <router-link :to="product.link">
                                    <img :src="product.image" class="w-full h-28 xl:h-48 lg:h-48 object-cover mb-2" />
                                    <h1>Артикул:{{ product.articul }}</h1>
                                    <h1>Размеры:{{ product.size }} </h1>

                              </router-link>
                        </div>
                  </div>

            </div>
            <div class="flex flex-col xl:mx-16 lg:mx-16 mx-6">
                  <h1 class="text-2xl font-medium">Зимняя коллекция</h1>
                  <div class="flex flex-wrap justify-center items-center mb-8 xl:w-full lg:w-full w-full">
                        <div v-for="product in WinterProducts" :key="product.id"
                              class="flex justify-center xl:m-3 lg:mx-3 mx-2 my-4 bg-none rounded-lg shadow-none w-36 xl:w-1/5 lg:w-1/5 md:w-1/3 relative">
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
</template>

<script>
// cross
import one from "@/assets/product/cross/one.png"
import two from "@/assets/product/cross/2.png"
import three from "@/assets/product/cross/3.png"
import four from "@/assets/product/cross/4.png"
import five from "@/assets/product/cross/5.png"
import six from "@/assets/product/cross/6.png"
// 
// mokas
import seven from "@/assets/product/cross/7.png"
import nine from "@/assets/product/cross/9.png"
import ten from "@/assets/product/cross/10.png"
import eleven from "@/assets/product/cross/11.png"
import twelwe from "@/assets/product/cross/12.png"
import thirdteen from "@/assets/product/cross/13.png"
import fourteen from "@/assets/product/cross/14.png"
import twentyeight from "@/assets/product/cross/28.png"
// 
// classic
import eight from "@/assets/product/cross/8.png"
import fiveteen from "@/assets/product/cross/15.png"
import sixteen from "@/assets/product/cross/16.png"
import seventeen from "@/assets/product/cross/17.png"
// 
// winter
import nineteen from "@/assets/product/cross/19.png"
import twenty from "@/assets/product/cross/20.png"
import twentyone from "@/assets/product/cross/21.png"
import twentytwo from "@/assets/product/cross/22.png"
import twentythree from "@/assets/product/cross/23.png"
import twentyfour from "@/assets/product/cross/24.png"
import twentyfive from "@/assets/product/cross/25.png"
import twentysix from "@/assets/product/cross/26.png"
import twentyseven from "@/assets/product/cross/27.png"

// 
export default {
      name: 'the-recomendation',
      data() {
            return {
                  CrossProducts: [
                        { id: 'one', image: one, link: '/product-single-one', articul: ' 904-15', size: ' 39-44' },
                        { id: 'two', image: two, link: '/product-single-two', articul: ' 904-22', size: ' 39-44' },
                        { id: 'three', image: three, link: '/product-single-three', articul: ' 906-15', size: ' 39-44' },
                        { id: 'four', image: four, link: '/product-single-four', articul: ' 903-15', size: ' 39-44' },
                        { id: 'five', image: five, link: '/product-single-five', articul: ' 910-15', size: ' 39-44' },
                        { id: 'six', image: six, link: '/product-single-six', articul: ' 907-15', size: ' 39-44' },


                  ],
                  MokasProducts: [
                        { id: 'seven', image: seven, link: '/product-single-seven', articul: ' 830-22', size: ' 39-44' },
                        { id: 'nine', image: nine, link: '/product-single-nine', articul: ' 822-12', size: ' 39-44' },
                        { id: 'ten', image: ten, link: '/product-single-ten', articul: ' 823-10', size: ' 39-44' },
                        { id: 'eleven', image: eleven, link: '/product-single-eleven', articul: ' 821-12', size: ' 39-44' },
                        { id: 'twelwe', image: twelwe, link: '/product-single-twelwe', articul: ' 812-41', size: ' 40-44' },
                        { id: 'thirdteen', image: thirdteen, link: '/product-single-thirdteen', articul: ' 812-40', size: ' 40-44' },
                        { id: 'fourteen', image: fourteen, link: '/product-single-fourteen', articul: ' 811-13', size: ' 40-44' },
                        { id: 'twentyeight', image: twentyeight, link: '/product-single-twentyeight', articul: '811-10', size: ' 39-44' },

                  ],
                  ClassProducts: [
                        { id: 'eight', image: eight, link: '/product-single-eight', articul: ' 860-12', size: ' 39-44' },
                        { id: 'fiveteen', image: fiveteen, link: '/product-single-fiveteen', articul: ' 701-10', size: ' 39-44' },
                        { id: 'sixteen', image: sixteen, link: '/product-single-sixteen', articul: ' 702-10', size: ' 39-44' },
                        { id: 'seventeen', image: seventeen, link: '/product-single-seventeen', articul: ' 722-10', size: ' 39-44' },
                        // { id: 'eightteen', image: '18.png', link: '/product-single-eightteen', articul: ' 722-10', size: ' 39-44' },
                  ],
                  WinterProducts: [
                        { id: 'nineteen', image: nineteen, link: '/product-single-nineteen', articul: ' 280-10', size: ' 39-44' },
                        { id: 'twenty', image: twenty, link: '/product-single-twenty', articul: ' 201-40', size: ' 39-44' },
                        { id: 'twentyone', image: twentyone, link: '/product-single-twentyone', articul: ' 202-10', size: ' 39-44' },
                        { id: 'twentytwo', image: twentytwo, link: '/product-single-twentytwo', articul: ' 285-41', size: ' 40-44' },
                        { id: 'twentythree', image: twentythree, link: '/product-single-twentythree', articul: ' 271-40', size: ' 40-44' },
                        { id: 'twentyfour', image: twentyfour, link: '/product-single-twentyfour', articul: ' 603-22', size: ' 39-44' },
                        { id: 'twentyfive', image: twentyfive, link: '/product-single-twentyfive', articul: ' 405-22', size: ' 39-44' },
                        { id: 'twentysix', image: twentysix, link: '/product-single-twentysix', articul: ' -', size: ' 39-44' },
                        { id: 'twentyseven', image: twentyseven, link: '/product-single-twentyseven', articul: ' - -', size: ' 39-44' },
                  ],
            };
      },
      mounted() {
            window.scrollTo(0, 0);
      }

};
</script>
  
<template>
    <div class="flex xl:flex-row lg:flex-row flex-col xl:mx-28 lg:mx-32 ml-2 mr-6 my-8">
        <div class="xl:w-1/4 lg:w-1/4 w-full shadow-sm mx-2 p-4 bg-white rounded-lg">
            <!-- <select class="xl:hidden lg:hidden block" :class="['rounded-xl', 'p-5', 'w-full', 'bg-white']" v-model="internalValue" @change="handleChange"
                @click="toggleDropdown"> v-if="isDropdownOpen"
            </select> -->
            <div class="px-3 py-3.5 w-16 flex justify-center items-center rounded-full bg-primary my-2">
                <svg width="36" height="37" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector"
                        d="M9 24.6394L15 20.0644L21 24.6394L18.75 17.2144L24.75 12.9394H17.4L15 5.1394L12.6 12.9394H5.25L11.25 17.2144L9 24.6394ZM15 30.6394C12.925 30.6394 10.975 30.2457 9.15 29.4582C7.325 28.6707 5.7375 27.6019 4.3875 26.2519C3.0375 24.9019 1.96875 23.3144 1.18125 21.4894C0.39375 19.6644 0 17.7144 0 15.6394C0 13.5644 0.39375 11.6144 1.18125 9.7894C1.96875 7.9644 3.0375 6.3769 4.3875 5.0269C5.7375 3.6769 7.325 2.60815 9.15 1.82065C10.975 1.03315 12.925 0.639404 15 0.639404C17.075 0.639404 19.025 1.03315 20.85 1.82065C22.675 2.60815 24.2625 3.6769 25.6125 5.0269C26.9625 6.3769 28.0313 7.9644 28.8188 9.7894C29.6063 11.6144 30 13.5644 30 15.6394C30 17.7144 29.6063 19.6644 28.8188 21.4894C28.0313 23.3144 26.9625 24.9019 25.6125 26.2519C24.2625 27.6019 22.675 28.6707 20.85 29.4582C19.025 30.2457 17.075 30.6394 15 30.6394ZM15 27.6394C18.35 27.6394 21.1875 26.4769 23.5125 24.1519C25.8375 21.8269 27 18.9894 27 15.6394C27 12.2894 25.8375 9.4519 23.5125 7.1269C21.1875 4.8019 18.35 3.6394 15 3.6394C11.65 3.6394 8.8125 4.8019 6.4875 7.1269C4.1625 9.4519 3 12.2894 3 15.6394C3 18.9894 4.1625 21.8269 6.4875 24.1519C8.8125 26.4769 11.65 27.6394 15 27.6394Z"
                        fill="white" />
                </svg>
            </div>
            <h1 class="lg:text-sm text-xl font-semibold lg:pr-0 pr-0 my-2">Высокое качества изготовления</h1>
            <p class="xl:text-md lg:text-sm text-md  font-light lg:pr-0 pr-12 my-2">Продукция нашей компании изготавливается
                из качественных материалов что
                обеспечивает долгий срок службы и
                комфорта</p>
        </div>
        <div class="xl:w-1/4 lg:w-1/4 w-full shadow-sm mx-2 p-4 bg-white rounded-lg">
            <div class="p-3 w-16 flex justify-center items-center rounded-full bg-primary my-2">
                <svg class="" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="stack_FILL0_wght400_GRAD0_opsz24">
                        <path id="Vector"
                            d="M9.75 21.6394V24.6394H6.75C5.925 24.6394 5.21875 24.3457 4.63125 23.7582C4.04375 23.1707 3.75 22.4644 3.75 21.6394V6.6394C3.75 5.8144 4.04375 5.10815 4.63125 4.52065C5.21875 3.93315 5.925 3.6394 6.75 3.6394H21.75C22.575 3.6394 23.2812 3.93315 23.8688 4.52065C24.4563 5.10815 24.75 5.8144 24.75 6.6394V9.6394H21.75V6.6394H6.75V21.6394H9.75ZM15.75 33.6394C14.925 33.6394 14.2188 33.3457 13.6313 32.7582C13.0438 32.1707 12.75 31.4644 12.75 30.6394V15.6394C12.75 14.8144 13.0438 14.1082 13.6313 13.5207C14.2188 12.9332 14.925 12.6394 15.75 12.6394H30.75C31.575 12.6394 32.2813 12.9332 32.8688 13.5207C33.4563 14.1082 33.75 14.8144 33.75 15.6394V30.6394C33.75 31.4644 33.4563 32.1707 32.8688 32.7582C32.2813 33.3457 31.575 33.6394 30.75 33.6394H15.75ZM15.75 30.6394H30.75V15.6394H15.75V30.6394Z"
                            fill="white" />
                    </g>
                </svg>
            </div>
            <h1 class="lg:text-sm text-xl font-semibold lg:pr-0 pr-0 my-2">Широкий ассортимент стилей и моделей</h1>
            <p class="xl:text-md lg:text-sm text-md  font-light lg:pr-0 pr-12 my-2">Компания предоставляет широкий
                ассортимент стилей и моделей что
                позволяет удовлетворить потребности всех потрибетелей</p>
        </div>
        <div class="xl:w-1/4 lg:w-1/4 w-full shadow-sm mx-2 p-4 bg-white rounded-lg">
            <div class="p-3 w-16 flex justify-center items-center rounded-full bg-primary my-2">
                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="price_change_FILL0_wght400_GRAD0_opsz24">
                        <path id="Vector"
                            d="M12.5 26.1394H15.5V24.6394H17C17.425 24.6394 17.7813 24.4957 18.0688 24.2082C18.3563 23.9207 18.5 23.5644 18.5 23.1394V18.6394C18.5 18.2144 18.3563 17.8582 18.0688 17.5707C17.7813 17.2832 17.425 17.1394 17 17.1394H12.5V15.6394H18.5V12.6394H15.5V11.1394H12.5V12.6394H11C10.575 12.6394 10.2188 12.7832 9.93125 13.0707C9.64375 13.3582 9.5 13.7144 9.5 14.1394V18.6394C9.5 19.0644 9.64375 19.4207 9.93125 19.7082C10.2188 19.9957 10.575 20.1394 11 20.1394H15.5V21.6394H9.5V24.6394H12.5V26.1394ZM24.5 25.0144L27.5 22.0144H21.5L24.5 25.0144ZM21.5 15.6394H27.5L24.5 12.6394L21.5 15.6394ZM6.5 30.6394C5.675 30.6394 4.96875 30.3457 4.38125 29.7582C3.79375 29.1707 3.5 28.4644 3.5 27.6394V9.6394C3.5 8.8144 3.79375 8.10815 4.38125 7.52065C4.96875 6.93315 5.675 6.6394 6.5 6.6394H30.5C31.325 6.6394 32.0313 6.93315 32.6188 7.52065C33.2063 8.10815 33.5 8.8144 33.5 9.6394V27.6394C33.5 28.4644 33.2063 29.1707 32.6188 29.7582C32.0313 30.3457 31.325 30.6394 30.5 30.6394H6.5ZM6.5 27.6394H30.5V9.6394H6.5V27.6394Z"
                            fill="white" />
                    </g>
                </svg>
            </div>
            <h1 class="lg:text-sm text-xl font-semibold lg:pr-0 pr-0 my-2">Доступные цены</h1>
            <p class="xl:text-md lg:text-sm text-md  font-light lg:pr-0 pr-12 my-2">Несмотря на высокое качества нашей
                продукции, наша компания предлагает
                доступные цены, что делает обувь доступной для широкого круга покупателей</p>
        </div>
        <div class="xl:w-1/4 lg:w-1/4 w-full shadow-sm mx-2 p-4 bg-white rounded-lg">
            <div class="p-3 w-16 flex justify-center items-center rounded-full bg-primary my-2">
                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="thumb_up_FILL0_wght400_GRAD0_opsz24">
                        <path id="Vector"
                            d="M27.25 32.1394H10.75V12.6394L21.25 2.1394L23.125 4.0144C23.3 4.1894 23.4438 4.4269 23.5563 4.7269C23.6688 5.0269 23.725 5.3144 23.725 5.5894V6.1144L22.075 12.6394H31.75C32.55 12.6394 33.25 12.9394 33.85 13.5394C34.45 14.1394 34.75 14.8394 34.75 15.6394V18.6394C34.75 18.8144 34.725 19.0019 34.675 19.2019C34.625 19.4019 34.575 19.5894 34.525 19.7644L30.025 30.3394C29.8 30.8394 29.425 31.2644 28.9 31.6144C28.375 31.9644 27.825 32.1394 27.25 32.1394ZM13.75 29.1394H27.25L31.75 18.6394V15.6394H18.25L20.275 7.3894L13.75 13.9144V29.1394ZM10.75 12.6394V15.6394H6.25V29.1394H10.75V32.1394H3.25V12.6394H10.75Z"
                            fill="white" />
                    </g>
                </svg>

            </div>
            <h1 class="lg:text-sm text-xl font-semibold lg:pr-0 pr-0 my-2">Надежнея репутация на рынке</h1>
            <p class="xl:text-md lg:text-sm text-md  font-light lg:pr-0 pr-12 my-2">ООО “Исфара Шуз” уже завоевала доверия
                клиентов благодаря качеству
                продукции и высокому уровню обслуживания</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'the-service',
    data() {
        return {
            internalValue: this.value,
            isDropdownOpen: false,
        };
    },
    methods: {
        handleChange() {
            this.$emit('change', this.internalValue);
        },
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
    },
};
</script>

  
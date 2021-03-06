import toastr from "toastr";
import Headers from "../../Components/Header";
import footer from "../../Components/Footer";
import { get } from "../../api/products";
import { $ } from "../../utils";
import { addToCart } from "../../utils/cart";
import "toastr/build/toastr.min.css";
import producthome from "../../Components/product";

const detail = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
          <header>
        ${Headers.render()}
        </header>
            <article class=" mx-auto w-[1200px] ">
     <div class="mx-auto w-[1200px] my-10">
            <div class="grid grid-cols-2 mb-3">
                <h2 class="font-bold text-xl ">${data.productname}</h2>
                <div class="mt-2 flex justify-end">
                    <a href="" class="mt-1">
            <ul class="flex ">
                <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                </li>
                <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                </li>
                <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                </li>
                <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                </li>
                <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                    </svg>
                </li>
            </ul>
        </a>
                    <a href="" class="ml-2 text-sky-600 hover:underline relative hover:font-semibold">13 ????nh gi??</a>
                    <a href="" class="ml-1 text-sky-600 hover:underline relative hover:font-semibold">| 4110 H???i &amp; ????p</a>
                </div>
            </div>
            <hr>
            <div class="grid grid-cols-2 mt-7">
                <div class="mr-3">
                    <div class="border-[1px]">
                        <a href="">
                            <img src="${data.image}">
                        </a>
                    </div>
                    
                    <div class="flex mt-3 justify-center">
                        <div class="flex mr-2">
                            <i class="fas fa-award text-red-700  mr-2"></i>
                            <p class="text-sm">H??ng ch??nh h??ng - b???o h??nh 12 Th??ng</p>
                        </div>
                        <div class="flex">
                            <i class="fas fa-shipping-fast text-red-700  mr-2"></i>
                            <p class="text-sm">Giao h??ng to??n qu???c</p>
                        </div>
                    </div>
                </div>
                <div class="detail">
                    <div class="flex ">
                        <span class="text-red-700 font-semibold text-2xl mr-5 mt-2">${
    data.price
}</span>
                        <span class="font-semibold text-lg line-through mt-3">15.589.000???</span>
                        s
                    </div>
                    
                    <div class="box-Promo">
                      <div class="endow py-[20px]">
                            <span class="bg-[#e9ecef] px-3 font-bold">??u ????i th??m</span>
                        </div>
                        <ul class="content-promo">
                            <li class="inline-flex">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <div>
                                    <h1 class="font-bold">S???n Ph???m:</h1>
                                    <span>
                                         N??5, m??i h????ng c???a ng?????i ph??? n???. ????a hoa r???c r??? v?? ng??t h????ng h??a quy???n c??ng n???t aldehyde, g??i g???n trong l??? th???y tinh c?? thi???t k??? t???i gi???n mang t??nh bi???u t?????ng. M???t m??i h????ng huy???n tho???i v?? b???t t???n.
                                    </span>
                                    <a href="" class="text-blue-600 hover:underline">Xem chi ti???t</a>
                                </div>
                            </li>

                            <li class="inline-flex">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <div>
                                    <h1 class="font-bold">Th??nh Ph???n:</h1>
                                    <span>
                                        Eau de Parfum l???y c???m h???ng t??? h????ng hoa k???t h???p v???i aldehyde ??i???n h??nh. H????ng hoa l?? s??? ho?? quy???n h??i ho?? v?? tinh t??? gi???a hoa h???ng, hoa nh??i v?? h????ng cam qu??t. Th??nh ph???n aldehyde mang ?????n s??? ?????c ????o, c??ng nh???ng n???t h????ng vanilla cho m??i h????ng th??m n???ng n??n, quy???n r??.
                                    </span>
                                    <a href="" class="text-blue-600 hover:underline">Xem chi ti???t</a>
                                </div>
                            </li>

                            <li class="inline-flex">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <div>
                                    <h1 class="font-bold">C???m H???ng</h1>
                                    <span>
                                         N??m 1921, Gabrielle Chanel ???? y??u c???u Ernest Beaux ch??? t??c n??n "m???t lo???i n?????c hoa d??nh cho ph??? n??? v?? mang h????ng th??m nh?? m???t ng?????i ph??? n???", m??nh li???t v?? nguy??n b???n. Nh???ng m???u n?????c hoa mang m??i h????ng c???a s??? m?? ho???c, l???n ?????u ti??n s??? d???ng th??nh ph???n aldehyde, ???? ???????c ????a ra ????? c?? l???a ch???n. Mademoiselle quy???t ?????nh ch???n m???u th??? n??m v?? ?????t cho m??i h????ng n??y m???t c??i t??n ????n gi???n, N??5. Thi???t k??? chai ?????c ????o, d??n nh??n tr???ng tr??n th??n chai v?? n???p ?????y ???????c v??t g??c nh?? m???t vi??n kim c????ng. N??m 1986, Jacques Polge, Ngh??? nh??n ch??? t??c n?????c hoa c???a CHANEL t??? n??m 1978 ???? ??i???u ch??? v?? t???o n??n m???t phi??n b???n tr???n v???n h??n c???a N??5: Eau de Parfum.
                                    </span>
                                    <a href="" class="text-blue-600 hover:underline">Xem chi ti???t</a>
                                </div>
                            </li>
                           
                        </ul>
                    </div>
                    <div class="btn-buy ">
                        <button class="w-full bg-red-700 mt-4 rounded-md text-white hover:bg-red-800" id="btnAddToCart">
                            <div>
                                <strong>MUA NGAY</strong>
                            </div>
                            <p class="text-sm">Giao h??ng mi???n ph?? ho???c nh???n t???i shop</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class ="">
              <h1 class="uppercase text-[16px] font-bold border-b-[1px] mt-2 pl-1"> Th??ng tin chi ti????t sa??n ph????m </h1>
              <p class="text-[14px] leading-[1.8] mb-3"> ${data.detail}
                </p>
        </div>
                    <div class="conten my-[20px]">
                <h1 class="font-bold text-[20px] py-[20px]">New Arrivals</h1>
                  ${await producthome.render()}
            </div>
        </article>
                <footer class="bg-[#f3f3f3] min-w-full m-auto">
                ${footer.render()}
                </footer>
        `;
    },
    afterRender(id) {
        Headers.afterRender();
        $("#btnAddToCart").addEventListener("click", async () => {
            const { data } = await get(id);
            console.log(data);
            addToCart(
                { ...data, quantity: 1 },

                () => {
                    toastr.success(`Them san pham ${data.productname} Thanh cong`);
                },
            );
        });
    },
};
export default detail;
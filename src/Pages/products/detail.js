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
                    <a href="" class="ml-2 text-sky-600 hover:underline relative hover:font-semibold">13 đánh giá</a>
                    <a href="" class="ml-1 text-sky-600 hover:underline relative hover:font-semibold">| 4110 Hỏi &amp; đáp</a>
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
                            <p class="text-sm">Hàng chính hãng - bảo hành 12 Tháng</p>
                        </div>
                        <div class="flex">
                            <i class="fas fa-shipping-fast text-red-700  mr-2"></i>
                            <p class="text-sm">Giao hàng toàn quốc</p>
                        </div>
                    </div>
                </div>
                <div class="detail">
                    <div class="flex ">
                        <span class="text-red-700 font-semibold text-2xl mr-5 mt-2">${
    data.price
}</span>
                        <span class="font-semibold text-lg line-through mt-3">15.589.000₫</span>
                        s
                    </div>
                    
                    <div class="box-Promo">
                      <div class="endow py-[20px]">
                            <span class="bg-[#e9ecef] px-3 font-bold">Ưu đãi thêm</span>
                        </div>
                        <ul class="content-promo">
                            <li class="inline-flex">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <div>
                                    <h1 class="font-bold">Sản Phẩm:</h1>
                                    <span>
                                         N°5, mùi hương của người phụ nữ. Đóa hoa rực rỡ và ngát hương hòa quyện cùng nốt aldehyde, gói gọn trong lọ thủy tinh có thiết kế tối giản mang tính biểu tượng. Một mùi hương huyền thoại và bất tận.
                                    </span>
                                    <a href="" class="text-blue-600 hover:underline">Xem chi tiết</a>
                                </div>
                            </li>

                            <li class="inline-flex">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <div>
                                    <h1 class="font-bold">Thành Phần:</h1>
                                    <span>
                                        Eau de Parfum lấy cảm hứng từ hương hoa kết hợp với aldehyde điển hình. Hương hoa là sự hoà quyện hài hoà và tinh tế giữa hoa hồng, hoa nhài và hương cam quýt. Thành phần aldehyde mang đến sự độc đáo, cùng những nốt hương vanilla cho mùi hương thêm nồng nàn, quyến rũ.
                                    </span>
                                    <a href="" class="text-blue-600 hover:underline">Xem chi tiết</a>
                                </div>
                            </li>

                            <li class="inline-flex">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <div>
                                    <h1 class="font-bold">Cảm Hứng</h1>
                                    <span>
                                         Năm 1921, Gabrielle Chanel đã yêu cầu Ernest Beaux chế tác nên "một loại nước hoa dành cho phụ nữ và mang hương thơm như một người phụ nữ", mãnh liệt và nguyên bản. Những mẫu nước hoa mang mùi hương của sự mê hoặc, lần đầu tiên sử dụng thành phần aldehyde, đã được đưa ra để cô lựa chọn. Mademoiselle quyết định chọn mẫu thứ năm và đặt cho mùi hương này một cái tên đơn giản, N°5. Thiết kế chai độc đáo, dán nhãn trắng trên thân chai và nắp đậy được vát góc như một viên kim cương. Năm 1986, Jacques Polge, Nghệ nhân chế tác nước hoa của CHANEL từ năm 1978 đã điều chế và tạo nên một phiên bản trọn vẹn hơn của N°5: Eau de Parfum.
                                    </span>
                                    <a href="" class="text-blue-600 hover:underline">Xem chi tiết</a>
                                </div>
                            </li>
                           
                        </ul>
                    </div>
                    <div class="btn-buy ">
                        <button class="w-full bg-red-700 mt-4 rounded-md text-white hover:bg-red-800" id="btnAddToCart">
                            <div>
                                <strong>MUA NGAY</strong>
                            </div>
                            <p class="text-sm">Giao hàng miễn phí hoặc nhận tại shop</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class ="">
              <h1 class="uppercase text-[16px] font-bold border-b-[1px] mt-2 pl-1"> Thông tin chi tiết sản phẩm </h1>
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
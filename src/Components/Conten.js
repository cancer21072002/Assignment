import { getAll } from "../api/posts";

const content = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
            <div class="flex">
                <div class="w-[200px] h-[100%]">
                    <ul class="border-solid border-2 border[#f3f3f3] h-[100%]">
                        <li class="px-[30px] py-[10px]  hover:bg-[#f3f3f3] "><a class="" href="">Nước Hoa</a></li>
                        <hr>
                        <li class="px-[30px] py-[10px]  hover:bg-[#f3f3f3]   "><a class="" href="">Nước Hoa</a></li>
                        <hr>
                        <li class="px-[30px] py-[10px]  hover:bg-[#f3f3f3]  "><a class="" href="">Nước Hoa</a></li>
                        <hr>
                        <li class="px-[30px] py-[10px]  hover:bg-[#f3f3f3]  "><a class="" href="">Nước Hoa</a></li>
                        <hr>
                        <li class="px-[30px] py-[10px]   hover:bg-[#f3f3f3] "><a class="" href="">Nước Hoa</a></li>
                        <hr>
                        <li class="px-[30px] py-[10px]   hover:bg-[#f3f3f3] "><a class="" href="">Nước Hoa</a></li>
                        <hr>
                        <li class="px-[30px] py-[10px]  hover:bg-[#f3f3f3]  "><a class="" href="">Nước Hoa</a></li>
                        <hr>
                        <li class="px-[30px] py-[10px]  hover:bg-[#f3f3f3]  "><a class="" href="">Nước Hoa</a></li>
                    </ul>
                </div>
                <div class="banner bg-[white] w-[100%]">
                    <img style="height: 97%" id='anh' src='https://hali.vn/wp-content/uploads/2020/07/thiet-ke-banner-my-pham5.jpg' alt="" width='100%'>
                </div>
            </div>
            <div class="mx-[120px] grid grid-cols-3 gap-6 overflow-hidden relative  my-[20px]">
                <div class="grid grid-cols-2 border-solid border-2 border-[#ec5959] rounded-lg px-[30px] py-[10px] ">
                    <div>
                        <img src="https://rafcart.rslahmed.com/assets/images/svg/delivery-van.svg" alt="" class="m-auto">
                    </div>
                    <div>
                        <h2 class="font-bold">Free shipping</h2>
                        <p class="text-xs">Orders over $200</p>
                    </div>

                </div>
                <div class="grid grid-cols-2 border-solid border-2 border-[#ec5959] rounded-lg px-[30px] py-[10px]">
                    <div>
                        <img src="https://rafcart.rslahmed.com/assets/images/svg/money-back.svg" alt="" class="m-auto">
                    </div>
                    <div>
                        <h2 class="font-bold">Money Returns</h2>
                        <p class="text-xs">30 Days money return</p>
                    </div>
                </div>
                <div class="grid grid-cols-2 border-solid border-2 border-[#ec5959] rounded-lg px-[30px] py-[10px]">
                    <div>
                        <img src="https://rafcart.rslahmed.com/assets/images/svg/service-hours.svg" alt="" class="m-auto">
                    </div>
                    <div>
                        <h2 class="font-bold">24/7 Support</h2>
                        <p class="text-xs">Customer support</p>
                    </div>
                </div>

            </div>
            <div class="conten my-[20px]">
                <h1 class="font-bold text-[20px] py-[20px]">New Arrivals</h1>
                <div class="product grid grid-cols-4 gap-5 ">
                    <form action="">
                        <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer  ">
                            <div class=" w-[100%] ">
                                <a href="#"> <img src="https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/n-5-l-eau-eau-de-toilette-spray-3-4fl-oz--packshot-default-105530-8848376922142.jpg" alt=""></a>
                            </div>
                            <div class="py-[10px] px-[10px] leading-8">
                                <a href="#">
                                    <h4 class="font-bold hover:underline">HP Pavilion 15</h4>
                                </a>
                                <p class="text-[15px] text-[red]">$450.000000</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div class="conten-item ">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </form>

                     <form action="">
                        <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer ">
                            <div class=" w-[100%] ">
                                <a href="#"> <img src="https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/bleu-de-chanel-eau-de-parfum-spray-3-4fl-oz--packshot-default-107360-8848377380894.jpg" alt=""></a>
                            </div>
                            <div class="py-[10px] px-[10px] leading-8">
                                <a href="#">
                                    <h4 class="font-bold hover:underline">HP Pavilion 15</h4>
                                </a>
                                <p class="text-[15px] text-[red]">$450.000000</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div class="conten-item ">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </form>
                    
                    <form action="">
                        <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer ">
                            <div class=" w-[100%] ">
                                <a href="#"> <img src="https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/coco-mademoiselle-eau-de-parfum-spray-3-4fl-oz--packshot-default-116520-8848376659998.jpg" alt=""></a>
                            </div>
                            <div class="py-[10px] px-[10px] leading-8">
                                <a href="#">
                                    <h4 class="font-bold hover:underline">HP Pavilion 15</h4>
                                </a>
                                <p class="text-[15px] text-[red]">$450.000000</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div class="conten-item ">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </form>
                    <form action="">
                        <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer ">
                            <div class=" w-[100%] ">
                                <a href="#"> <img src="https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/bleu-de-chanel-parfum-twist-and-spray-3x0-7fl-oz--packshot-default-107120-8826672349214.jpg" alt=""></a>
                            </div>
                            <div class="py-[10px] px-[10px] leading-8">
                                <a href="#">
                                    <h4 class="font-bold hover:underline">HP Pavilion 15</h4>
                                </a>
                                <p class="text-[15px] text-[red]">$450.000000</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div class="conten-item ">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <div class="banner2 my-[30px]">
                        <img src="https://storage.googleapis.com/sonduongmoi-com/2020/02/bbea4357-1551264167_chanel_perfume_banner.png" alt="">
                    </div>
                </div>
            </div>

            <div class="conten my-[20px]">
                <h1 class="font-bold text-[20px] py-[20px]">Recomended For You</h1>
                <div class="bg-gray-100">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mx-auto py-8 sm:py-10 lg:max-w-none">
            <div class="container  mx-auto max-w-7x1">
            <div class="flex flex-wrap -m-4">
                 ${data
        .map(
            (post) => `
         <div class="xl:w-1/3 md:w-1/2 p-4 overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
                    <div class="bg-white p-6 rounded-lg">
                        <a href="/new/${post.id}">   <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="${post.image}"></a>
                     
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">   ${post.day}</h3>
                         <a href="/new/${post.id}"> <h2 class="text-lg text-gray-900 font-medium title-font mb-4">${post.title}</h2>  </a>
                        <p class="leading-relaxed text-base">${post.introduce}</p>
                    </div>
                </div>



         `,
        )
        .join("")}
    </div>
       </div>
          </div>
  </div>
</div>
      
 
           


            </div>
            
            <div class="bg-[#f3f3f3] grid grid-cols-2 gap-5 my-[20px] ">
                <div class="img-1">
                    <img src="https://file.hstatic.net/1000025647/file/nuoc-hoa-chanel_8ba9e242a3ca44ebb206fb98d513d0b9_1024x1024.jpg" alt="" class="w-[80%] m-4">
                </div>
                <div class="conten2 py-[10%] ">
                    <h1 class="font-bold text-[30px] text-center">ORDER CHANEL Now!</h1>
                    <p class="py-[10px]">Shopping fastly and easily more with our app. Get a link to download the app on your phone</p>
                    <form action="" class="w-[700px] flex ">
                        <input type="text" class="h-10 w-8/12 pl-3 rounded-sm" placeholder="Email Address">
                        <div>
                            <button class="bg-[red] text-[#ffffff] hover:text-[#ff0000] px-[20px] py-[8px] rounded-r-lg">Subscribe</button>
                        </div>
                    </form>
                </div>

            </div>
      
      
      `;
    },
};
export default content;
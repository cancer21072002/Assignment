import { reRender } from "../utils/index";

const Headers = {
    render() {
        return /* html */ `
     
            <div class="header-top flex items-center justify-between h-[100px] w-[1200px] m-auto">
                <figure class="logo "  >
                    <a href="/">
                        <img class="" src="https://media.designrush.com/inspirations/129360/conversions/_1513770087_98_chanel1-preview.jpg" width="70%" >
                    </a>
                </figure>
                <div>
                    <ul class="w-[800px] pl-10 flex ">
                        <li class="hover:underline decoration-solid"><a class="px-[20px]" href="/">Trang Chủ</a></li>
                        <li class="hover:underline decoration-solid"><a class="px-[20px]" href="/#/products">Sản Phẩm</a></li>
                        <li class="hover:underline decoration-solid"><a class="px-[20px]" href="/#/c">Giỏ hàng</a></li>
                        <li class="hover:underline decoration-solid"><a class="px-[20px]" href="/#/blog">Blog</a></li>
                        <li class="hover:underline decoration-solid"><a class="px-[20px]" href="/contact">Liên Hệ</a></li>
                        
                    </ul>
                </div>
                <div class="flex text-center checksn">
                
                    
    
                        <div class="signin pl-5">
                              
          <ul class="flex">
  ${
    localStorage.getItem("user")
        ? `
                        <li><a class="block px-4 py-3 hover:bg-indigo-500 hover:text-white " id="email"></a></li>
                        <li><a class="block px-4 py-3 hover:bg-indigo-500 hover:text-white" id="logout">Logout</a></li>
                        
                          
                    `
        : `<span class="sm:ml-3"><a href="/signup"><button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-400 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up </button></a></span> 
        <span class="sm:ml-3"><a href="/signin"><button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-400 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button></a></span>`
}
                     </ul>
                    
                        </div>
                </div>

            </div>
           



                <div class="header-top bg-rose-100 flex justify-between h-[80px] w-[1200px] m-auto">
                    <div class="nav pt-5">
                        <div>
                            <button class="bg-[#2b2d42] text-[#ffffff] hover:text-[#ff0000] mx-4 px-[20px] py-[8px] ">Danh Mục</button>
                        </div>
                    </div>
                    <form action="" class="w-[700px] mt-5  pl-4 flex ">
                        <input type="text" class="h-10 w-10/12 pl-3 rounded-sm" placeholder="Nhập tên nước hoa bạn cần tìm">
                        <div>
                            <button class="bg-[#2b2d42] text-[#ffffff] hover:text-[#ff0000] px-[20px] py-[8px] rounded-r-lg">Tìm kiếm</button>
                        </div>
                    </form>
                    <div class="flex mt-5 text-center ">

                        <div class="signin pl-5">
                              
          <ul   class="flex">

                     </ul>
                        </div>
                    </div>
                </div>
            
`;
    },
    afterRender() {
        const email = document.querySelector("#email");
        const logout = document.querySelector("#logout");
        email.innerHTML = JSON.parse(localStorage.getItem("user")).email;

        logout.addEventListener("click", () => {
            localStorage.removeItem("user");
            reRender(Headers, "header");
        });
    },

};
export default Headers;
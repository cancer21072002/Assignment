import Headers from "../../Components/Header";
import footer from "../../Components/Footer";
import { get } from "../../api/posts";

const newlist = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
          <header>
        ${Headers.render()}
        </header> 
            <article class=" mx-auto w-[1200px] ">
     <div class="mx-auto w-[1200px] my-10">
        <main class="container mx-auto ">
            <div>
                <div class="my-8 ">
                    <a href=""><span><i class="fas fa-home"></i></span>
        
                        <h1 class="text-[50px] font-semibold text-center">Bai viet moi nhat nam 2022</h1>
                        </i></a>
                </div>
            </div>
            <div class="grid lg:grid-cols-12 gap-4">
                <div class="col-span-8">
                  <div class="my-4 mx-auto text-center">
                        <h2 class=" uppercase font-semibold text-[20px]"> ${
    data.title
}</h2>
                        <p class="font-serif text-gray-400 text-base">by <span> ${
    data.username
} | </span><span> ${data.day} |
                    </div>
                    <img src=" ${
    data.image
}" alt="" class="object-cover " style="width: 100%; height: 500px;">
                  
                    <div class="font-serif text-md text-gray-600 leading-[25px] mt-[20px] "> ${
    data.introduce
}</div>
                    <div class="font-serif text-gray-600 pt-[20px]">
                    ${data.content}
                    </div>
                </div>
                <div class="col-span-4 ">
                    <div class=" font-serif text-xl mb-4">
                        <h3 class="my-[20px]">Bai viet Lien quan</h3>
                    </div>
                    
                </div>
            </div>
        </main>
            </div>
            <div class=" shadow rounded p-8 sm:p-12">
                <p class="text-3xl font-bold leading-7 text-center text-back">Contact me</p>
                <form action="" method="post">
                    <div class="md:flex items-center mt-12">
                        <div class="w-full md:w-1/2 flex flex-col">
                            <label class="font-semibold leading-none text-back">Name</label>
                            <input type="text" class="  p-3 mt-4 shadow appearance-none border">
                        </div>
                        <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label class="font-semibold leading-none text-back ">Phone</label>
                            <input type="email" class=" p-3 mt-4 shadow appearance-none border">
                        </div>
                    </div>
                    <div class="md:flex items-center mt-8">
                        <div class="w-full flex flex-col">
                            <label class="font-semibold leading-none text-back">Subject</label>
                            <input type="text" class=" p-3 mt-4 shadow appearance-none border">
                        </div>
                    </div>
                    <div>
                        <div class="w-full flex flex-col mt-8">
                            <label class="font-semibold leading-none text-gray-300">Message</label>
                            <textarea type="text" class="h-40  p-3 focus:outline-none focus:border-blue-700 mt-4  rounded shadow appearance-none border"></textarea>
                        </div>
                    </div>
                    <div class="flex items-center justify-center w-full">
                        <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Send message
                    </button>
                    </div>
                </form>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863981044334!2d105.74459841476343!3d21.03812778599329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1645168252911!5m2!1svi!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" class="my-[30px]"></iframe>
        </article>
                <footer class="bg-[#f3f3f3] min-w-full m-auto">
                ${footer.render()}
                </footer>
        `;
    },
    afterRender() {
        Headers.afterRender();
    },
};
export default newlist;
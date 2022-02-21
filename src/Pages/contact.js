import Headers from "../Components/Header";
import footer from "../Components/Footer";
import { getAll } from "../api/posts";

const contact = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
          <header>
        ${Headers.render()}
        </header> 
            <div class="">
                <div class="col l-6 m-12 s-12">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3738.382986183426!2d106.33761211423521!3d20.449457212678926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zbmfhu41jIMOhbmggY29zbWV0aWNz!5e0!3m2!1svi!2s!4v1621128017258!5m2!1svi!2s"
                        width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
                
                        <ul class="contact__info">
                            <li class="contact__text">
                                <i class="fas fa-map-marked-alt"></i> Tòa nhà FPT Polytechnic, Phố Trịnh Văn Bô, Nam Từ
                                Liêm, Hà Nội
                            </li>
                            <li>
                                <a href="tel:076 922 0162" class="contact__link">
                                    <i class="fas fa-phone"></i> 076 922 0162
                                </a>
                                <a href="tel:076 922 0162" class="contact__link">
                                    &#8212; 076 922 0162
                                </a>
                            </li>

                            <li>
                                <a href="#" class="contact__link">
                                    <i class="fas fa-envelope"></i> vandthph13979@fpt.edu.vn
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="about-us">
                        <div class="about-us__heading">Liên hệ với chúng tôi</div>
                        <div class="form__group">
                            <div>
                                <input type="text" value="Họ và tên">
                            </div>
                            <div>
                                <input type="text" value="Email">
                            </div>
                            <div>
                                <input type="text" value="Địa chỉ">
                            </div>
                            <div>
                                <input type="text" value="Số điện thoại">
                            </div>
                        </div>
                        <textarea name="" id="" cols="30" rows="5" placeholder="Lời nhắn"></textarea>
                        <button type="submit" class="btn btn--default">Gửi</button>
                    </div>
                </div>
            </div>
                <footer class="bg-[#f3f3f3] min-w-full m-auto">
                ${footer.render()}
                </footer>
        `;
    },

    afterRender() {
        Headers.afterRender();
    },
};

export default contact;
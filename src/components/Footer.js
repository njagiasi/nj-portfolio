import React from 'react'
export default function Footer() {
    return (
        <footer class="page-footer font-small bg-dark text-white text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 pt-5">
                        <div class="flex-center ficon">
                            <a class="fb-ic">
                                <i class="fab fa-facebook-f fa-lg white-text fa-2x"> </i>
                            </a>
                            <a class="li-ic">
                                <i class="fab fa-linkedin-in fa-lg white-text fa-2x"> </i>
                            </a>
                            <a class="ins-ic">
                                <i class="fab fa-instagram fa-lg white-text fa-2x"> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-copyright text-center py-3">© 2022 Naina Jagiasi
            </div>
        </footer>
    )
}
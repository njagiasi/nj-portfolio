import React from 'react'
import './footer.scss'
export default function Footer() {
    return (
        <footer class="page-footer text-center container">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 pt-5">
                        <p>Find me in</p>
                        <div class="flex-center ficon">
                            <a class="fb-ic" href="/">
                                <i class="fab fa-facebook-f fa-lg white-text fa-2x"> </i>
                            </a>
                            <a class="li-ic" href="/">
                                <i class="fab fa-linkedin-in fa-lg white-text fa-2x"> </i>
                            </a>
                            <a class="ins-ic" href="/">
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
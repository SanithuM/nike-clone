import React from "react";
import { Globe } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-600"
            style={{ fontFamily: "'Helvetica Now MT Text', sans-serif" }}>
            <div className="max-w-7xl mx-auto px-6 py-10">
                {/* Nike logo */}
                <div className="flex justify-center mb-6">
                    <img src="/swoosh-logo.png" alt="Nike" className="h-8" />
                </div>

                {/* Top nav */}
                <div className="flex justify-center gap-8 mb-10 font-semibold">
                    <a href="#" className="hover:underline">
                        Find a Store
                    </a>
                    <a href="#" className="hover:underline">
                        Help
                    </a>
                    <a href="#" className="hover:underline">
                        Join Us
                    </a>
                    <a href="#" className="hover:underline">
                        Sign In
                    </a>
                </div>

                {/* Main footer grid */}
                <div className="flex justify-center mb-20 mt-30">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
                        <div>
                            <h3 className="font-semibold text-gray-950 mb-6 text-xl ">Featured</h3>
                            <ul className="space-y-4 text-base font-medium text-gray-500">
                                <li><a href="#" className="hover:underline">Air Force 1</a></li>
                                <li><a href="#" className="hover:underline">Jordan 1</a></li>
                                <li><a href="#" className="hover:underline">Air Max Dn</a></li>
                                <li><a href="#" className="hover:underline">Vomero</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-950 mb-6 text-xl">Shoes</h3>
                            <ul className="space-y-4 text-base font-medium text-gray-500">
                                <li><a href="#" className="hover:underline">All Shoes</a></li>
                                <li><a href="#" className="hover:underline">Jordan Shoes</a></li>
                                <li><a href="#" className="hover:underline">Running Shoes</a></li>
                                <li><a href="#" className="hover:underline">Basketball Shoes</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-950 mb-6 text-xl">Clothing</h3>
                            <ul className="space-y-4 text-base font-medium text-gray-500">
                                <li><a href="#" className="hover:underline">All Clothing</a></li>
                                <li><a href="#" className="hover:underline">Tops & T-Shirts</a></li>
                                <li><a href="#" className="hover:underline">Shorts</a></li>
                                <li><a href="#" className="hover:underline">Hoodies & Pullovers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-950 mb-6 text-xl">Kids</h3>
                            <ul className="space-y-4 text-base font-medium text-gray-500">
                                <li><a href="#" className="hover:underline">Infant & Toddler Shoes</a></li>
                                <li><a href="#" className="hover:underline">Kids Shoes</a></li>
                                <li><a href="#" className="hover:underline">Kids Basketball Shoes</a></li>
                                <li><a href="#" className="hover:underline">Kids Running Shoes</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="mb-10 text-gray-300" />

                {/* Bottom section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 mt-10">
                    <div>
                        <h3 className="font-semibold text-sm text-gray-900 mb-8">Resources</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:underline">Gift Cards</a></li>
                            <li><a href="#" className="hover:underline">Find a Store</a></li>
                            <li><a href="#" className="hover:underline">Membership</a></li>
                            <li><a href="#" className="hover:underline">Nike Journal</a></li>
                            <li><a href="#" className="hover:underline">Site Feedback</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm text-gray-900 mb-8">Help</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Get Help</a></li>
                            <li><a href="#" className="hover:underline">Order Status</a></li>
                            <li><a href="#" className="hover:underline">Shipping and Delivery</a></li>
                            <li><a href="#" className="hover:underline">Returns</a></li>
                            <li><a href="#" className="hover:underline">Order Cancellation</a></li>
                            <li><a href="#" className="hover:underline">Payment Options</a></li>
                            <li><a href="#" className="hover:underline">Gift Card Balance</a></li>
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm text-gray-900 mb-8">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">About Nike</a></li>
                            <li><a href="#" className="hover:underline">News</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:underline">Investors</a></li>
                            <li><a href="#" className="hover:underline">Purpose</a></li>
                            <li><a href="#" className="hover:underline">Sustainability</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm text-gray-900 mb-8">Promotions & Discounts</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Student</a></li>
                            <li><a href="#" className="hover:underline">Military</a></li>
                            <li><a href="#" className="hover:underline">Teacher</a></li>
                            <li><a href="#" className="hover:underline">First Responders & Medical Professionals</a></li>
                            <li><a href="#" className="hover:underline">Birthday</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer bottom row */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 pt-4">
                    <p>© 2025 Nike, Inc. All Rights Reserved</p>
                    <div className="flex gap-4 mt-2 md:mt-0">
                        <a href="#" className="hover:underline">Guides</a>
                        <a href="#" className="hover:underline">Terms of Sale</a>
                        <a href="#" className="hover:underline">Terms of Use</a>
                        <a href="#" className="hover:underline">Nike Privacy Policy</a>
                        <a href="#" className="hover:underline">Your Privacy Choices</a>
                        <a href="#" className="hover:underline">CA Supply Chains Act</a>
                    </div>
                    <div className="flex items-center gap-1 mt-2 md:mt-0">
                        <Globe size={14} />
                        <span>United States</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

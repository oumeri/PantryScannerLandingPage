import { Scan } from "lucide-react";



type Props = {
 
}
export const Footer = ({}: Props) => {
    return ( 
    <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 place-items-center">
            {/* Pantry Scanner Section */}
            <div>
                <div className="flex items-center space-x-2 mb-6">
                <Scan className="w-6 h-6 text-green-500" />
                <span className="text-xl font-bold">Pantry Scanner</span>
                </div>
                <p className="text-gray-400">Making food management smarter and easier.</p>
            </div>

            {/* Company Section */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Our Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
                </ul>
            </div>

            {/* Support Section */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="#">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                </ul>
            </div>

            {/* Resources Section */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Documentation</a></li>
                </ul>
            </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Pantry Scanner. All rights reserved.</p>
            </div>
        </div>
    </footer>

    );
}
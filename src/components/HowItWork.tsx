import { Clock, Scan, ShoppingBasket } from "lucide-react";

type Props = {
 
}
export const HowItWork = ({}: Props) => {
    return ( 
        <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Scan className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Scan Items</h3>
              <p className="text-gray-600">Simply scan your food items using your phone's camera</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Track Expiry</h3>
              <p className="text-gray-600">Get automatic expiry date tracking and timely notifications</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBasket className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Organize</h3>
              <p className="text-gray-600">Keep your pantry organized within your pantry</p>
            </div>
          </div>
        </div>
      </section>
    );
}
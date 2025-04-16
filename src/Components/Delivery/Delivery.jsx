import { Clock, Percent, ShieldCheck, Truck } from "lucide-react"

const Delivery = () => {
  return (
    <div className="lg:container flex items-center justify-between py-10">
        <div className="grid grid-cols-4 place-items-center w-full ">
            <div className="delivery-wrapper ">
                <div className="flex items-center gap-4 text-black">
                    <p> <Percent size='3rem' /> </p>
                    <div>
                        <h4 className="text-base text-[#272343] capitalize font-inter
                        font-medium mb-2.5">Discount</h4>
                        <h4 className="text-sm text-[#9a9caa] font-inter
                        font-normal">Every Week new sales</h4>
                    </div>
                </div>
            </div>

            <div className="delivery-wrapper ">
                <div className="flex items-center gap-4 text-black">
                    <p> <Truck size='3rem' /> </p>
                    <div>
                        <h4 className="text-base text-[#272343] capitalize font-inter
                        font-medium mb-2.5">Free Delivery</h4>
                        <h4 className="text-sm text-[#9a9caa] font-inter
                        font-normal">100% Free for all orders</h4>
                    </div>
                </div>
            </div>

            <div className="delivery-wrapper ">
                <div className="flex items-center gap-4 text-black">
                    <p> <Clock size='3rem' /> </p>
                    <div>
                        <h4 className="text-base text-[#272343] capitalize font-inter
                        font-medium mb-2.5">Great Support 24/7</h4>
                        <h4 className="text-sm text-[#9a9caa] font-inter
                        font-normal">We care your experiences</h4>
                    </div>
                </div>
            </div>

            <div className="delivery-wrapper ">
                <div className="flex items-center gap-4 text-black">
                    <p> <ShieldCheck size='3rem' /> </p>
                    <div>
                        <h4 className="text-base text-[#272343] capitalize font-inter
                        font-medium mb-2.5">Secure Payment</h4>
                        <h4 className="text-sm text-[#9a9caa] font-inter
                        font-normal">100% Secure Payment Method</h4>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Delivery
